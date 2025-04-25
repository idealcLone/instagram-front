"use server";

const BASE_URL =
  `${process.env.BACKEND_URL}/api` || `http://localhost:8000/api`;

import { defaultErrorHandler } from "@/utils/common";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function authorizedFetch(
  url: string,
  init: RequestInit = {},
  withRedirect = true
) {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      headers: {
        Cookie: cookies().toString(),
        ...init.headers,
      },
      credentials: "include",
      ...init,
    });

    console.log("Response", url, response);

    if (response.status.toString().startsWith("2")) {
      return await response.json();
    }
  } catch (error) {
    defaultErrorHandler(JSON.stringify(error));
  }

  if (withRedirect) {
    redirect("/auth");
  }
}
