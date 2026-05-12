import { useState, useEffect } from "react";

import useTodoForm from "../hooks/useTodoForm.jsx";
import FormField from "./FormField.jsx";
import { validateForm } from "../utils/validateForm.js";

const TodoModal = ({ onClose, onAdd, editingTodo, onUpdate }) => {
  const { formData, setFormData } = useTodoForm();

  useEffect(() => {
    if (editingTodo) {
      setFormData(editingTodo);
    }
  }, [editingTodo]);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      console.log(validationErrors);
      setErrors(validationErrors);
      return;
    }

    const newTodo = {
      id: Date.now(),
      ...formData,
      isCompleted: false,
      createdAt: new Date().toISOString(),
    };

    if (editingTodo) {
      onUpdate({
        ...editingTodo,
        ...formData,
      });
    } else {
      onAdd(newTodo);
    }
    onClose();
  };

  const inputClass = (error) =>
    `border-[1.5px] p-2 rounded outline-none transition duration-200 ${
      error ? "border-red-500" : "focus:border-green-500"
    }`;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Add Todo</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Title */}
            <FormField>
              <label htmlFor="title">
                Title <span className="text-red-500 text-xl">*</span>
              </label>
              <input
                id="title"
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                className={inputClass(errors.title)}
              />

              {errors.title && (
                <p className="text-sm text-red-500">{errors.title}</p>
              )}
            </FormField>

            {/* Description */}
            <FormField>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className={inputClass()}
              />
              {errors.description && (
                <p className="text-sm text-red-500">{errors.description}</p>
              )}
            </FormField>

            <div className="grid grid-cols-2 gap-2 items-start justify-between">
              {/* Priority */}
              <FormField>
                <label htmlFor="priority">
                  Priority <span className="text-red-500 text-xl">*</span>
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="border p-2 rounded outline-none focus:border-green-500 transition duration-200"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </FormField>
              {/* Due Date */}
              <FormField>
                <label htmlFor="date">
                  Date <span className="text-red-500 text-xl">*</span>
                </label>
                <input
                  id="date"
                  type="date"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  className={inputClass(errors.dueDate)}
                />

                {errors.dueDate && (
                  <p className="text-sm text-red-500">{errors.dueDate}</p>
                )}
              </FormField>
            </div>

            {/* Category */}
            <FormField>
              <label htmlFor="category">
                Category <span className="text-red-500 text-xl">*</span>
              </label>
              <input
                input="category"
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
                className={inputClass(errors.category)}
              />

              {errors.category && (
                <p className="text-sm text-red-500">{errors.category}</p>
              )}
            </FormField>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border rounded hover:text-white hover:bg-green-600 cursor-pointer active:scale-95 transition duration-200"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-4 py-2 bg-green-700 hover:bg-green-600 active:scale-95 text-white rounded cursor-pointer transition duration-200"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TodoModal;
