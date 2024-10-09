"use client"

import { useEffect, useState, Suspense } from "react";
import { api } from "@/constants/api";
import Image from "next/image";

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
        <div className="bg-zinc-900 text-white">
            <h1 className="font-bold p-4 pt-16 flex justify-center text-[22px] pt-32">Personagens</h1>
            <div className="flex justify-center gap-4 pt-12">
                <input type="number" value={page} onChange={(e) => setPage(e.target.value)} placeholder="1/149 - insira a página" className="text-black rounded pl-4"/>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Pesquise um nome" className="text-black rounded pl-4"/>
            </div>
            <div className="pt-10 pb-20 flex row flex-wrap justify-center">
                {erro && <h5 className="pt-32 text-white">{errorMessage}</h5>}
                <Suspense fallback={<div>Loading...</div>}>
                    {data.map((item, index) => {
                        return(
                            <div key={item._id} className="bg-white rounded m-4 text-black w-[250px] flex flex-col items-center justify-center border-cyan-600 border-2 shadow-sm shadow-slate-50">
                                <h2 className="p-4 h-[90px] font-semibold text-center flex items-center">{item.name}</h2>
                                <Image className="w-[200px] h-[220px] mb-6 rounded opacity-100 hover:opacity-90 shadow-lg shadow-stone-800" src={item.imageUrl} width={1000} height={1000} alt="imagem" priority/>
                            </div>
                        )
                        
                    })}
                </Suspense>
            </div>
        </div>
    )
}

export default AxiosPage;