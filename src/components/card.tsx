import Image from "next/image";

interface ICard {
    name: string,
    image: string,
    id: number
}

export const Card: React.FC<ICard> = ({name, image, id}) => {
    return(
        <div key={id} className="bg-cyan-700 text-white rounded m-4 text-black w-[250px] flex flex-col items-center justify-center border-double border-[10px] border-white rounded shadow-md shadow-black hover:scale-105 transition easy-in-out">
            <h2 className="p-4 h-[90px] font-semibold text-center flex items-center">{name}</h2>
            <Image className="w-[200px] h-[220px] mb-6 rounded opacity-100 hover:opacity-90 shadow-lg shadow-stone-800" src={image} width={1000} height={1000} alt="foto" priority/>
        </div>
    )
}