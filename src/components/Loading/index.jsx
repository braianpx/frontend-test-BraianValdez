const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center">
        {/* Spinner */}
        <div className="w-14 h-14 border-4 border-t-transparent border-primary border-solid rounded-full animate-spin"></div>
        {/* Texto Cargando */}
        <span className="text-primary text-xl font-semibold">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;

