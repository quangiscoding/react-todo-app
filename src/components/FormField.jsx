const FormField = ({ children, error }) => {
  return (
    <div className="flex flex-col gap-1">
      {children}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormField;
