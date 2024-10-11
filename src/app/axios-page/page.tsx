"use client"

import { useEffect, useState, Suspense } from "react";
import { api } from "@/constants/api";
import Image from "next/image";
import { Card } from "@/components/card";

import lupa from "../../assets/lupa.png";

interface IData {
    name: string,
    _id: number,
    imageUrl: string
}

const AxiosPage = () => {

    const [data, setData] = useState<IData[]>([]);
    const [erro, setErro] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("Não foi possível buscar os dados");
    const [page, setPage] = useState<string>("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        const local = localStorage.getItem('data');

        if(local){
            setData(JSON.parse(local))
        }
        else{
            api.get(`/character?page=${page}&name=${search}`).then((res) => {

                setData(res.data.data);
                console.log(res.data.data)
                setErro(false)

            }).catch((error) => {

                if(error.response.status === 404) {
                    setErrorMessage("Página não encontrada")
                }
                if(error.response.status === 400) {
                    setErrorMessage("Requisição inválida")
                }

                setErro(true);
            })
        }

    }, [page, search])

    return(
        <div className="">
            <h1 className="font-bold p-4 pt-16 flex justify-center text-[22px] pt-32 ">Personagens</h1>
            <div className="flex justify-end gap-[20px] pt-12">
                <div className="flex items-center gap-2">
                    <input type="number" value={page} onChange={(e) => setPage(e.target.value)} placeholder="1/149 - insira a página" className="w-[200px] text-black pl-2 border-b-[1px] border-black absolute right-[1px] mr-[40%] md:mr-[330px]"/>
                    <Image className="w-[15px] h-[15px] relative mr-[160px] md:mr-[170px]" src={lupa} width={20} height={20} alt="search" priority/>
                </div>
                <div className="flex items-center gap-2">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Pesquise um nome" className="w-[170px] text-black pl-2 border-b-[1px] border-black absolute right-[1px] mr-[15%] md:mr-[130px]"/>
                    <Image className="w-[15px] h-[15px] relative mr-[120px] md:mr-[130px]" src={lupa} width={20} height={20} alt="search" priority/>
                </div>
            </div>
            <div className="pt-10 pb-20 flex row flex-wrap justify-center">
                {erro && <h5 className="pt-32 text-white">{errorMessage}</h5>}
                <Suspense fallback={<div className="pt-16">Loading...</div>}>
                    {data.map((item, index) => {
                        return(
                            <Card name={item.name} image={item.imageUrl} id={item._id}/>
                        )
                        
                    })}
                </Suspense>
            </div>
        </div>
    )
}

export default AxiosPage;