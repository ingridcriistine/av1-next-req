"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

interface IData {
    name: string,
    _id: number,
    imageUrl: string
}

const FetchPage = () => {

    const [characters, setCharacters] = useState<IData[]>([])

    useEffect(() => {
        const load = async () => {
            const res = await fetch("https://api.disneyapi.dev/character");
            const data = await res.json();
            setCharacters(data.data);
            console.log(data.data)
        }
        load();
    }, [])

    return (
        <div className="bg-gray-900 text-white">
            <h1 className="font-bold p-4 pt-32 flex justify-center text-[22px]">Personagens</h1>
            <div className=" pt-10 pb-20 flex row flex-wrap justify-center">
                {characters.map((item) => {
                    return (
                        <div key={item._id} className="bg-white rounded m-4 text-black w-[250px] flex flex-col items-center justify-center">
                            <h2 className="p-4 h-[90px] font-semibold text-center flex items-center">{item.name}</h2>
                            <Image className="w-[200px] h-[220px] mb-6 rounded" src={item.imageUrl} width={1000} height={1000} alt="foto" priority/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FetchPage;