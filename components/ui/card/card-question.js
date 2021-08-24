import { useState } from "react";
import { ButtonQuestion } from "../button/button-question";

export const CardQuestion = ({ title, listAnswer }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-white p-4 rounded-lg flex flex-col pb-6 mb-6 hover:bg-white hover:shadow-lg ">
      <h2 className="font-normal text-primaryDark text-sm leading-6">
        {title}
      </h2>
      <div className="mt-8">
        {listAnswer.map((item, key) => (
          <ButtonQuestion
            isSelected={selected == item.id}
            title={item.label}
            keyItem={item.id}
            {...{ key }}
            onClick={() => setSelected(item.id)}
          />
        ))}
      </div>
    </div>
  );
};
