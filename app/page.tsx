import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  const fakeAuth = false;
  if (!fakeAuth) {
    return redirect("/auth");
  } else {
    return redirect("/id");
  }
};

export default page;
