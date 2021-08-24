import { CardQuestion } from "../ui/card/card-question";
import { InfoExam } from "./info-exam";
import { ProgressBar } from "../ui/progress-bar/progress-bar";
import { useState } from "react";
import { BottomSheetDone } from "../ui/modal/bottom-sheet";
import { ButtonPrimary } from "../ui/button/button-primary";

export const ListQuestion = ({ listQuestion = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-11">
      <InfoExam />
      <ProgressBar />
      {listQuestion.map((item, key) => (
        <CardQuestion
          {...{ key }}
          title={`${key + 1}. ${item.question}`}
          listAnswer={item.list_answer.list_answer}
        />
      ))}
      <ButtonPrimary title="Selesai" onClick={() => setOpen(true)} />
      <BottomSheetDone
        onDismiss={() => setOpen(false)}
        active={open}
        onConfirm={() => setOpen(false)}
      />
    </div>
  );
};

export default ListQuestion;
