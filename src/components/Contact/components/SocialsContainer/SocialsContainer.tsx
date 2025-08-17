import { CONTACT_EMAIL, CONTACT_EMAIL_ADDRESS, CONTACT_LOCATION, CONTACT_SOCIAL_LINKS, CONTACT_SOCIALS, CONTACT_TITLE, LOCATION_TEXT } from "@/constants";
import ContactLayout from "../../layout/ContactLayout";

export default function SocialsContainer(){
    return(
        <ContactLayout title={CONTACT_TITLE}>
            <div className="space-y-4 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                    <div className="py-1 px-2 rounded-md bg-indigo-200/10 text-indigo-400 shrink-0 ">
                        <i className="bi bi-geo-alt"></i>
                    </div>
                    <div>
                        <h4 className="font-medium">{LOCATION_TEXT}</h4>
                        <p className="text-white/40">{CONTACT_LOCATION}</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <div className="py-1 px-2 rounded-md bg-indigo-200/10 text-indigo-400 shrink-0">
                    <i className="bi bi-envelope"></i>
                    </div>
                    <div>
                        <h4 className="font-medium">{CONTACT_EMAIL}</h4>
                        <a href={"mailto:"+CONTACT_EMAIL_ADDRESS} className="text-white/40 hover:text-indigo-500 active:text-indigo-500 transition-colors break-all">{CONTACT_EMAIL_ADDRESS}</a>
                    </div>
                </div>
            </div>
            <div className="pt-4 border-t border-border/50">
                <h4 className="font-medium mb-3">{CONTACT_SOCIALS}</h4>
                <div className="flex gap-3">
                {
                CONTACT_SOCIAL_LINKS.map((link, index) => (
                    <a key={"contact-link-"+index} href={link.href} target="_blank" rel="noopener noreferrer" className="py-2 px-3 rounded-full bg-indigo-900/15 hover:bg-indigo-900/30 text-white/40 hover:text-indigo-300 active:text-indigo-300 transition-colors">
                    <i className={link.icon}></i>
                    </a>
                ))
                }
                </div>
            </div>
        </ContactLayout>
    )
}