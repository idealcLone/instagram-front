"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Explore",
    url: "/explore",
  },
  {
    name: "Messages",
    url: "/messages",
  },
  {
    name: "Create",
    url: "/create",
  },
  {
    name: "Profile",
    url: "/profile",
  },
];

const Sidebar = () => {
  const [backendStatus, setBackendStatus] = useState<string>("");

  const getBackendStatus = async () => {
    try {
      const response = await fetch(
        `${process.env.BACKEND_URL}/api/health-check`
      );
      const data = await response.json();

      console.log("response", response);
      console.log("status", data);

      setBackendStatus(data || "OK");
    } catch {
      setBackendStatus("DEAD");
    }
  };

  useEffect(() => {
    getBackendStatus();
  }, []);

  return (
    <aside
      className={
        "sticky left-0 top-0 p-4 w-[250px] h-screen border-r-[0.5px] border-neutral-800"
      }
    >
      <ul className={"flex flex-col"}>
        <li className={"mb-4"}>
          <Link href={"/"} className={"block p-4 text-xl font-semibold"}>
            Instagram
          </Link>
        </li>
        <li className={"block p-4 hover:bg-neutral-800 rounded-md"}>
          <div>Status: </div>
          <div>{backendStatus}</div>
        </li>
        {links.map((link) => (
          <li key={link.url}>
            <Link
              href={link.url}
              className={"block p-4 hover:bg-neutral-800 rounded-md"}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
