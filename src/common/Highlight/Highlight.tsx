export const HighlightStart = () => {
    return (
        <>
            <div data-orientation="horizontal" role="none" className="shrink-0 h-[1px] w-full mt-4 max-w-[100px]  bg-blue-800/60"></div>
            <div data-orientation="horizontal" role="none" className="shrink-0 h-[1px] w-full mt-2 max-w-[50px] bg-blue-800/60"></div>
        </>
    )
}

export const HighlightMiddle = () => {
    return (
        <>
            <div data-orientation="horizontal" role="none" className="shrink-0 h-[1px] w-full mt-4 max-w-[100px] lg:mx-auto bg-blue-300/30"></div>
            <div data-orientation="horizontal" role="none" className="shrink-0 h-[1px] w-full mt-2 max-w-[50px] lg:mx-auto bg-blue-300/30"></div>
        </>
    )
}