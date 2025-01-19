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
                        <span className="text-[35px] font-gotic">Lolinails</span>
                    </div>
                    <div>
                        <Link to={"/turnos"}>
                            <button className="bg-purple-700 px-[12px] py-[6px] rounded-[10px]
                            hover:bg-purple-700/60 transition-all duration-300">
                                Agendar turno
                            </button>
                        </Link>
                    </div>
                </header>
                <section className="grid grid-cols-1 my-[50px]">
                    <div className="h-auto w-[300px] mx-auto rounded-[15px] shadow-[0px_0px_15px_black] bg-[#191919] text-white">
                        <img src="/src/assets/images/logo.png" alt="" className="w-full h-[260px] rounded-[15px_15px_0px_0px]"/>
                        <div className="h-auto mx-[10px]">
                            <div className="my-[12px] mx-[15px]">
                                <h1 className="text-[20px]">Curso de uñas</h1>
                            </div>
                            <div className="my-[20px] mx-[5px] px-[10px] py-[5px] min-w-[200px] min-h-[50px] text-wrap text-center">
                                <p>hola dsidqwe estamos aca dsadasdasd dasdasdas haciendo algos dskdj</p>
                            </div>
                            <div className="my-[20px] flex flex-row justify-between mx-[15px]">
                                <button className="bg-sky-600 px-[10px] rounded-[10px]
                                hover:bg-sky-600/50 transition-all duration-300">
                                    Comprar curso
                                </button>
                                <span className="text-[16px] bg-green-600 px-[10px] py-[5px] rounded-[30px]">$20.000</span>
                            </div>
                            </div>
                        </div>
                </section>
            </body>

        </>
    )
}