import Datepicker from "react-tailwindcss-datepicker";

export const FormApp = () =>{
    return (
        <>
        <div className="bg-black my-5 h-auto py-[25px] px-[50px] rounded-lg text-white
        xl:w-[35%] mx-auto ">
            <form action="">
                <div className="flex flex-col w-full gap-y-5 [&>div>input]:rounded-[6px]
                ">
                    <div className="flex flex-col gap-y-[10px] ">
                        <span>Nombre</span>
                        <input type="text" name="name" id="name" 
                        className="py-[8px] text-black px-[10px] outline-purple-800 bg-gray-300"/>
                    </div>
                    <div className="flex flex-col gap-y-[10px]">
                        <span>Email</span>
                        <input type="text" name="dni" id="dni" 
                        className="py-[8px] text-black px-[10px] outline-purple-800 bg-gray-300"/>
                    </div>
                    <div className="flex flex-col gap-y-[10px]">
                        <span>Seleccionar fecha</span>
                    </div>
                    <div className="flex flex-col gap-y-[10px]">
                        <span>Seleccionar horario</span>
                        <select name="fecha" id="fecha" 
                        className="py-[8px] text-black px-[10px] outline-purple-800 bg-gray-300">
                            <option value="val1">10:00</option>
                        </select>
                    </div>
                    <a href="#" className="bg-green-500 w-1/3 text-center rounded-[10px] text-[18px] py-[5px] my-[10px]" >Reservar</a>
                </div>
            </form>
        </div>
        </>
    )
}