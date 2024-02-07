"use client";

import React from "react";
import { SubmitButton } from "./SubmitButton";
import { IRoles } from "@/types";
import { personalAction } from "@/actions";

const FormPersonal = ({ data }: { data: IRoles[] }) => {
  return (
    <form
      action={personalAction}
      className="w-full flex flex-col hd:gap-3 fhd:gap-4"
    >
      <div className="flex flex-col w-full">
        <label htmlFor="name" className="font-semibold">
          Name
        </label>
        <input
          autoComplete="off"
          id="name"
          type="text"
          className="border-[1px] focus:outline-none mt-1 border-[#8a8a8a] py-2 px-3 rounded-md"
          name="name"
          placeholder="Enter Your Name"
        />
      </div>
      <div className="flex flex-col  ">
        <label htmlFor="select" className="font-semibold">
          Role
        </label>
        <select
          className="border-[1px] mt-1 focus:outline-none border-[#8a8a8a] w-full py-2 pl-3 rounded-md pr-5 "
          name="role"
          id="select"
        >
          {data?.map((data: IRoles) => {
            const { id, role_name } = data;
            return (
              <option key={id} value={id}>
                {role_name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="pt-20 hd:pt-[100px] fhd:pt-32  2xl:pt-44 w-full">
        <SubmitButton text="Start Chatting" />
      </div>
    </form>
  );
};

export default FormPersonal;
