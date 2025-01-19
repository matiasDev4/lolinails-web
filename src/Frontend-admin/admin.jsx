import { BrowserRouter, Routes, Route,} from "react-router-dom"
import { Sidebar } from "./components/sidebar"
import { Courses_panel } from "./components/cursos"

export const Admin = () =>{
    return <div className="flex flex-col gap-y-10 bg-[#0c0c0c] min-h-screen lg:flex-row lg:gap-x-5">
                <div>
                    <Sidebar />
                </div>
                <div>
                    <Routes>
                        <Route index path="cursos" element={<Courses_panel />}/>
                    </Routes>
                </div>
            </div>
}