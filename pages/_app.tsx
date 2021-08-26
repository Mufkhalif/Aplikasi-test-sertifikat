import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";
import { supabase } from "../utils/api";
import "../styles/globals.css";
import NextNProgress from "@/components/ui/progress-bar-routing";
import { useStore } from "store/store";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const store = useStore(pageProps.initialReduxState);

  // console.log({ user });

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
    <Provider store={store}>
      <NextNProgress />
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  );
}

export default MyApp;
