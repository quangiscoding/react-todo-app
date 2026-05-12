export const validateForm = (formData) => {
  const errors = {};

  if (!formData.title.trim()) {
    errors.title = "Title is required";
  } else if (formData.title.length < 3) {
    errors.title = "Title must be at least 3 characters";
  }

  if (formData.description.length > 200) {
    errors.description = "Description max 200 characters";
  }

  if (!formData.category.trim()) {
    errors.category = "Category is required";
  }

  const today = new Date().toISOString().split("T")[0];

  if (!formData.dueDate) {
    errors.dueDate = "Due date required";
  } else if (formData.dueDate < today) {
    errors.dueDate = "Due date cannot be in the past";
  }

  return errors;
};
