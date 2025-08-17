import { InputProps } from "./Input.interface";

export default function Input(props:InputProps){
    const {id, label, istextarea, error} = props;

    return (
        <div className="space-y-2">
            <label className="text-sm font-medium leading-none " htmlFor={id}>{label}</label>
            {istextarea ?
                <textarea className="flex w-full rounded-md border px-3 py-2 text-sm ring-offset-background text-white/80 focus-visible:outline-none focus-visible:ring-1 ring-offset-indigo-800 ring-indigo-700/50  focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px] bg-gray-800/20 border-zinc-800/80 mt-2" id={id} {...props}/> 
                :
                <input className="flex h-10 w-full rounded-md border ring-offset-indigo-800 ring-indigo-700/50 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-white text-white/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-950 focus-visible:ring-offset-2  md:text-sm bg-gray-800/20 border-zinc-800/80 mt-2" id={id} {...props}/>
            }
            {!!error && <small className="text-red-500 md:col-span-2">{error}</small>}
        </div>
    )
}