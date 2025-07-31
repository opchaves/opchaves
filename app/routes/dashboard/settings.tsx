import { useState } from "react";

export default function DashboardSettings() {
  const [theme, setTheme] = useState("system");
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* Profile Section */}
      <section className="bg-white rounded-lg shadow p-6 border">
        <h2 className="text-lg font-semibold mb-4">Profile</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              defaultValue="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2"
              defaultValue="john@example.com"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
          >
            Save Profile
          </button>
        </form>
      </section>

      {/* Password Section */}
      <section className="bg-white rounded-lg shadow p-6 border">
        <h2 className="text-lg font-semibold mb-4">Change Password</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Current Password
            </label>
            <input
              type="password"
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              New Password
            </label>
            <input
              type="password"
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
          >
            Update Password
          </button>
        </form>
      </section>

      {/* Theme Section */}
      <section className="bg-white rounded-lg shadow p-6 border">
        <h2 className="text-lg font-semibold mb-4">Appearance</h2>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="theme"
              value="light"
              checked={theme === "light"}
              onChange={() => setTheme("light")}
            />
            Light
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={theme === "dark"}
              onChange={() => setTheme("dark")}
            />
            Dark
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="theme"
              value="system"
              checked={theme === "system"}
              onChange={() => setTheme("system")}
            />
            System
          </label>
        </div>
      </section>

      {/* Notifications Section */}
      <section className="bg-white rounded-lg shadow p-6 border">
        <h2 className="text-lg font-semibold mb-4">Notifications</h2>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications((v) => !v)}
          />
          Enable email notifications
        </label>
      </section>
    </div>
  );
}
