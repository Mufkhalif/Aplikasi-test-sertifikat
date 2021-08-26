import { useEffect, useState } from "react";
import { supabase } from "utils/api";

export interface ListChapterTest {
  id: number;
  name: string;
  description: string;
  type: string;
}

export const useSupabase = (table: string) => {
  const [data, setData] = useState<ListChapterTest[]>([]);
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
