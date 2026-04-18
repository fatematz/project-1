import Image from "next/image";

import data from "@/data.json"
import FriendsCard from "./components/FriendsCard";

export default function Home() {
  return (
    <div className="container py-[60px]">
    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  bg-zinc-50 font-sans dark:bg-black">

      {
        data.map(data => <FriendsCard data={data} key={data.id}></FriendsCard> )
      }

      </div>
      </div>
  );
}
