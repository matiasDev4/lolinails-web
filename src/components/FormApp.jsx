export const FormApp = () =>{
    return (
        <>
        <div className="bg-black my-5 h-auto py-[25px] px-[50px] rounded-lg text-white">
            <form action="">
                <div className="flex flex-col w-full gap-y-5">
                    <div className="flex flex-col gap-y-[10px]">
                        <span>Nombre</span>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="flex flex-col gap-y-[10px]">
                        <span>DNI</span>
                        <input type="text" name="dni" id="dni" />
                    </div>
                    <div className="flex flex-col gap-y-[10px]">
                        <span>DNI</span>
                        <select name="fecha" id="fecha">
                            <option value="val1">20/01/2025</option>
                        </select>
                    </div>

                </div>
            </form>
        </div>
        </>
    )
}