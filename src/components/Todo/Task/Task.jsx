import "./styles.css";

export default function Task() {
  return (
    <ul className="overflow-y-scroll dark:custom-scroll dark:bg-transparent gap-4 p-4 mt-2 w-full flex-grow mb-4">
      {/* TASK  */}
      <li className="dark:bg-slate-600 font-normal w-full h-12 rounded-lg border-1 border-slate-300 flex justify-start p-2 items-center mb-2">
        <p className="flex-grow">Task</p>
        <div className="w-6 h-6 border-2 border-slate-700 rounded-full"></div>
      </li>
    </ul>
  );
}
