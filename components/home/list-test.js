import { CardHome } from "../ui/card/card-home";
import { useEffect, useState } from "react";
import { supabase } from "utils/api";
import { Sekeleton } from "../ui/loading/skeleton";

export const ListTest = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const { data } = await supabase.from("room_question").select();
    setData(data);
    setLoading(false);
  };

  return (
    <>
      {loading || data.length == 0 ? (
        <Sekeleton />
      ) : (
        <>
          {data.map((item) => (
            <CardHome
              key={item.id}
              id={item.id}
              title={item.name}
              subTitle={item.description}
              type={item.type}
            />
          ))}
          {data.map((item) => (
            <CardHome
              key={item.id}
              id={item.id}
              title={item.name}
              subTitle={item.description}
              type={item.type}
            />
          ))}
        </>
      )}
    </>
  );
};
