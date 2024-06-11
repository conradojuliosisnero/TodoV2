import { useState } from "react";

export default function DropDown() {
  const [filterTag, setFilterTag] = useState([]);

  const handlerTag = (e) => {
    let value = e.target.textContent;
    // Verificar si el valor ya está en el array
    setFilterTag((prevFilterTag) => {
      if (prevFilterTag.includes(value)) {
        return prevFilterTag; // Si el valor ya está en el array, no hacer nada
      } else {
        return [...prevFilterTag, value]; // Si el valor no está en el array, agregarlo
      }
    });
  };
  
    
  return (
    <div className="rounded-lg absolute left-[30%] top-[55px] border-2 border-gray-600 dark:border-gray-800 dark:bg-gray-800/30 p-2 z-10 backdrop-blur">
      <div className="flex flex-col">
        <span className="text-md mb-2 cursor-pointer hover:underline text-green-500 font-semibold"
        onClick={handlerTag}
        >
          News
        </span>
        <span className="text-md mb-2 cursor-pointer hover:underline text-orange-500 font-semibold"
        onClick={handlerTag}
        >
          Progress
        </span>
        <span className="text-md mb-2 cursor-pointer hover:underline text-violet-500 font-semibold"
        onClick={handlerTag}
        >
          Done
        </span>
        
      </div>
    </div>
  );
}
