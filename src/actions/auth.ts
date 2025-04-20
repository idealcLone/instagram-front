"use server";

import { cookies } from "next/headers";
import { authorizedFetch } from "@/actions/index";
import { defaultErrorHandler } from "@/utils/common";
import { redirect } from "next/navigation";

export const verifyOAuthToken = async (token: string) => {
  try {
    const response = await authorizedFetch("/auth/oauth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    const { token: jwtToken, user } = response;

    cookies().set("token", jwtToken, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    });

    return user;
  } catch (error) {
    defaultErrorHandler(JSON.stringify(error));
  }
};

export const logout = async () => {
  cookies().set("token", "");
  redirect("/auth");
};
