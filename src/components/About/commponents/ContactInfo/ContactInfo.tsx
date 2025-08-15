import { Reveal } from "@/common/Reveal/Reveal";
import { CONTACT_INFO } from "@/constants";

export default function ContactInfo() {
    return (
        <div className="flex flex-col ms-auto me-auto md:me-0 w-full text-sm sm:text-base sm:w-[20em] mt-0 mb-20 md:my-0 order-2 md:order-1">
            {
                CONTACT_INFO.map((contact,index)=>(
                    <div className={`border-b-1 border-b-gray-300 pb-3 ${index === 0 ? "" : "mt-3"}`} key={index}>
                        <Reveal>
                        <p className=" text-gray-700">
                            <span className="font-bold">{contact.name}</span>
                            {index === 2 ? 
                                (
                                    <a href={`mailto:${contact.value}`} className=" hover:md:ml-4 hover:md:text-blue-950 active:text-blue-950 ease-out duration-150 ">
                                        {contact.value}
                                    </a>
                                ):
                                Array.isArray(contact.value) ?
                                contact.value.join(", ") : contact.value
                            }
                        </p>
                        </Reveal>
                    </div>
                ))
            }
        </div>
    )
}