import Link from "next/link"

export default function ButtonMenu(){

    return (

        <>
            <footer className="w-[80%] h-[10%] border-2 rounded border-black">
                <Link href="/Configuracion">
                    <button className="w-25 h-20 text-black border-neutral-200 rounded-4xl bg-neutral-300">Ajustes</button>
                </Link>
                
            </footer>
        </>

    )

}