import { CardQuestion } from "../ui/card/card-question";
import { listTest } from "data/list_test";
import { InfoExam } from "./info-exam";
import { ProgressBar } from "../ui/progress-bar/progress-bar";
import { useState } from "react";
import { BottomSheetDone } from "../ui/modal/bottom-sheet";
import { ButtonPrimary } from "../ui/button/button-primary";

export const ListQuestion = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-11">
      <InfoExam />
      <ProgressBar />
      {listTest.map((item, key) => (
        <CardQuestion
          {...{ key }}
          title={item.title}
          listAnswer={item.listAnswer}
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
