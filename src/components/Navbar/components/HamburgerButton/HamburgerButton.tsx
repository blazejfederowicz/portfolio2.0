import { OPEN_MENU } from "@/constants";
import { HamburgerButtonProps } from "./HamburgerButton.interface";

export default function HamburgerButton({isOpen, setIsOpen}: HamburgerButtonProps) {

    return (
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white focus:ring-2 active:text-white focus:ring-white focus:outline-hidden focus:ring-inset"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="sr-only">{OPEN_MENU}</span>
                {isOpen ? (
                <svg className="size-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                ) : (
                <svg className="size-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                )}
            </button>
        </div>
    )
}