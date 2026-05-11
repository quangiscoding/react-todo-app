import { useEffect, useState } from "react";

import TodoList from "./components/TodoList.jsx";
import TodoModal from "./components/TodoModal.jsx";

import { tasks } from "./data/todoData.js";

const App = () => {
  const [editingTodo, setEditingTodo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const handleEditTodo = (todo) => {
    setEditingTodo(todo);
    setIsModalOpen(true);
  };

  const handleUpdateTodo = (updatedTodo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)),
    );
  };

  const handleDeleteTodo = (id) => {
    if (window.confirm("U sure bro?")) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col gap-4 items-center justify-center p-4">
        {/* Modal */}
        {isModalOpen && (
          <TodoModal
            onClose={() => setIsModalOpen(false)}
            onAdd={handleAddTodo}
            editingTodo={editingTodo}
            onUpdate={handleUpdateTodo}
          />
        )}
        {/* Todo List */}
        <TodoList
          todos={todos}
          onDelete={handleDeleteTodo}
          onEdit={handleEditTodo}
        />
        {/* Add Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 rounded-md border border-green-600 bg-white text-green-600 hover:bg-green-600 hover:text-white active:scale-95 transition duration-200 cursor-pointer"
        >
          Add Todo
        </button>
      </div>
    </>
  );
};

export default App;
