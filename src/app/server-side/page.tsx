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
        <div className="bg-gray-900 text-white">
            <div className="pt-20">
                <h1 className="font-bold p-4 pt-16 flex justify-center text-[22px]">Lista de personagens</h1>
                <Suspense fallback={<div>Loading...</div>}>
                    {data.data.map((item) => {
                        return(
                            <div key={item._id}>
                                <h2>{item.name}</h2>
                                <Link href={`/perso/${item._id}`}>SOBRE</Link>
                            </div>
                        )
                    })}
                </Suspense>
            </div>
        </div>
    )
}

export default ServerSide;