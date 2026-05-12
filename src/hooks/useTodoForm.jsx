import { useState, useEffect } from "react";

const useTodoForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    category: "",
    priority: "medium",
    isCompleted: false,
  });

  return { formData, setFormData };
};

export default useTodoForm;
