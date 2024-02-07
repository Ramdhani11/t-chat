"use client";

import React, { useState } from "react";
import { SubmitButton } from "./SubmitButton";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { registerAction } from "@/actions";

const FormRegister = () => {
  const [see, setSee] = useState(true);
  return (
    <form
      action={async (formData) => {
        const getSelect = formData.get("select");
        if (getSelect === "0") {
          toast.warning("Please select your company");
        } else {
          const data = await registerAction(formData);
          data?.mssg ? toast.warning(data.mssg) : null;
        }
      }}
      // action={register}
      className="w-full flex flex-col hd:gap-3 fhd:gap-4"
    >
      <div className="flex flex-col w-full">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          required
          autoComplete="off"
          id="email"
          type="email"
          className="border-[1px] focus:outline-none mt-1 border-[#8a8a8a] py-2 px-3 rounded-md"
          name="email"
          placeholder="Email Address"
        />
      </div>
      <div className="flex flex-col  ">
        <label className="font-semibold" htmlFor="password">
          Password
        </label>
        <div className="w-full relative">
          <input
            required
            id="password"
            type={see ? "password" : "text"}
            className="border-[1px] mt-1 focus:outline-none border-[#8a8a8a] w-full py-2 pl-3 rounded-md pr-5"
            name="password"
            placeholder="Enter Password"
          />
          <Image
            width={25}
            height={25}
            onClick={() => setSee(!see)}
            src={see ? "/mdi_eye.svg" : "/mdi_eye-off.svg"}
            className="w-[25px] aspect-square absolute right-[10px] top-[12px] cursor-pointer"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col  ">
        <label htmlFor="select" className="font-semibold">
          Company
        </label>
        <select
          className="border-[1px] mt-1 focus:outline-none border-[#8a8a8a] w-full py-2 pl-3 rounded-md pr-5 text-[#8a8a8a] "
          name="select"
          id="select"
          required
        >
          <option value="0">Select Your Company</option>
          <option value="1">ATO</option>
          <option value="2">107</option>
        </select>
      </div>
      <div className="sm:pt-[20px] fhd:pt-32  2xl:pt-44 w-full">
        <SubmitButton text="Submit" />
        <p className="text-center pt-2">
          Already have an account?{" "}
          <Link href="/auth" className="text-primary cursor-pointer">
            Sign In
          </Link>
        </p>
      </div>
    </form>
  );
};

export default FormRegister;
