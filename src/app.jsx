import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Turnos } from './frontend-app/Routers/turnos'



export const App = () =>{
    return <BrowserRouter>
        <Routes>
            <Route path="/turnos" element={<Turnos />}></Route>
        </Routes>
    </BrowserRouter>
}
