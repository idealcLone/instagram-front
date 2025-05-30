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

    if (response.status.toString().startsWith("2")) {
      return await response.json();
    } else {
      throw new Error("Unable to retrieve the response from the server");
    }
  } catch (error) {
    defaultErrorHandler(JSON.stringify(error));
  }

  if (withRedirect) {
    redirect("/auth");
  }
}
