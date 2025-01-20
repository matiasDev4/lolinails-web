
import { useEffect, useState } from "react"
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useLocation } from "react-router-dom";



export const Courses_panel = () =>{
    const [limit, setLimit] = useState(0);
    const [courser, setCourses] = useState([]);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);
    const [descripcion, setDescription] = useState("");
    const [active, setActive] = useState(false);

    const sendData = async (e) =>{
        e.preventDefault();
        const formData = new FormData();

        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", descripcion);
        formData.append("is_active", active);
        formData.append("img_name", image);
        await fetch("http://127.0.0.1:8000/new_course",{
            method:"POST",
            body: formData
        }).then(()=>{
            console.log("datos enviados!");
            getCourses();
        });
        

    } 

    const deleteData = async (e) =>{
        const data = await fetch(`http://127.0.0.1:8000/delete_course/${e.currentTarget.id}`,{
            method: "DELETE"
        })
        .then((res) => {
            getCourses();
        })
        
    };

    const getCourses = async () =>{
        const dataCourses = await fetch("http://127.0.0.1:8000/all_course")
        const dataJson = await dataCourses.json()
        setCourses(dataJson)
        console.log(courser)
    }
    useEffect(()=>{
        getCourses();
    }, []);

    return (
        <section className="h-auto lg:w-[100%] lg:mx-[10vh]">
            <div className="w-full py-[20px] text-[25px] text-white text-start px-[15px]">
                <h1>Nuevo curso</h1>
            </div>
            <form action="" className="grid grid-cols-1 lg:grid-cols-2 justify-center mb-[20px]">
                <div className="flex flex-col ">
                    <div className="w-1/1 lg:w-1/2 px-[10px]">
                        <label htmlFor=""
                        className="text-white"
                        >Nombre</label>
                        <input type="text"
                        className="w-full rounded-sm my-4 px-[10px] py-[5px] focus:outline-none"
                        name="name"
                        onChange={(e=>{setName(e.target.value)})}
                        />
                    </div>
                    <div className="w-1/1 px-[10px] lg:w-1/2">
                        <label htmlFor=""
                        className="text-white">Precio</label>
                        <input type="number"
                        className="w-full rounded-sm my-4 px-[10px] py-[5px] focus:outline-none"
                        name="price"
                        onChange={(e=>{setPrice(e.target.value)})}
                        />
                    </div>
                    <div className="px-[10px] w-1/1 lg:w-1/1">
                        <label htmlFor=""
                        className="text-white">Descripcion</label>
                        <textarea type="text"
                        className="w-full rounded-sm my-4 px-[10px] py-[5px] focus:outline-none resize-none"
                        name="description"
                        maxLength={100}
                        onChange={(e=>{setDescription(e.target.value)})}
                        />
                </div>
                </div>

                <div className="flex flex-col space-y-10 px-[10px] py-[10px] justify-evenly">
                    <div className="w-1/1">
                        <label htmlFor=""
                        className="text-white">Seleccionar Imagen</label>
                        <input type="file"
                        className="w-full my-4 text-white text-ellipsis overflow-hidden
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-green-800
                        hover:file:bg-purple-200 file:hover:cursor-pointer"
                        name="img_name"
                        onChange={(e=>{setImage(e.target.files[0])})}
                        />
                    </div>
                    <div className="w-1/2 flex flex-row items-center">
                        <label htmlFor="is_active" 
                        className="text-white">Habilitar</label>
                        <input type="checkbox"
                        className="mt-1 mx-5 peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow
                        hover:shadow-md border border-slate-300 checked:bg-sky-600 checked:border-slate-800"
                        name="is_active"
                        onChange={(e=>{setActive(e.target.checked)})}
                        />
                    </div>
                    <div className="w-1/3 bg-green-600  rounded-[10px]">
                        <button 
                        className="w-full py-[5px] text-white text-[18px]"
                        type="submit" onClick={sendData}>Añadir</button>
                    </div>
                </div>
            </form>
            <section className="text-white overflow-y-auto h-[280px] hidden lg:block">
                <table className=" w-full min-h-[10vh] [&>tbody>tr>td]:text-center [&>tbody>tr>td]:border-r-0 [&>tbody>tr>td]:border-gray-400/50
                border-collapse [&>tbody>tr>td]:py-[10px] ">
                    <thead className="rounded-tl-[20px] [&>tr>th]:sticky [&>tr>th]:top-0 [&>tr>th]:bg-black">
                        <tr className="[&>th]:py-[8px] ">
                            <th className="rounded-tl-[10px]">ID</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>precio</th>
                            <th>estado</th>
                            <th className="rounded-tr-[10px]">acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {courser.map((items)=>
                        <tr className="" key={items.id}>
                            <td >{items.id}</td>
                            <td className="text-nowrap text-ellipsis overflow-hidden">{items.name}</td>
                            <td className="text-nowrap text-ellipsis overflow-hidden">{items.description}</td>
                            <td>{items.price}</td>
                            <td><input type="checkbox"
                            className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow
                            hover:shadow-md border border-slate-300 checked:bg-sky-600 checked:border-slate-800"
                            checked={items.is_active} /></td>
                            <td>
                                <div className="flex flex-row items-center gap-x-5 justify-center">
                                    <button className="bg-green-600 p-[5px] rounded-lg"><MdEdit /></button>
                                    <button className="bg-red-600 p-[5px] rounded-lg"
                                    id={items.id}
                                    onClick={deleteData}><MdDeleteForever /></button>
                                </div>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </section>
            <section>
                <div class>

                </div>
            </section>
        </section>
    )
    
}