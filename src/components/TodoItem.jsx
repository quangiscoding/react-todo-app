import { SquarePen, Trash } from "lucide-react";

const priorityStyles = {
  high: "bg-red-600 text-black/60 font-bold",
  medium: "bg-yellow-500 text-black/60 font-bold",
  low: "bg-blue-500 text-black/60 font-bold",
};

const borderStyles = {
  high: "border-red-600",
  medium: "border-yellow-500",
  low: "border-blue-500",
};

const tagStyles = {
  high: "bg-red-600 text-white",
  medium: "bg-yellow-500 text-black",
  low: "bg-blue-500 text-white",
};

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const TodoItem = ({ todo, onDelete, onEdit }) => {
  const { id, title, description, dueDate, priority, category } = todo;

  return (
    <li
      className={`relative border rounded-md  overflow-hidden ${borderStyles[priority]}`}
    >
      <div className="min-h-20 px-4 py-2 flex items-center justify-between">
        {/* Meta */}
        <div className="flex flex-1 flex-col gap-2">
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="text-md">{description}</p>
          {/* Due date and Category */}
          <div className="flex items-center gap-4">
            <span className="italic">{dueDate}</span>
            <span
              className={`fit-content px-4 py-1 rounded-full ${tagStyles[priority]}`}
            >
              {capitalize(category)}
            </span>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(todo)}
            className="p-2 rounded-md border border-green-600 bg-white text-green-600 hover:bg-green-600 hover:text-white active:scale-95 transition duration-200 cursor-pointer"
          >
            <SquarePen className="size-5" />
          </button>

          <button
            onClick={() => onDelete(id)}
            className="p-2 rounded-md border border-red-600 bg-white text-red-600 hover:bg-red-600 hover:text-white active:scale-95 transition duration-200 cursor-pointer"
          >
            <Trash className="size-5" />
          </button>
        </div>
        {/* Priotiry */}
        <div className="min-w-[10%] text-center text-xs absolute top-0 right-0 flex">
          <span
            className={`w-full p-1 rounded-bl-md ${priorityStyles[priority]}`}
          >
            {capitalize(priority)}
          </span>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
