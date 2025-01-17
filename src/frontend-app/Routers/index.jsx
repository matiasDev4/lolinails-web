import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";


export const Index = () =>{


    return (
        <>
            <body className="bg-[#0F0E0E] h-screen">
                <header className="bg-black px-[25px] h-[12vh]
                 text-white flex items-center justify-between shadow-[0px_0px_15px_black]">
                    <div className="flex items-center gap-x-5">
                        <img src="./src/assets/images/logo.png" 
                        alt="logo" 
                        className="w-[50px] h-[50px] rounded-[50%]" />
                        <span className="text-[25px]">Lolinails</span>
                    </div>
                    <div>
                        <Link to={"/turnos"}>
                            <button className="bg-purple-700 px-[12px] py-[6px] rounded-[10px]">
                                Agendar turno
                            </button>
                        </Link>
                    </div>
                </header>
            </body>
        </>
    )
}