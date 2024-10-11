import { ROUTES } from "@/constants/routes";
import Link from "next/link";

interface MenuProps {
    op1: string;
    op2: string;
    op3: string;
}

const styleMenu = {
    link: "text-white text-[23px] hover:underline transition easy-in-out"
}

export const Menu: React.FC<MenuProps> = ({op1, op2, op3}) => {
    return(
        <nav className="bg-gradient-to-r from-cyan-800 via-cyan-600 to-cyan-800 justify-evenly p-3 fixed w-full z-10 font-robFont text-large flex flex-row justify-center align-center gap-8 text-center">
          <Link href={ROUTES.firstPage} className={styleMenu.link}>{op1}</Link>
          <Link href={ROUTES.secondPage} className={styleMenu.link}>{op2}</Link>
          <Link href={ROUTES.thirdPage} className={styleMenu.link}>{op3}</Link>
        </nav>
    )
}