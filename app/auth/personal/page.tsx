"use server";

import { getRoles } from "@/actions";
import FormPersonal from "@/components/FormPersonal";
import HeaderAuth from "@/components/HeaderAuth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const data = await getRoles();
  const token = cookies().get("token")?.value;

  if (!token) {
    return redirect("/auth");
  }

  return (
    <HeaderAuth textHeader="Personal Data" alt="ato" image="/T-Chat.svg">
      <FormPersonal data={data} />
    </HeaderAuth>
  );
};

export default page;
