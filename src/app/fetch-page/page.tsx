"use client"

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import { Card } from "@/components/card";

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
            console.log(data.data);
        }
        load();
    }, [])

    return (
        <div className="">
            <h1 className="font-bold p-4 pt-32 flex justify-center text-[22px]">Personagens</h1>
            <div className=" pt-10 pb-20 flex row flex-wrap justify-center">
                <Suspense fallback={<div className="pt-16">Loading...</div>}>
                    {characters.map((item) => {
                        return (
                            <Card name={item.name} image={item.imageUrl} id={item._id}/>
                        )
                    })}
                </Suspense>
            </div>
        </div>
    )
}

export default FetchPage;