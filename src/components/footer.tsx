import Link from "next";

interface IFooter {
    copyright: string;
}

export const Footer: React.FC<IFooter> = ({copyright}) => {
    return(
        <footer className="flex justify-center items-center h-[40px] bg-gradient-to-r from-cyan-800 via-cyan-600 to-cyan-800 text-white text-[15px] hover:text-black transition easy-in-out">
            <p>{copyright}</p>
        </footer>
    )
}