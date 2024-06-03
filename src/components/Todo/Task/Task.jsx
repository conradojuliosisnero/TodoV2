import "./styles.css";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function Task() {
  return (
    <ul className="overflow-y-scroll dark:custom-scroll dark:bg-transparent gap-4 p-4 mt-2 w-full flex-grow mb-4">
      {/* TASK  */}
      <li className="dark:bg-slate-600 font-normal w-full h-12 rounded-lg flex justify-start p-2 items-center mb-2 cursor-grab">
        <p className="flex-grow">Task</p>

        {/* ICON OPTIONS TASK */}
        <Dropdown className="bg-slate-700">
          <DropdownTrigger>
            <Button variant="ligth">
              <svg
                className="w-[30px] h-[30px] fill-slate-600 dark:fill-slate-700 "
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75Z" />
                <path d="M19 13.75C19.9665 13.75 20.75 12.9665 20.75 12C20.75 11.0335 19.9665 10.25 19 10.25C18.0335 10.25 17.25 11.0335 17.25 12C17.25 12.9665 18.0335 13.75 19 13.75Z" />
                <path d="M5 13.75C5.9665 13.75 6.75 12.9665 6.75 12C6.75 11.0335 5.9665 10.25 5 10.25C4.0335 10.25 3.25 11.0335 3.25 12C3.25 12.9665 4.0335 13.75 5 13.75Z" />
              </svg>
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new" className="">Edit</DropdownItem>
            <DropdownItem key="delete" className="text-danger " color="danger">
              Delete 
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </li>
    </ul>
  );
}
