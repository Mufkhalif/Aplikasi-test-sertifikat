import { Navbar } from "./navbar";

export const Container = ({ children, isBottom = true }) => {
  return (
    <div className="w-full sm:max-w-xl mx-auto  bg-gray-100">
      {children}
      {isBottom && <Navbar />}
    </div>
  );
};
