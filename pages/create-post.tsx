import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import { supabase } from "../utils/api";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
const initialState = { title: "", content: "", id: "" };

const CreatePost = () => {
  const [post, setPost] = useState(initialState);
  const { title, content } = post;
  const router = useRouter();

  const onChange = (e) => {
    setPost(() => ({ ...post, [e.target.name]: e.target.value }));
  };

  const createNewPost = async () => {
    if (!title || !content) return;

    const user = supabase.auth.user();
    const id = uuid();
    post.id = id;
    const { data } = await supabase
      .from("posts")
      .insert([{ title, content, user_id: user.id, user_email: user.email }])
      .single();

    router.push(`/posts/${data.id}`);
  };

  return (
    <div className="flex flex-col px-10">
      <h1 className="text-3xl font-semibold tracking-wide mt-6">
        Create New Post
      </h1>
      <input
        onChange={onChange}
        name="title"
        placeholder="Title"
        className="border-b pb-2 text-lg my-4 focus: outline-none w-full font-light text-gray-500 y-2"
      />
      <SimpleMDE
        value={post.content}
        onChange={(value) => setPost({ ...post, content: value })}
      />
      <button
        type="button"
        className="mb-4 bg-primaryBlue font-semibold px-8 py-2 rounded-lg text-white text-sm"
        onClick={createNewPost}
      >
        Create Post
      </button>
    </div>
  );
};

export default CreatePost;
