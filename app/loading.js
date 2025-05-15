export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="gradient-title font-extrabold text-3xl md:text-6xl lg:text-8xl tracking-tighter md:px-6 text-center mb-8">
        Loading...
      </h1>
      <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
}
