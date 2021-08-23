import { CardHome } from "../ui/card/card-home";
import { listTestHome } from "data/list_test_home";

export const ListTest = () => (
  <div>
    {listTestHome.map((item, key) => (
      <CardHome
        {...{ key }}
        title={item.title}
        subTitle={item.subTitle}
        type={item.type}
      />
    ))}
  </div>
);
