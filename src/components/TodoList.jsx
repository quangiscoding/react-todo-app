import TodoItem from "./TodoItem.jsx";
import NoTaskUI from "./NoTaskUI.jsx";

const TodoList = ({ todos, onDelete, onEdit, onToggle }) => {
  return (
    <div className="max-w-6xl w-full min-h-100 max-h-150 overflow-y-auto p-4 md:p-8 bg-white shadow-lg rounded-lg">
      {todos.length === 0 ? (
        <NoTaskUI />
      ) : (
        <ul className="list-none w-full flex flex-col gap-4">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onEdit={onEdit}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
