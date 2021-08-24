import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";
import { supabase } from "../utils/api";
import "../styles/globals.css";
import NextNProgress from "@/components/ui/progress-bar-routing";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

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
      {/* <nav className="p-6 border-b border-gray-300">
        <Link href="/">
          <span className="mr-6 cursor-pointer">Home</span>
        </Link>
        {user && (
          <Link href="/create-post">
            <span className="mr-6 cursor-pointer">Create Post</span>
          </Link>
        )}
        <Link href="/profile">
          <span className="mr-6 cursor-pointer">Profile</span>
        </Link>
      </nav> */}
      <NextNProgress />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
