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

const TodoItem = ({ todo, onDelete, onEdit, onToggle }) => {
  const { id, title, description, dueDate, priority, category, isCompleted } =
    todo;

  return (
    <li
      className={`min-h-40 relative flex items-center justify-center border rounded-md overflow-hidden transition-all duration-300 ${
        borderStyles[priority]
      } ${isCompleted ? "bg-gray-200 opacity-60" : "bg-white"}`}
    >
      <div className="w-full h-full p-6 flex items-center justify-between gap-10">
        {/* Toggle */}
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => onToggle(id)}
          className="size-5 cursor-pointer accent-green-600"
        />

        {/* Meta */}
        <div className="flex flex-1 flex-col gap-2">
          <h3
            className={`text-3xl font-bold line-clamp-1 ${
              isCompleted ? "line-through text-gray-500" : ""
            }`}
          >
            {title}
          </h3>

          <p
            className={`text-md line-clamp-2 ${
              isCompleted ? "line-through text-gray-500" : ""
            }`}
          >
            {description}
          </p>

          <div className="flex items-center gap-4">
            <span className={`italic ${isCompleted ? "text-gray-500" : ""}`}>
              {dueDate}
            </span>

            <span
              className={`w-fit max-w-48 px-4 py-1 rounded-full truncate ${
                tagStyles[priority]
              }`}
            >
              {capitalize(category)}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="ml-5 flex gap-2">
          <button
            onClick={() => onEdit(todo)}
            disabled={isCompleted}
            className="p-2 rounded-md border border-green-600 bg-white text-green-600 hover:bg-green-600 hover:text-white active:scale-95 transition duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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

        {/* Priority */}
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
