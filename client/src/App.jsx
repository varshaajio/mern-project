import { onMessage, messaging } from "./firebase";

onMessage(messaging, (payload) => {
  console.log("Notification received:", payload);

  alert(payload.notification.title + " - " + payload.notification.body);
});
