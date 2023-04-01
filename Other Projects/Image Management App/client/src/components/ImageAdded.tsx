import { FunctionComponent } from "react";

const ImageAdded: FunctionComponent = () => {
  return (
    <div className="relative w-[10rem] h-[7.75rem] shrink-0 text-left text-[0.63rem] text-light-mode-text-a100 font-sf-pro-text">
      <div className="relative h-full w-full rounded bg-grey-3001 hidden" />
      <img
        className="relative rounded max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="../unsplashcla8lyevlf0@2x.png"
      />
      <div className="relative rounded [background:linear-gradient(0deg,_#f1f5fa,_#fdfeff)] box-border border-[1px] border-solid border-light-mode-general-border1" />
      <div className="relative hidden">
        <div className="relative rounded bg-light-mode-primary-blue1" />
        <img
          className="relative max-w-full overflow-hidden max-h-full"
          alt=""
          src="../tick.svg"
        />
      </div>
      <div className="relative">img16.jpg</div>
    </div>
  );
};

export default ImageAdded;
