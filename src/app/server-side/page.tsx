import { Suspense } from "react";
import Link from "next/link";

type IData = {
    data: {
        name: string,
        _id: number,
        imageUrl: string
    }[]
}

const ServerSide = async () => {

    const res = await fetch("https://api.disneyapi.dev/character")
    const data : IData = await res.json()
    console.log(data)

    return(
        <div className="">
            <div className="pt-20">
                <h1 className="font-bold p-4 pt-16 flex justify-center text-[22px]">Lista de personagens</h1>
                <div className="w-full flex flex-wrap justify-center mt-6 mb-8">
                    <Suspense fallback={<div>Loading...</div>}>
                        {data.data.map((item) => {
                            return(
                                <Link href={`/perso/${item._id}`}>
                                    <div key={item._id} className="rounded m-4 text-black w-[300px] p-[20px] flex flex-col items-center justify-center border-double border-[10px] border-cyan-600 rounded shadow-md shadow-black hover:opacity-60">
                                        <h2 className="font-bold">{item.name}</h2>
                                        <Link href={`/perso/${item._id}`} className="font-bold text-cyan-700 underline mt-4 p-1 pl-2 pr-2 text-[12px] rounded">SOBRE</Link>
                                    </div>
                                </Link>
                            )
                        })}
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default ServerSide;