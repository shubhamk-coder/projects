import { FunctionComponent } from "react";

const ActionbarButtons: FunctionComponent = () => {
  return (
    <div className="absolute top-[6.38rem] left-[1.5rem] w-[87rem] h-[7.06rem] text-left text-[0.81rem] text-darkslategray font-sf-pro-text">
      <div className="absolute top-[0rem] left-[0rem] rounded-base bg-light-mode-white-background box-border w-[87rem] h-[7.06rem] opacity-[0.5] border-[1px] border-solid border-light-mode-general-border1" />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[calc(100%_-_97px)] w-[calc(100%_-_1376px)] top-[1.5rem] right-[76.13rem] bottom-[4.56rem] left-[9.88rem]"
        id="delete"
      >
        <div className="absolute h-[calc(100%_+_16px)] w-[calc(100%_+_16px)] top-[-0.5rem] right-[-0.5rem] bottom-[-0.5rem] left-[-0.5rem] rounded bg-grey-3001 hidden" />
        <img
          className="absolute top-[0rem] left-[0rem] w-[1rem] h-[1rem] overflow-hidden"
          alt=""
          src="../ic-delete.svg"
        />
      </button>
      <div className="absolute top-[calc(50%_+_23.5px)] right-[82.5rem] font-semibold">
        Sort By
      </div>
      <input
        className="cursor-pointer absolute top-[calc(50%_-_32.5px)] left-[1.5rem] w-[5.31rem] h-[1rem]"
        type="checkbox"
        id="selectAll"
      />
      <div className="absolute top-[4rem] left-[0rem] w-[87rem] h-[3rem] text-[0.63rem] text-light-mode-text-a50">
        <div className="absolute top-[0rem] left-[6rem] bg-grey-3001 w-[0.06rem] h-[3rem]" />
        <div className="absolute top-[0rem] left-[0rem] bg-grey-3001 w-[87rem] h-[0.06rem]" />
        <div className="absolute top-[0.81rem] left-[7.06rem] flex flex-row items-start justify-start gap-[1rem]">
          <div className="rounded-small bg-dodgerblue box-border h-[1.5rem] flex flex-row py-[0.63rem] px-[1rem] items-center justify-center text-light-mode-primary-blue1 border-[0.7px] border-solid border-light-mode-primary-blue1">
            <div className="relative font-semibold mix-blend-normal">Title</div>
          </div>
          <div className="rounded-small box-border h-[1.5rem] flex flex-row py-[0.63rem] px-[1rem] items-center justify-center border-[1px] border-solid border-light-mode-general-border1">
            <div className="relative font-semibold mix-blend-normal">Date</div>
          </div>
          <div className="rounded-small box-border h-[1.5rem] flex flex-row py-[0.63rem] px-[1rem] items-center justify-center border-[1px] border-solid border-light-mode-general-border1">
            <div className="relative font-semibold mix-blend-normal">Size</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1rem] left-[70.69rem] flex flex-col items-start justify-start text-light-mode-text-a251">
        <div className="rounded bg-light-mode-white-background box-border w-[15.31rem] overflow-hidden flex flex-col py-[0.5rem] px-[0.75rem] items-start justify-center border-[1px] border-solid border-light-mode-general-border1">
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <img
              className="relative w-[0.75rem] h-[0.75rem] shrink-0 mix-blend-normal"
              alt=""
              src="../ic-search.svg"
            />
            <div className="relative leading-[1rem] font-semibold mix-blend-normal">
              Search Media
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0.06rem] left-[8.31rem] bg-grey-3001 w-[0.06rem] h-[4rem]" />
    </div>
  );
};

export default ActionbarButtons;
