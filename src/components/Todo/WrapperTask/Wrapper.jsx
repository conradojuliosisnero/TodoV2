import PropTypes from "prop-types";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { TASK } from "../../../data/wrapperTask";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import Task from "../Task/Task";

function Wrapper({ wrapper, task, set }) {

  function handlerDrag(event) {
    const { active, over } = event;
    if (!active || !over) {
      return;
    }
    set((task) => {
      const oldIndex = task.findIndex((task) => task.id === active.id);
      const newIndex = task.findIndex((task) => task.id === over.id);
      return arrayMove(task, oldIndex, newIndex);
    });
  }

  return (
    <div
      className={`relative bg-white text-gray-600 border-2 dark:border-slate-800 dark:bg-gray-700 dark:text-white p-4 flex flex-col items-center w-full rounded-lg mb-3 h-[400px]`}
    >
      {/* TITLE WRAPPER  */}
      <div className="flex w-full place-content-start place-items-center">
        <div className={`w-5 h-5 rounded-full border-2 ${wrapper.color}`}></div>
        <span className={` relative font-semibold text-lg rounded-md px-1 m-1`}>
          {wrapper.name}
        </span>
      </div>

      {/* TASK VIEWS  */}
      <DndContext collisionDetection={closestCenter} onDragEnd={handlerDrag}>
        <ul className="overflow-y-scroll overflow-auto dark:custom-scroll dark:bg-transparent gap-4 p-4 mt-2 w-full mb-4">
          <SortableContext items={TASK} strategy={verticalListSortingStrategy}>
            {task?.map((t, index) => (
                  <Task task={t} key={index} />
                ))}
          </SortableContext>
        </ul>
      </DndContext>

      {/* ADD ITEMS  */}
      <div className="flex py-2 place-content-start w-full h-8 left-2 bottom-2 place-items-center">
        {/* ADD ICONS */}

        <Dropdown className="dark:bg-slate-700 w-full">
          <DropdownTrigger>
            <Button variant="ligth" className="w-full flex justify-start">
              <svg
                className="w-[40px] h-[40px] stroke-slate-500 dark:stroke-slate-400"
                viewBox="0 0 24 24"
              >
                <title />

                <g id="Complete">
                  <g data-name="add" id="add-2">
                    <g>
                      <line
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="12"
                        x2="12"
                        y1="19"
                        y2="5"
                      />

                      <line
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="5"
                        x2="19"
                        y1="12"
                        y2="12"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">Add Task</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}

Wrapper.propTypes = {
  wrapper: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  task: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  setTask: PropTypes.func.isRequired,
};

export default Wrapper;
