import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);

  const openCreate = () => {
    setEditingTodo(null);
    setIsOpen(true);
  };

  const openEdit = (todo) => {
    setEditingTodo(todo);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    setEditingTodo(null);
  };

  return {
    isOpen,
    editingTodo,
    openCreate,
    openEdit,
    close,
  };
};

export default useModal;
