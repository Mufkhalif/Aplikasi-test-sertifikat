import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";
import { supabase } from "../utils/api";
import "../styles/globals.css";
import NextNProgress from "@/components/ui/progress-bar-routing";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  console.log(user);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async () =>
      checkUser()
    );
    checkUser();
    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  const checkUser = () => {
    const user = supabase.auth.user();
    setUser(user);
  };

  return (
    <div>
      <NextNProgress />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
