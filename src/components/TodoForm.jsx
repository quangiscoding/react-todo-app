const TodoForm = ({ newTodo, setNewTodo, addTask }) => {
  return (
    <form action="" className="max-w-4xl w-full flex gap-4">
      <input
        type="text"
        placeholder="Enter a new task..."
        className="flex-1 px-4 py-2 border focus:outline-green-500"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button
        className="p-2 rounded-md border border-green-600 bg-white text-green-600 hover:bg-green-600 hover:text-white active:scale-95 transition duration-200 cursor-pointer"
        onClick={addTask}
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
