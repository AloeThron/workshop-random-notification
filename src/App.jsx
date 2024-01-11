import { useState } from "react";
import "./App.css";
import Noti from "./components/Noti";
import { useEffect } from "react";

function App() {
  const noti = [
    "Reminder: Tomorrow's meeting at 10 AM. Don't forget!",
    "New message: Check out our latest offers now!",
    "Update available! Please install the latest version.",
    "Congratulations! You've reached a new milestone.",
    "Reminder: Pay your bills before the due date.",
    "Event alert: Join us for a special webinar next week.",
    "Important: Verify your account for added security.",
    "Weather update: Expect rain showers this evening.",
    "Appointment confirmed for Friday at 3 PM.",
    "Battery low: Please charge your device.",
  ];

  const [notifications, setNotifications] = useState([]);

  const handleSendMessage = () => {
    const newNotification = {
      id: Math.random(),
      message: noti[Math.floor(Math.random() * noti.length)],
      isVisible: false,
    };
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      newNotification,
    ]);
  };

  useEffect(() => {
    const notificationTimer = setInterval(() => {
      if (notifications.length > 0) {
        setNotifications((prevNotifications) => prevNotifications.slice(1));
      }
    }, 3000);
    console.log(notifications);
    return () => clearInterval(notificationTimer);
  }, [notifications]);

  return (
    <div className="h-screen w-screen">
      <div className="h-full flex justify-center items-center">
        <button
          className="mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40"
          onClick={handleSendMessage}
        >
          Random Notification
        </button>
      </div>

      <div className="fixed bottom-0 right-0">
        <div className="flex flex-col-reverse">
          {notifications.map((noti) => (
            <div key={noti.id}>
              <Noti text={noti.message} isVisible={noti.isVisible} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
