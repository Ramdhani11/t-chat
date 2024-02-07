import React, { ReactNode } from "react";
import { Toaster } from "sonner";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-white  overflow-hidden w-full m-auto  h-screen flex relative">
      <div className=" min-w-[50%] benner bg-center bg-no-repeat bg-cover"></div>
      <div className="w-full flex flex-col items-center justify-center">
        {children}
      </div>
      <Toaster position="top-center" closeButton={true} />
    </div>
  );
};

export default layout;
