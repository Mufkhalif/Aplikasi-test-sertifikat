import { CardQuestion } from "../ui/card/card-question";
import { InfoExam } from "./info-exam";
import { ProgressBar } from "../ui/progress-bar/progress-bar";
import { useState } from "react";
import { BottomSheetDone } from "../ui/modal/bottom-sheet";
import { ButtonPrimary } from "../ui/button/button-primary";
import { useRouter } from "next/router";
import { useUser } from "utils/hooks/use-user";
import { supabase } from "utils/api";

export const ListQuestion = ({ listQuestion = [], id }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const router = useRouter();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  const onSelected = ({ answer, item, key }) => {
    const beforeSelected = [...selected];

    beforeSelected[key] = {
      isCorrect: answer.id == item.correct_answer,
      answer,
      correct_answer: item.correct_answer,
      id: item.id,
      id_room_question: item.id_room_question,
      question: item.question,
    };

    setSelected(beforeSelected);
  };

  const onSubmit = async () => {
    setLoading(true);

    const { data: result_quiz } = await supabase
      .from("result_quiz")
      .select("*")
      .eq("user_id", user.id)
      .eq("id_room_question", id);

    if (result_quiz.length == 0) {
      const { data } = await supabase
        .from("result_quiz")
        .insert([
          {
            user_id: user.id,
            point: selected.filter((item) => item.isCorrect).length,
            count_exam: listQuestion.length,
            id_room_question: id,
          },
        ])
        .single();
      setOpen(true);
      setLoading(false);
    } else {
      const { data } = await supabase
        .from("result_quiz")
        .update({
          point: selected.filter((item) => item.isCorrect).length,
          count_exam: listQuestion.length,
        })
        .eq("user_id", user.id)
        .eq("id_room_question", id);

      setOpen(true);
      setLoading(false);
    }
  };

  return (
    <div className="mb-11">
      <InfoExam />
      <ProgressBar
        done={selected.length}
        max={listQuestion.length}
        percent={(selected.length * 100) / listQuestion.length}
      />
      {listQuestion.map((item, key) => (
        <CardQuestion
          key={key}
          title={`${key + 1}. ${item.question}`}
          listAnswer={item.list_answer.list_answer}
          onClick={(answer) => onSelected({ answer, item, key })}
        />
      ))}
      <ButtonPrimary
        type="button"
        title="Selesai"
        disabled={loading}
        onClick={onSubmit}
      />
      <BottomSheetDone
        active={open}
        onDismiss={() => {
          setOpen(false);
          router.push(`/result/${id}`);
        }}
        onConfirm={() => {
          setOpen(false);
          router.push(`/result/${id}`);
        }}
      />
    </div>
  );
};

export default ListQuestion;
