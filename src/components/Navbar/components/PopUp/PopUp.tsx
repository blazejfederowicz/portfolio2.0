import { Reveal } from "@/common/Reveal/Reveal";
import { FIRST_NAME, OPEN_USER, SOCIAL_LINKS } from "@/constants";
import useNavbar from "@/customHooks/useNavbar/useNavbar";

export default function PopUp(){
    const { userMenuOpen, setUserMenuOpen, popupRef } = useNavbar();

    return(
        <div ref={popupRef} className="relative ml-3">
            <div className="ms-2">
                <button className="relative rounded-full cursor-pointer p-1 text-gray-300 active:text-white hover:text-white duration-100 ease-in-out focus:outline-hidden " onClick={() => setUserMenuOpen(!userMenuOpen)}>
                    <Reveal>
                        <span className="sr-only">{OPEN_USER}</span>
                        <i className="bi bi-three-dots text-lg"></i>
                    </Reveal>
                </button>
            </div>
            <div  className={`transition-opacity duration-200 ease-in ${userMenuOpen?'opacity-100 pointer-events-auto':'opacity-0 pointer-events-none'} absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white pt-1 pb-2 ring-1 shadow-lg ring-black/5 focus:outline-hidden`}role="menu" aria-orientation="vertical" id="user-menu" aria-labelledby="user-menu-button" tabIndex={-1}>
            {SOCIAL_LINKS.map((link, index) => (
                <a key={`social-${index}`} href={link.href} target="_blank" className="flex justify-between relative group mx-4 py-1 my-1 text-sm  text-gray-700 hover:text-blue-950 active:text-blue-900" role="menuitem" tabIndex={-1} id="user-menu-item-0">
                    <span className="absolute -z-10"><i className={link.icon}></i> {FIRST_NAME}</span>
                    <span className="group-hover:ml-16 group-active:ms-16 ms-4 me-2 duration-150 ease-in-out bg-white">
                    <span className="opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity delay-75 duration-300 ease-out">/</span> {link.name}
                    </span>
                    <i className="bi bi-box-arrow-up-right"></i>
                </a>
            ))}
        </div>
    </div>
    )
}