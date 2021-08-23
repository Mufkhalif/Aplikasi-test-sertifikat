import { ButtonPrimary, ButtonOutlined } from "../ui/button/button";
import { CardHome } from "../ui/button/card/card-home";

const listMeta = [
  {
    title: "Sertifikat dasar pembiayaan Manajerial",
    subTitle:
      "Untuk posisi manajerial mulai dari kepala cabang sampai dengan pejabat 1 tingkat di bawah Direksi",
    type: "primary",
  },
  {
    title: "Sertifikat Profesi Penagihan Pembiayaan",
    subTitle:
      "Untuk posisi manajerial mulai dari kepala cabang sampai dengan pejabat 1 tingkat di bawah Direksi",
    type: "second",
  },
  {
    title: "Sertifikat dasar pembiayaan Manajerial",
    subTitle:
      "Untuk posisi manajerial mulai dari kepala cabang sampai dengan pejabat 1 tingkat di bawah Direksi",
    type: "primary",
  },
  {
    title: "Sertifikat dasar pembiayaan Manajerial",
    subTitle:
      "Untuk posisi manajerial mulai dari kepala cabang sampai dengan pejabat 1 tingkat di bawah Direksi",
    type: "primary",
  },
];

export const ListTest = () => (
  <div>
    {listMeta.map((item, key) => (
      <CardHome
        {...{ key }}
        title={item.title}
        subTitle={item.subTitle}
        type={item.type}
      />
    ))}
  </div>
);
