import Image from "next/image";

interface IPerso {
    params: {
        id: string;
    }
}

interface IData {
    data: {
        _id: string,
        name: string,
        imageUrl: string
    } 
}

const Perso = async ({params: {id}} : IPerso) => {

    const res = await fetch(`https://api.disneyapi.dev/character/${id}`)
    const idata: IData = await res.json()

    return(
        <div className="bg-gray-900 text-white">
            <div className="pt-10 pb-20">
                <h1 className="font-bold p-4 pt-16 flex justify-center text-[22px]">{idata.data.name}</h1>
                <p className="font-bold p-4 pt-16 flex justify-center text-[22px]">ID: {idata.data._id}</p>
                <Image className="w-[200px] h-[220px] mb-6 rounded" src={idata.data.imageUrl} alt="photo" width={1000} height={1000} priority/>
            </div>
        </div>
    )
}

export default Perso

export async function generateStaticParams() {
    return ["1", "2", "3", "4"]
}