import { supabase } from "utils/api";
import { useUser } from "./use-user";
import { toast } from "react-toastify";

const nameTable = "result_quiz";

export interface UseQuestionProps {
  point: number;
  countExam: number;
  idRoom: number;
  onLoading: () => void;
  onSuccess: () => void;
}

export const useQuestion = ({
  point,
  countExam,
  idRoom,
  onLoading,
  onSuccess,
}: UseQuestionProps) => {
  const { user } = useUser();

  const errorMessage = (message: string) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      hideProgressBar: true,
    });
  };

  const onSubmit = async () => {
    if (!user) {
      return toast.error(
        "Harap login terlebih dahulu untuk mengakses fitur ini",
        {
          position: toast.POSITION.BOTTOM_CENTER,
          hideProgressBar: true,
        }
      );
    }

    onLoading();

    const { data: result_quiz } = await supabase
      .from(nameTable)
      .select("*")
      .eq("user_id", user.id)
      .eq("id_room_question", idRoom);

    if (result_quiz.length == 0) {
      const { error } = await supabase
        .from(nameTable)
        .insert([
          {
            user_id: user.id,
            point: point,
            count_exam: countExam,
            id_room_question: idRoom,
          },
        ])
        .single();

      if (!error) {
        onSuccess();
      } else {
        errorMessage(error.message);
      }
    } else {
      const { error } = await supabase
        .from(nameTable)
        .update({
          point: point,
          count_exam: countExam,
        })
        .eq("user_id", user.id)
        .eq("id_room_question", idRoom);

      if (!error) {
        onSuccess();
      } else {
        errorMessage(error.message);
      }
    }
  };

  return { onSubmit };
};
