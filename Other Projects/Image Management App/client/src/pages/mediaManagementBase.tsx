import { FunctionComponent } from "react";
import ActionbarButtons from "../components/ActionbarButtons";
import MediaContainer from "../components/MediaContainer";

const MediaManagementBase: FunctionComponent = () => {
  return (
    <div className="relative bg-whitesmoke w-full h-[64rem] overflow-hidden text-left text-[1.25rem] text-light-mode-text-a100 font-sf-pro-display">
      <ActionbarButtons />
      <button className="cursor-pointer [border:none] py-[0.47rem] px-[0.75rem] bg-[transparent] absolute h-[3.13%] w-[6.32%] top-[3.91%] right-[1.67%] bottom-[92.97%] left-[92.01%] rounded [background:linear-gradient(180deg,_#0099ff,_#0b79c3)] flex flex-col box-border items-center justify-center">
        <div className="relative text-[0.81rem] font-medium font-sf-pro-display text-light-mode-white-background text-center">
          Add Image
        </div>
      </button>
      <div className="absolute top-[2.5rem] left-[1.5rem] flex flex-col items-start justify-start gap-[0.63rem]">
        <div className="relative font-semibold">Media Library</div>
        <div className="relative text-[0.81rem] text-light-mode-text-a50 mix-blend-normal text-[#354052]/0.5">
          Create, edit, and manage the media on your community.
        </div>
      </div>
      <MediaContainer />
    </div>
  );
};

export default MediaManagementBase;