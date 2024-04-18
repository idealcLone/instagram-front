export interface IUser {
  id: number;
  email: string;
  username: string;
  avatar: string;
}

export interface IUserDetails {
  postsCount: number;
  followersCount: number;
  followingCount: number;
}
