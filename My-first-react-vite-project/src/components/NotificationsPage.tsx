type Notification = {
  id: number;
  text: string;
  time: string;
};

const notifications: Notification[] = [
  { id: 1, text: "Ali reacted to your post", time: "2h" },
  { id: 2, text: "GC University Faisalabad posted a new job", time: "5h" },
  { id: 3, text: "Sara commented on your project", time: "1d" },
];

export default function NotificationsPage() {
  return (
    <div className="bg-white rounded-lg shadow divide-y">
      <h2 className="p-4 font-semibold text-lg">Notifications</h2>

      {notifications.map((n) => (
        <div key={n.id} className="p-4 flex justify-between hover:bg-gray-50">
          <p className="text-sm text-gray-800">{n.text}</p>
          <span className="text-xs text-gray-400">{n.time}</span>
        </div>
      ))}
    </div>
  );
}