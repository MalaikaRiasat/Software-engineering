import type { TabKey } from "../App";

type NavbarProps = {
  activeTab: TabKey;
  setActiveTab: (tab: TabKey) => void;
};

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="max-w-3xl mx-auto flex items-center justify-between px-4 h-14">
        <span className="text-blue-600 font-bold text-xl">in.</span>

        <nav className="flex gap-6">
          <button
            onClick={() => setActiveTab("network")}
            className={`text-sm ${
              activeTab === "network" ? "text-blue-600 font-semibold" : "text-gray-500"
            }`}
          >
            Network
          </button>

          <button
            onClick={() => setActiveTab("notifications")}
            className={`text-sm ${
              activeTab === "notifications" ? "text-blue-600 font-semibold" : "text-gray-500"
            }`}
          >
            Notifications
          </button>
        </nav>
      </div>
    </header>
  );
}