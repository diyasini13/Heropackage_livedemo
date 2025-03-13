export interface ButtonInterface {
    text: string,
    link?: string,
    clickAction: () => void
}

export function BasicButton(props: ButtonInterface) {
    return (
        // <>
        //     <button className='bg-amber-300 border-1 border-gray-400 rounded-full'>{props.text}</button>
        // </>
        <button className="w-32 h-10 bg-transparent text-blue-500 font-semibold px-4 border border-gray-300 hover:bg-blue-100 hover:border-blue-500 rounded-full cursor-pointer"
            onClick={() => props.clickAction()}>
            {props.text}

        </button>

    )
}

