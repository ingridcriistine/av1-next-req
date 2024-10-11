import Image from "next/image";

import castelo from "../assets/castelo.gif";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center flex-col rounded pt-24">
        <h2 className="p-4 text-[20px] font-bold">API Disney</h2>
        <Image className="w-[85%] m-4 border-double border-[10px] border-white rounded shadow-lg shadow-black lg:w-[50%]" src={castelo} width={200} height={200} alt="gif" priority/>
      </div>
    </div>
  );
}
