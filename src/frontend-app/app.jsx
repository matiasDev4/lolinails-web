import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Turnos } from './Routers/turnos'
import { Index } from './Routers/index'
import { Admin } from '../Frontend-admin/admin'



export const App = () =>{
    return <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Index />}></Route>
                <Route path="/turnos" element={<Turnos />}></Route>
                <Route path="/admin_panel/*" element={<Admin />}></Route>
            </Routes>
    </BrowserRouter>
}
