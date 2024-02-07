"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
// import { loginAction } from "@/actions";
import { SubmitButton } from "./SubmitButton";

const FormLogin = () => {
  const [seek, setSeek] = useState(true);

  return (
    <form
      action={async (formData) => {
        // const { mssg } = await loginAction(formData);
        // toast.error(mssg);
      }}
      className="w-full"
    >
      <div className="flex flex-col w-full">
        <label className="font-semibold" htmlFor="email">
          Email
        </label>
        <input
          required
          autoComplete="off"
          type="email"
          className="border-[1px] focus:outline-none mt-1 border-[#8a8a8a] py-2 px-3 rounded-md"
          name="email"
          id="email"
          placeholder="Email Address"
        />
      </div>
      <div className="flex flex-col mt-4">
        <label className="font-semibold" htmlFor="password">
          Password
        </label>
        <div className="w-full relative">
          <input
            required
            type={seek ? "password" : "text"}
            className="border-[1px] mt-1 focus:outline-none border-[#8a8a8a] w-full py-2 pl-3 rounded-md pr-5"
            name="password"
            id="password"
            placeholder="Enter Password"
          />

          <Image
            width={25}
            height={25}
            onClick={() => setSeek(!seek)}
            src={seek ? "/mdi_eye.svg" : "/mdi_eye-off.svg"}
            className="w-[25px] aspect-square absolute right-[10px] top-[12px] cursor-pointer"
            alt=""
          />
        </div>
      </div>

      <div className="pt-[110px] 2xl:pt-44 w-full">
        <SubmitButton text="Login" />
        {/* <Link href={'/register'}>Sign</Link> */}

        <div className="text-center pt-2">
          Dont have an account?{" "}
          <Link href="/auth/register" className="text-primary cursor-pointer">
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default FormLogin;
