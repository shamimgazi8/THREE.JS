// components/Loader.tsx
const Loader = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-gray-900" />
    </div>
  );
};

export default Loader;
