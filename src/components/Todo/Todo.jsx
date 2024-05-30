import "./todo.css";
import { WRAPPER } from "../../data/wrapperTask";
import Wrapper from "./WrapperTask/Wrapper";

export default function Todo() {
  return (
    <div className="gridContainer h-screen gap-4">
      <div className="[grid-area: dashboard] row-span-2 flex flex-col overflow-y-auto bg-blue-500 p-4 text-white">
        ASIDE
      </div>
      <div className="[grid-area:filter] bg-violet-800 pt-3 pr-3 mr-3 mt-3 flex place-content-center">Filter</div>
      <main className="[grid-area:main] grid grid-cols-3 gap-4 mr-3">
        {WRAPPER?.map((wrapper) => (
          <Wrapper key={wrapper.id} wrapper={wrapper} />
        ))}
      </main>
    </div>
  );
}
