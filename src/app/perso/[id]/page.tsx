import Image from "next/image";
import Link from "next/link";

interface IPerso {
    params: {
        id: string;
    }
}

interface IData {
    data: {
        _id: string,
        name: string,
        imageUrl: string,
        sourceUrl: string,
    } 
}

const Perso = async ({params: {id}} : IPerso) => {

    const res = await fetch(`https://api.disneyapi.dev/character/${id}`)
    const idata: IData = await res.json()

    return(
        <div className="flex justify-center">
            <div className="mt-36 mb-24 pb-16 w-[90%] h-auto flex items-center flex-col border-double border-[10px] border-white rounded shadow-lg  shadow-cyan-700 shadow-[0_5px_30px_-8px_rgba(0,0,0,0.3)]">
                <Image className="w-[80%] mb-6 mt-12 rounded opacity-100 hover:opacity-80 shadow-lg shadow-stone-800 md:w-[40%] lg:w-[25%]" src={idata.data.imageUrl} alt="photo" width={10000} height={10000} priority/>
                <h1 className="font-bold p-4 pt-16 flex justify-center text-[22px]">{idata.data.name}</h1>
                <p className="font-bold p-1 pb-8 flex justify-center text-[14px]">ID: {idata.data._id}</p>
                <p className="w-[80%] text-justify pb-6">Walt Disney arrived in California in the summer of 1923 with a lot of hopes but little else. He had made a cartoon in Kansas City about a little girl in a cartoon world, called Alice’s Wonderland, and he decided that he could use it as his “pilot” film to sell a series of these “Alice Comedies” to a distributor. Soon after arriving in California, he was successful. A distributor in New York, M. J. Winkler, contracted to distribute the Alice Comedies on October 16, 1923, and this date became the start of the Disney company. Originally known as the Disney Brothers Cartoon Studio, with Walt Disney and his brother, Roy, as equal partners, the company soon changed its name, at Roy’s suggestion, to the Walt Disney Studio.</p>
                <p className="w-[80%] text-justify pb-6">Walt Disney made his Alice Comedies for four years, but in 1927, he decided to move instead to an all-cartoon series. To star in this new series, he created a character named Oswald the Lucky Rabbit. Within a year, Walt made 26 of these Oswald cartoons, but when he tried to get some additional money from his distributor for a second year of the cartoons, he found out that the distributor had gone behind his back and signed up almost all of his animators, hoping to make the Oswald cartoons in his own studio for less money without Walt Disney. On rereading his contract, Walt realized that he did not own the rights to Oswald—the distributor did. It was a painful lesson for the young cartoon producer to learn. From then on, he saw to it that he owned everything that he made.</p>
                
                <Link href={idata.data.sourceUrl} className="font-bold mt-8 p-1 pl-2 pr-2 text-[16px] rounded bg-gradient-to-r from-cyan-800 via-cyan-600 to-cyan-800 text-white opacity-90 hover:opacity-100">FANDOM</Link>
            </div>
        </div>
    )
}

export default Perso

export async function generateStaticParams() {
    return ["1", "2", "3", "4"]
}