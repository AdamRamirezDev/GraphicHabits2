import Layaout from "../components/Layaout";


export default function Crear(){


    return (

        <Layaout>
            <div className="w-[95%] h-full border-1 p-5 flex flex-col items-center">
                <h1 className="text-black">Nombre del habito</h1>
                <input 
                    placeholder="Nombre..."
                    className="w-[100%] h-10 border-1 border-neutral-400 text-black p-3  bg-neutral-300 rounded-2xl flex flex justify-around items-center"
                ></input>
                <h1 className="text-black">Aqui ira la barra de colores</h1>
                
            </div>
        </Layaout>

    )

}