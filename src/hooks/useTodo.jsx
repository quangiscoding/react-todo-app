import { useEffect, useState } from "react";

const useTodo = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isCompleted: !todo.isCompleted,
            }
          : todo,
      ),
    );
  };

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const updateTodo = (updatedTodo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)),
    );
  };

  const deleteTodo = (id) => {
    if (window.confirm("U sure bro?")) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return {
    todos,
    toggleTodo,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};

export default useTodo;
