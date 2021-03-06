import { CardQuestion } from "../ui/card/card-question";
import { InfoExam } from "./info-exam";
import { ProgressBar } from "../ui/progress-bar/progress-bar";
import { useState } from "react";
import { BottomSheetDone } from "../ui/modal/bottom-sheet";
import { ButtonPrimary } from "../ui/button/button-primary";
import { useRouter } from "next/router";
import { useQuestion } from "utils/hooks/use-question";

export const ListQuestion = ({ listQuestion = [], id }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { onSubmit } = useQuestion({
    point: selected.filter((item) => item.isCorrect).length,
    countExam: listQuestion.length,
    idRoom: id,
    onLoading: () => {
      setLoading(true);
    },
    onSuccess: () => {
      setOpen(true);
      setLoading(false);
    },
  });

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

  const onConfirm = () => {
    setOpen(false);
    router.push(`/result/${id}`);
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
        onDismiss={onConfirm}
        onConfirm={onConfirm}
      />
    </div>
  );
};

export default ListQuestion;
