import useTodo from "./hooks/useTodo.jsx";
import useModal from "./hooks/useModal.jsx";

import TodoList from "./components/TodoList.jsx";
import TodoModal from "./components/TodoModal.jsx";

const App = () => {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodo();
  const { isOpen, editingTodo, openCreate, openEdit, close } = useModal();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col gap-4 items-center justify-center p-4">
      {/* Modal */}
      {isOpen && (
        <TodoModal
          onClose={close}
          onAdd={addTodo}
          editingTodo={editingTodo}
          onUpdate={updateTodo}
        />
      )}

      {/* Todo List */}
      <TodoList todos={todos} onDelete={deleteTodo} onEdit={openEdit} />

      {/* Add Button */}
      <button
        onClick={openCreate}
        className="px-4 py-2 rounded-md border border-green-600 bg-white text-green-600 hover:bg-green-600 hover:text-white active:scale-95 transition duration-200 cursor-pointer"
      >
        Add Todo
      </button>
    </div>
  );
};

export default App;
