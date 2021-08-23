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
      <div className="flex flex-row items-center justify-between">
        <div>
          <p className="text-base text-primaryDark font-normal mt-2">Semua</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mt-2 ml-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
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
