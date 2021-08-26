import { Space } from "./space";

export const SectionProfile = ({ user }) => (
  <>
    <Space />
    <div className="flex flex-row items-center px-4">
      <img
        className="relative z-1 inline object-cover w-12 h-12 border-2 border-white rounded-full"
        src="https://images.unsplash.com/photo-1629893250400-a29b567843c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        alt="Profile image"
      />
      <div className="flex flex-col ml-4">
        <h1 className="font-bold text-primaryDark text-sm">Mufkhalif</h1>
        <p className="font-normal text-subDark text-sm mt-1">{user.email}</p>
      </div>
    </div>
    <Space />
  </>
);
