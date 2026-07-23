type Connection = {
  id: number;
  name: string;
  title: string;
};

const suggestions: Connection[] = [
  { id: 1, name: "malaika Riasat", title: "Software Engineering Student, GCUF" },
  { id: 2, name: "Ayesha Khan", title: "Frontend Developer" },
  { id: 3, name: "Bilal Ahmed", title: "Backend Developer, Node.js" },
];

export default function NetworkPage() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="font-semibold text-lg mb-4">People you may know</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {suggestions.map((person) => (
          <div
            key={person.id}
            className="border rounded-lg p-4 text-center flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-full bg-gray-200 mb-2" />
            <p className="font-medium text-sm">{person.name}</p>
            <p className="text-xs text-gray-500 mb-3">{person.title}</p>
            <button className="border border-blue-600 text-blue-600 rounded-full px-4 py-1 text-xs font-medium hover:bg-blue-50">
              Connect
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}