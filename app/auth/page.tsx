import FormLogin from "@/components/FormLogin";
import HeaderAuth from "@/components/HeaderAuth";
import React from "react";

const page = () => {
  return (
    <HeaderAuth
      alt="t-chat"
      image="/T-Chat.svg"
      textHeader="Sign In to Your Account"
    >
      <FormLogin />
    </HeaderAuth>
  );
};

export default page;
