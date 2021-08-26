import { CardHome } from "../ui/card/card-home";
import { Sekeleton } from "../ui/loading/skeleton";
import { useSupabase } from "utils/hooks/use-supabase";
import { useState } from "react";
import { ModalConfirm } from "../ui/modal/modal-confirm";
import { useRouter } from "next/router";
import { ListChapterTest } from "utils/hooks/use-supabase";
import { useEffect } from "react";
import { supabase } from "utils/api";

export const ListTest = () => {
  const { data, loading } = useSupabase("room_question");
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<ListChapterTest>(null);
  const router = useRouter();

  const onConfirm = () => {
    setIsOpen(false);
    router.push(`/detail-room/${selected.id}`);
  };

  const closeModal = () => {
    setIsOpen(false);
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
              onClick={() => {
                setIsOpen(true);
                setSelected(item);
              }}
            />
          ))}
          <div className="h-40"></div>
        </>
      )}
      <ModalConfirm
        isOpen={isOpen}
        onDismiss={closeModal}
        onConfirm={onConfirm}
        selected={selected}
      />
    </>
  );
};
