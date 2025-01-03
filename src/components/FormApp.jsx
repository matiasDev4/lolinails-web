export const FormApp = () =>{
    return (
        <>
        <div className="bg-black my-5 h-auto py-[25px] px-[50px] rounded-lg text-white">
            <form action="">
                <div className="flex flex-col w-full gap-y-5 [&>div>input]:rounded-[6px]">
                    <div className="flex flex-col gap-y-[10px] ">
                        <span>Nombre</span>
                        <input type="text" name="name" id="name" 
                        className="py-[8px] text-black px-[10px] outline-purple-800 bg-gray-400"/>
                    </div>
                    <div className="flex flex-col gap-y-[10px]">
                        <span>Email</span>
                        <input type="text" name="dni" id="dni" 
                        className="py-[8px] text-black px-[10px] outline-purple-800 bg-gray-400"/>
                    </div>
                    <div className="flex flex-col gap-y-[10px]">
                        <span>Seleccionar fecha</span>
                        <select name="fecha" id="fecha" 
                        className="py-[8px] text-black px-[10px] outline-purple-800 bg-gray-400">
                            <option value="val1">20/01/2025</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-y-[10px]">
                        <span>Seleccionar horario</span>
                        <select name="fecha" id="fecha" 
                        className="py-[8px] text-black px-[10px] outline-purple-800 bg-gray-400">
                            <option value="val1">10:00</option>
                        </select>
                    </div>

                </div>
            </form>
        </div>
        </>
    )
}