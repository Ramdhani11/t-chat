"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
// Auth
export const registerAction = async (formData: FormData) => {
  const reqBody = {
    email: formData.get("email"),
    password: formData.get("password"),
    company_id: Number(formData.get("select")),
  };

  try {
    const res = await axios.post(`${baseUrl}/register`, reqBody);
    if (cookies().get("token")?.value !== "") {
      cookies().delete("token");
      cookies().delete("companyId");
    }
    cookies().set("token", res.data.token);
    cookies().set("companyId", res.data.account.company_id);
  } catch (error: any) {
    cookies().delete("token");
    cookies().delete("companyId");

    return {
      mssg: error.response?.data,
    };
  }
  const companyId = cookies().get("companyId")?.value;

  return redirect(`/auth/personal?company=${companyId}`);
};

export const personalAction = async (formData: FormData) => {
  const reqBody = {
    name: formData.get("name"),
    role_id: Number(formData.get("role")),
  };

  try {
    const res = await axios.post(`${baseUrl}/personaldata`, reqBody, {
      headers: {
        Authorization: cookies().get("token")?.value,
      },
    });
    cookies().delete("token");
    cookies().set("id", res.data.account.id);
    cookies().set("company", res.data.account.company_name);
    cookies().set("name", res.data.account.name);
    cookies().set("access-token", res.data.token);
  } catch (error) {
    console.log(error);
  }

  return redirect("/en");
};

// Get common data
export const getRoles = async () => {
  try {
    const res = await axios.get(`${baseUrl}/roles`);
    return res.data;
  } catch (error) {
    return;
  }
};
