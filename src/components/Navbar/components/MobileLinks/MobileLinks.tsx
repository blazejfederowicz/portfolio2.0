import { Reveal } from "@/common/Reveal/Reveal";
import { NAVBAR_LINKS } from "@/constants";

export default function MobileLinks() {
    return (
        <div className="space-y-1 sm:hidden px-2 pt-2 pb-3">
            {NAVBAR_LINKS.map((link, index) => (
                <a key={`mobile-${index}`} href={link.href} className="block rounded-md px-3 py-2 text-base font-medium text-gray-100 hover:text-white active:text-white">
                    <Reveal>
                        {link.name}
                    </Reveal>
                </a>
            ))}
        </div>
    )
}