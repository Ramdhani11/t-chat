import FormRegister from "@/components/FormRegister";
import HeaderAuth from "@/components/HeaderAuth";
import React from "react";

const page = () => {
  return (
    <HeaderAuth
      image="/T-Chat.svg"
      alt="tchat"
      textHeader="Register a New Account"
    >
      <FormRegister />
    </HeaderAuth>
  );
};

export default page;
