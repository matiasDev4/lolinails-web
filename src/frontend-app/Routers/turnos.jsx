import  { HeaderApp }  from '../components/HeaderApp'
import  { FormApp }  from '../components/FormApp'


export const Turnos = () =>{
    return <>
        <div className='bg-imageTurnos h-screen py-[5%] bg-cover backdrop-blur-sm'>
            <HeaderApp />
            <FormApp />
        </div>
    </>
}