import { useEffect, useState } from "react";
import { supabase } from "utils/api";
import { useRouter } from "next/router";

export const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const user = supabase.auth.user();
    setUser(user);
  };

  const logOut = async () => {
    setLoading(true);

    let { error } = await supabase.auth.signOut();
    if (error == null) {
      router.push("/login");
    } else {
      console.log({ error });
    }

    setLoading(false);
  };

  return { user, logOut, loading };
};
