import { Axios } from "axios";
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
    }
    useEffect(()=>{
        getCourses();
    }, []);

    return (
        <>
            <section>
                <div className="py-[30px] mx-[0px] shadow-[0px_10px_15px_5px_black] rounded-[20px]">
                    <h1 className="mb-[15px] text-[25px] text-center text-white">Nuevo curso</h1>
                    <form action="" className="flex flex-col space-y-10 items-center">
                        <div className="flex flex-col w-9/12 gap-y-3
                        [&>input]:rounded-[5px] [&>input]:px-[10px] [&>input]:py-[5px]">
                            <span className="text-white">Nombre</span>
                            <input type="text" name="name" onChange={(e)=>{setName(e.target.value)}}/>
                        </div>
                        <div className={`flex flex-col w-9/12 gap-y-3
                        [&>textarea]:rounded-[5px] [&>textarea]:px-[10px] [&>textarea]:py-[10px] [&>textarea]:resize-none`}>
                            <span className="text-white">descripcion</span>
                            <textarea type="text" name="descri" onChange={(e)=>{
                            setDescription(e.target.value)
                            setLimit(e.target.value.length)
                            }}></textarea>
                            <span className={`${limit === 100 ? "text-red-500" : "text-white"}`}>{limit}/100</span>
                        </div>
                        <div className="flex flex-col w-9/12 gap-y-3
                        [&>input]:rounded-[5px] [&>input]:px-[10px] [&>input]:py-[5px]">
                            <span className="text-white">precio</span>
                            <input type="number" name="price" onChange={(e)=>{setPrice(String(e.target.value))}}/>
                        </div>
                        <div className="flex flex-col max-w-[75%] gap-y-3">
                                <span className="text-white">Seleccionar imagen</span>
                                <input type="file" name="img_name" onChange={(e)=>{setImage(e.target.files[0])}}/>
                            </div>
                        <div className="flex flex-row min-w-[75%] gap-x-5 items-center">                         
                                <span className="text-white text-[18px]">Habilitar</span>
                                <input type="checkbox" name="is_active" className="mt-[2px]" onChange={(e)=>{setActive(e.target.checked)}}/>
                        </div>
                        <div className="w-[75%]">
                            <button className="bg-green-600 px-[15px] py-[5px] rounded-lg w-full text-white font-bold text-[20px]
                            hover:bg-green-700/90 transition-all duration-300 hover:translate-y-[-5px] " onClick={sendData}>
                                Añadir curso
                            </button>
                        </div>
                    </form>
                </div>
                {courser.map((items) =>{
                                    return <div className="my-[50px] text-white bg-gray-400/50 mx-[20px] rounded-[5px]
                                    h-auto" key={items.id}>
                                        <div className="flex flex-row justify-between px-[5px] items-center py-[10px]">
                                            <div className="flex flex-row items-center gap-x-3">
                                                <img src="/src/assets/images/logo.png" alt="" 
                                                className="w-[40px] rounded-[50%]"/>
                                                <span className="font-bold text-nowrap text-ellipsis overflow-hidden">{items.name}</span>
                                            </div>
                                            <h1 className="font-bold flex gap-x-2">Precio: <span className="font-normal text-green-400">${items.price}</span></h1>
                                        </div>
                                        <div className="px-[10px] flex flex-col gap-y-2">
                                            <p className="text-wrap">{items.description}</p>
                                            <div className="flex flex-row items-center gap-x-10 py-[10px]">
                                                <button id={items.id} className="flex flex-row items-center gap-x-2
                                                bg-red-600 px-[15px] py-[5px] rounded-[12px] hover:bg-red-800 transition-all duration-300 hover:translate-y-[-5px]"
                                                onClick={deleteData}>
                                                    <MdDeleteForever />
                                                    <span>Eliminar</span>
                                                </button>
                                                <button className="flex flex-row items-center gap-x-2
                                                bg-green-600 px-[15px] py-[5px] rounded-[12px] hover:bg-green-800 transition-all duration-300 hover:translate-y-[-5px]">
                                                    <MdEdit/>
                                                    <span>Editar</span>
                                                </button>  
                                            </div>
                                        </div>
                                    </div>
                })}
            </section>

        </>
    )
    
}