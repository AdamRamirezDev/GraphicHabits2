import Layaout from "../components/Layaout";



export default function Configuracion(){

    return (
        <Layaout>
            <div className="w-full h-full flex flex-col p-5 border-1">
                <h1 className="text-black">Apariencia</h1>
                <div className="w-[100%] h-10 border-1 border-neutral-400 bg-neutral-300 rounded-2xl flex flex justify-around items-center">
                    <div>
                        <h1 className="text-black">Tema</h1>
                    </div>
                    <div>
                        <h1 className="text-black">Light - Dark</h1>
                    </div>
                </div>

            </div>
        </Layaout>
        
    )
}