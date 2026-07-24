import { useState } from "react";
import Navbar from "./components/Navbar";
import NotificationsPage from "./components/NotificationsPage";
import NetworkPage from "./components/NetworkPage";

export type TabKey = "notifications" | "network";

function App() {
  const [activeTab, setActiveTab] = useState<TabKey>("notifications");
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="max-w-3xl mx-auto mt-6 px-4">
        {activeTab === "notifications" && <NotificationsPage />}
        {activeTab === "network" && <NetworkPage />}
      </main>

    </div>
  );
}


export default App;