export default function Child(props: { fullName: string; className: string; timing: string }) {
    return (
      <div className="space-y-2">
        <p className="text-gray-700">
          <span className="font-medium">Name:</span> {props.fullName}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Class Name:</span> {props.className}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Timing:</span> {props.timing}
        </p>
      </div>
    );
  }
  