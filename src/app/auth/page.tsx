"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { GoogleCallbackResponse } from "@/types/google";
import { defaultErrorHandler } from "@/utils/common";
import { IUser } from "@/types/user";
import { verifyOAuthToken } from "@/actions/auth";

const AuthPage = () => {
  const router = useRouter();

  const handleCallbackResponse = async (response: GoogleCallbackResponse) => {
    try {
      const user = await verifyOAuthToken(response.credential);
      if (user satisfies IUser) {
        router.push("/");
      }
    } catch (error) {
      defaultErrorHandler(JSON.stringify(error));
    }
  };

  useEffect(() => {
    // @ts-ignore
    if (window?.google) {
      // @ts-ignore
      window.google.accounts.id.initialize({
        client_id:
          "136409671872-ioao10ghnf805fil07q0bt0p8k06du23.apps.googleusercontent.com",
        callback: handleCallbackResponse,
      });

      // @ts-ignore
      window.google.accounts.id.renderButton(
        document.getElementById("signInButton"),
        {
          theme: "outline",
          size: "large",
        }
      );
    }
  }, [router]);

  return (
    <div className={"w-full mt-[200px] flex justify-center items-center"}>
      <div
        className={
          "border-neutral-100 border-[1px] rounded-md p-4 mx-auto w-[400px] flex justify-center flex-col items-center gap-4"
        }
      >
        <h1 className={"text-md font-medium"}>Login</h1>
        <div id={"signInButton"} />
      </div>
    </div>
  );
};

export default AuthPage;
