import { CardHome } from "../ui/card/card-home";
import { Sekeleton } from "../ui/loading/skeleton";
import { useSupabase } from "utils/hooks/use-supabase";
import { Fragment } from "react";

export const ListTest = () => {
  const { data, loading } = useSupabase("room_question");

  return (
    <Fragment>
      {loading || data.length == 0 ? (
        <Sekeleton />
      ) : (
        <Fragment>
          {data.map((item) => (
            <CardHome
              key={item.id}
              id={item.id}
              title={item.name}
              subTitle={item.description}
              type={item.type}
              onClick={() => null}
            />
          ))}
        </Fragment>
      )}
    </Fragment>
  );
};
