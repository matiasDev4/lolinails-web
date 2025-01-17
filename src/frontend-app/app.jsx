import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Turnos } from './Routers/turnos'
import { Index } from './Routers/index'



export const App = () =>{
    return <BrowserRouter>
        <Routes>
            <Route index path="/" element={<Index />}></Route>
            <Route path="/turnos" element={<Turnos />}></Route>
        </Routes>
    </BrowserRouter>
}
