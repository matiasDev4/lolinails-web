

export const HeaderApp = () =>{
    return (
        <>
        <header className="bg-black md:max-h-[25vh] xl:max-h-[25vh] 2xl:max-h-[20vh] rounded-lg text-white shadow-[0px_0px_20px_black]
        xl:w-[35%] mx-auto">
            <div className="flex flex-col justify-center items-center h-full py-[10px]">
                <img src="./src/assets/images/logo.png" alt="profile" 
                className="w-[100px] h-[100px] rounded-full"/>
                <span className="text-[30px] my-[2px] font-gotic">Agenda tu turno</span>
            </div>
        </header>
        </>
    )
}


