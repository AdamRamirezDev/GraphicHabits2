import Link from "next/link"

export default function ButtonMenu(){

    return (

        <>
            <footer className="w-[95%] h-[12%] m-auto mt-2 flex justify-between border-2 rounded-4xl border-black">
                <Link href="/Grafica">
                    <button className="w-20 h-20 text-black border-neutral-200 rounded-4xl bg-neutral-300 cursor-pointer">Grafica</button>
                </Link>
                <Link href="/Dashboard">
                    <button className="w-20 h-20 text-black border-neutral-200 rounded-4xl bg-neutral-300 cursor-pointer">Habitos</button>
                </Link>
                <Link href="/Dashboard">
                    <button className="w-20 h-20 text-black border-neutral-200 rounded-4xl bg-neutral-300 cursor-pointer">Crear</button>
                </Link>
                <Link href="/Configuracion">
                    <button className="w-20 h-20 text-black border-neutral-200 rounded-4xl bg-neutral-300 cursor-pointer">Ajustes</button>
                </Link>
            </footer>
        </>
    )
}