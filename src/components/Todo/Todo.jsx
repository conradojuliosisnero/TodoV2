import "./todo.css";

export default function Todo() {
  return (
    <div className="gridContainer h-screen">
      <div className="[grid-area: dashboard] flex flex-col overflow-y-auto bg-blue-500 p-4 text-white">
        ASIDE
      </div>
      <main className="[grid-area:main] flex">
        <div className=" bg-green-500 p-4 text-white">New Todo</div>
        <div className=" bg-yellow-500 p-4 text-white">Progress</div>
        <div className=" bg-red-500 p-4 text-white">Done</div>
      </main>
    </div>
  );
}
