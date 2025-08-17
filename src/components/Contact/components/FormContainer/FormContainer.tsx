import { ACTION_TYPES, CONTACT_FORM, CONTACT_MESSAGE, CONTACT_SEND } from "@/constants";
import ContactLayout from "../../layout/ContactLayout";
import Input from "@/common/Input/Input";
import { useReducer } from "react";
import { DEFAULT_STATE, INITIAL_VALUE, reducer } from "../../reducer";
import { State } from "../../../../types/Contact.interface";
import { handleErrors } from "@/lib/getFormHelpers";
import emailService from "@/lib/emailService";


export default function FormContainer() {
    const [state, dispatch] = useReducer(reducer, INITIAL_VALUE)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const {name, value} = e.target;
        dispatch({type:ACTION_TYPES.INPUT_CHANGE, payload:{name:name as keyof State, value}})
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        
        dispatch({type: ACTION_TYPES.SET_PENDING})
        const errors = handleErrors({
            name: state.name,
            email: state.email,
            title: state.title,
            message: state.message
        })

        if(Object.keys(errors).length > 0){
            dispatch({type:ACTION_TYPES.SET_ERROR, payload: errors as State['error']})
            return
        }

        emailService(e.target as HTMLFormElement, dispatch)
    }

    return (
        <ContactLayout title={CONTACT_MESSAGE}>
            <form onSubmit={handleSubmit} className="space-y-4">
                {
                    CONTACT_FORM.map((field, index) => (
                    <Input key={`contact-form`+index} id={field.attr} name={field.attr} placeholder={field.placeholder} label={field.label} istextarea={index === CONTACT_FORM.length-1} value={state[field.attr as keyof typeof DEFAULT_STATE]} onChange={handleChange} error={state.error[field.attr as keyof typeof state.error]}/>
                    ))
                }
                <button className="inline-flex overflow-hidden items-center justify-center gap-2 cursor-pointer whitespace-nowrap rounded-md text-sm font-medium ring-offset-indigo-900 ring-indigo-900/50 transition-colors focus-visible:outline-none focus-visible:ring-1  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-indigo-950 hover:bg-indigo-900/70 h-10 px-4 py-2 w-full" type="submit" value="Send" disabled={state.loading}>
                <span className="flex items-center me-1">{CONTACT_SEND}</span>
                {state.loading?
                <svg className="spinner" viewBox="0 0 50 50">
                    <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                </svg>:
                    <i className="bi bi-send-fill"></i>
                }
                </button>
                {
                    !!state.fullfield ? 
                    <p className="text-sm -mt-3 text-green-400">{state.fullfield}</p>
                    :
                    <p className="text-sm -mt-3 text-red-500">{state.rejected}</p>
                }
            </form>
        </ContactLayout>
    )
}