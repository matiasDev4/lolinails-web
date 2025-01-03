

export const HeaderApp = () =>{
    return (
        <>
        <header className="bg-black min-h-[20vh] rounded-lg text-white shadow-[0px_0px_20px_black]">
            <div className="flex flex-col justify-center items-center min-h-[20vh] py-[10px]">
                <img src="./src/assets/images/logo.png" alt="profile" 
                className="w-[100px] h-[100px] rounded-full"/>
                <span className="text-[30px] my-[2px] font-gotic">Agenda tu turno</span>
            </div>
        </header>
        </>
    )
}


