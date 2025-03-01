import { BsCloudCheck } from "react-icons/bs";
export const DocumentInput = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg px1.5 cursor-pointer truncate">
        Untitled Document
      </span>
      <BsCloudCheck />
    </div>
  );
};
