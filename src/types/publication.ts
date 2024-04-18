import { IUser } from "@/types/user";

export interface IPublication {
  id: number;
  description: string;
  user: Pick<IUser, "username" | "avatar" | "email">;
  likesCount: number;
  commentsCount: number;
  likedByMe: boolean;
  images: IImage[];
}

export interface IComment {
  id: number;
  text: string;
  user: number;
}

export interface ILike {
  id: number;
  user: number;
}

export interface IImage {
  id: number;
  url: string;
  createdAt?: string;
}

export interface IStory {
  id: number;
  user: Pick<IUser, "username" | "avatar">;
  images: IImage[];
}
