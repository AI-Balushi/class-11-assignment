import Child from "./Child";

export default function Parent() {
  // Variables
  let fullName: string = "Abdul Waheed";
  let className: string = "Sunday Class";
  let timing: string = "2 PM to 5 PM";

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-md p-6 max-w-sm w-full text-center">
        <h1 className="text-xl font-bold text-gray-800 mb-4">
          Abdul Waheed Sunday Class Time
        </h1>
        <Child fullName={fullName} className={className} timing={timing} />
      </div>
    </div>
  );
}
