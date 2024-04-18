"use server";

import { authorizedFetch } from "@/actions/index";
import { IPublication } from "@/types/publication";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const createPublication = async (formData: FormData) => {
  const publication = (await authorizedFetch(`/publication`, {
    method: "POST",
    body: formData,
  })) as IPublication;

  revalidatePath("/");
  redirect("/");

  return publication;
};

export const getUserFeed = async () => {
  return (await authorizedFetch(
    "/publication/feed?page=1&limit=10"
  )) as IPublication[];
};

export const getPublicationsByUserId = async (userId: number) => {
  return (await authorizedFetch(
    `/publication/user/${userId}?page=1&limit=10`
  )) as IPublication[];
};

export const getPublicationById = async (id: number) => {
  return (await authorizedFetch(`/publication/${id}`)) as IPublication;
};
