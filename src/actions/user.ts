"use server";

import { authorizedFetch } from "@/actions/index";
import { IUser, IUserDetails } from "@/types/user";

export const getCurrentUser = async () => {
  return (await authorizedFetch(`/user`)) as IUser & IUserDetails;
};

export const getUserByUsername = async (username: string) => {
  return (await authorizedFetch(`/user/${username}`)) as IUser & IUserDetails;
};
