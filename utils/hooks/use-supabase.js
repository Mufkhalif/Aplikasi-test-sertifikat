import { useEffect, useState } from "react";
import { supabase } from "utils/api";

export const useSupabase = (table) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const { data } = await supabase.from(table).select();
    setData(data);
    setLoading(false);
  };

  return { data, loading };
};
