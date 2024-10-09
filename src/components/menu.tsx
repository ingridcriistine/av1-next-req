import { ROUTES } from "@/constants/routes";
import Link from "next/link";

interface MenuProps {
    op1: string;
}

const styleMenu = {
    link: "text-white text-[25px] hover:text-black transition easy-in-out"
}

export const Menu: React.FC<MenuProps> = ({op1}) => {
    return(
        <nav className="text-preto bg-cyan-700 justify-evenly p-3 fixed w-full z-10 font-robFont text-large flex flex-row justify-center align-center gap-8">
          <Link href={ROUTES.firstPage} className={styleMenu.link}>{op1}</Link>
        </nav>
    )
}