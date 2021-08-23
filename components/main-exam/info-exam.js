import { listParticipant } from "data/list_participant";

const Avatar = ({ url }) => (
  <img
    className="relative z-1 inline object-cover w-8 h-8 border-2 border-white rounded-full"
    src={url}
    alt="Profile image"
  />
);

export const InfoExam = () => (
  <div className="flex flex-row justify-between mb-5">
    <div className="w-5/12 bg-white flex flex-col py-3 px-2 rounded-lg">
      <p className="text-xs text-secondaryDark font-normal">Filter</p>
      <p className="text-base text-primaryDark font-normal mt-2">Semua</p>
    </div>

    <div className="w-5/12 bg-white flex flex-col py-3 px-2 rounded-lg">
      <p className="text-xs text-secondaryDark font-normal">Participant</p>
      <div className="flex flex-row mt-2">
        <div className="-space-x-4">
          {listParticipant.map((item, key) => (
            <Avatar url={item} {...{ key }} />
          ))}
        </div>
      </div>
    </div>
  </div>
);
