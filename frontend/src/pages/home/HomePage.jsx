import { useAuthStore } from "../../store/authUser.js";
import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";

export default function HomePage() {
  const { user } = useAuthStore();  // Get user state from your auth store

  return (
    <div>
      {user ? <HomeScreen /> : <AuthScreen />}  {/* Render HomeScreen if logged in, else AuthScreen */}
    </div>
  );
}
