import { Link } from "react-router-dom"
import { IoBook } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { IoPricetag } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FaArrowCircleRight } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";


export const Sidebar = () =>{
    const [open, setOpen] = useState(false)
    

    return (
        <>
            <header className="bg-black w-full lg:w-[8vh] text-white h-[8vh] flex flex-row items-center 
            justify-between px-[20px] shadow-[0px_0px_20px_black] sticky">
                <div className="flex flex-row items-center gap-x-5 lg:hidden ">
                    <img src="/src/assets/images/logo.png" alt="png" 
                     className="w-[50px] rounded-[50%]"/>
                     <span>Usuario default</span>
                </div>
                <nav className={`absolute top-0 z-1 bg-black h-screen max-w-[25vh] flex flex-col justify-between py-[20px] transition-all duration-300 ${!open ? "left-[-100%] lg:max-w-[8vh]" : "left-0 lg:max-w-[30vh]"}
                lg:left-0 shadow-[0px_0px_20px_black]`}>
                    <div className="sm:hidden lg:flex flex-row items-center gap-x-2 mx-[20px] w-full">
                        <img src="/src/assets/images/logo.png" alt="png" 
                        className="w-[40px] rounded-[50%]"/>
                        <span className={`${!open ? "opacity-0" : "opacity-100 "} transition-opacity duration-300 overflow-hidden text-nowrap text-ellipsis`}>Usuario default</span>
                    </div>
                    <ul className="flex flex-col gap-y-8 justify-between mx-[20px]
                     [&>li]:py-[5px] [&>li]:rounded-[10px] lg:mx-[20px] lg:[&>li]:bg-slate-500/50">
                        <li className="hover:bg-purple-500 transition-all duration-300">
                            <Link to={"/admin_panel/cursos"} className="flex flex-row items-center px-[25px] gap-x-5 lg:px-[10px]">
                                <span><IoBook /></span>
                                <span className={`${!open ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}>Cursos</span>
                            </Link>
                        </li>
                        <li className="hover:bg-purple-500 transition-all duration-300">
                            <Link to={"/editar_turno"} className="flex flex-row items-center px-[25px] gap-x-5 lg:px-[10px]">
                                <span><FaCalendarAlt/></span>
                                <span className={`${!open ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}>Turnos</span>
                            </Link>
                        </li>
                        <li className="hover:bg-purple-500 transition-all duration-300">
                            <Link to={"/editar_precios"} className="flex flex-row items-center px-[25px] gap-x-5 lg:px-[10px]">
                                <span><IoPricetag/></span>
                                <span className={`${!open ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}>Precios</span>
                            </Link>
                        </li>
                        <li className="hover:bg-purple-500 transition-all duration-300">
                            <Link to={"/ajustes"} className="flex flex-row items-center px-[25px] gap-x-5 lg:px-[10px]">
                                <span><IoMdSettings/></span>
                                <span className={`${!open ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}>Ajustes</span>
                            </Link>
                        </li>
                        <div className="absolute top-[50%] text-[30px] right-[-15px] rotate-180
                         text-purple-400 bg-black rounded-[50%] p-[5px] hover:cursor-pointer lg:hidden"
                         onClick={(e)=>{open ? setOpen(false) : ""}}>
                            <span><FaArrowCircleRight/></span>
                        </div>
                    </ul>

                    <div className="flex flex-row items-center gap-x-5 px-[25px] lg:px-[10px] 
                    hover:bg-purple-500 transition-all hover:cursor-pointer duration-300 mx-[15px] py-[5px] rounded-[10px] lg:bg-slate-500/50 ">
                            <span className="text-[20px]"><CiLogout/></span>
                            <span className={`${!open ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}>Salir</span>
                    </div>
                </nav>
                <div className="text-[30px] hover:cursor-pointer hover:text-purple-300 hover:translate-y-[-4px] duration-300 transition-all
                lg:hidden"
                onClick={(e)=>{!open ? setOpen(true) : setOpen(false)}}>
                    <RxHamburgerMenu />
                </div>
            </header>
        </>
    )
}