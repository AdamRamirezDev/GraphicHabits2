import ButtonMenu from "./ButtonMenu";

type Props = {
    children: React.ReactNode;
}

export default function Layaout({ children }: Props ){

    return (

        <div className="h-screen flex flex-col">
            <div className="w-full h-[85%] border-2">
                {children}
            </div>
            <ButtonMenu></ButtonMenu>
        </div>
    )
}