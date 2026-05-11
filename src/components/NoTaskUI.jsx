import { PenSquare } from "lucide-react";

const NoTaskUI = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-6 p-4 rounded-full bg-green-400/20">
        <PenSquare className="size-10" />
      </div>
      <h2 className="text-2xl font-bold text-gray-700">No Tasks Yet</h2>
      <p className="text-gray-500 mt-2 max-w-sm">
        Start by creating your first todo task.
      </p>
    </div>
  );
};

export default NoTaskUI;
