"use client";

import { useFormStatus } from "react-dom";

export const SubmitButton = ({ text }: { text: string }) => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-primary font-bold text-white text-center w-full min-w-80 rounded-md py-2 px-3"
    >
      {pending ? "Loading..." : text}
    </button>
  );
};
