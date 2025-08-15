"use client"
import React, { useCallback, useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import { Reveal } from "@/common/Reveal/Reveal";
import { HighlightMiddle } from "@/common/Highlight/Highlight";

export default function ContactComponent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [title, setTitle] = useState("")
  const [error, setError] = useState(true)
  const [stateMessage, setStateMessage] = useState<string | null>(null);

  const validateForm = useCallback( () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!name.trim()) {
      return 'Name is required';
    }
    if (!email.trim() || !emailRegex.test(email)) {
      return 'Valid email is required';
    }
    if (!title.trim()) {
      return 'Title is required';
    }
    if (!message.trim()) {
      return 'Message is required';
    }
    return null;
  },[name, email, message, title])
  
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    method: (value: string) => void
  ) => {
    return method(e.target.value)
  }

  useEffect(()=>{
    if(!validateForm()){
      setStateMessage(null)
    }
  },[validateForm])

  const sendEmail = (e:React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationError = validateForm();
    if (validationError) {
      setError(true);
      setStateMessage(validationError);
      setIsSubmitting(false);
      return;
    }

    const currentTime = new Date().toISOString();

    // emailjs.sendForm(
    //   import.meta.env.VITE_SERVICE_ID,
    //   import.meta.env.VITE_TEMPLATE_ID, e.target,
    //   import.meta.env.VITE_PUBLIC_KEY,
    //   {
    //     time: currentTime,
    //   }
    // )
    //   .then(
    //     (result) => {
    //       setError(false);
    //       console.log(result);
    //       setName('');
    //       setEmail('');
    //       setTitle('');
    //       setMessage('');
    //       setStateMessage('Message sent!');
    //       setIsSubmitting(false);
    //       setTimeout(() => {
    //         setStateMessage(null);
    //       }, 5000);
    //     },
    //     (error) => {
    //       setError(true);
    //       console.error(error);
    //       setStateMessage('Something went wrong, please try again later');
    //       setIsSubmitting(false);
    //       setTimeout(() => {
    //         setStateMessage(null);
    //       }, 3000);
    //     }
    //   );
    
  };

  return (
    <section id="contact" className="container max-w-xl lg:max-w-5xl px-5 sm:px-6 lg:px-8 mx-auto mb-20 mt-10 md:mt-0 md:mb-32">
      <Reveal custom="overflow-hidden">
        <div className="lg:text-center mb-16 space-y-2">
          <h2 className="text-3xl md:text-5xl text-gray-200"><span className="font-bold">Contact</span> Me</h2>
          <HighlightMiddle/>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full mx-auto">
        <div className="rounded-lg border text-white/80 shadow-sm bg-indigo-900/15 backdrop-blur-sm border-zinc-800/80">
        <Reveal custom="overflow-hidden h-full">
          <div className="p-6 space-y-6">
            <h3 className="text-xl font-medium mb-4">Contact Information</h3>
            <div className="space-y-4 text-sm sm:text-base">
              <div className="flex items-start gap-3">
                <div className="py-1 px-2 rounded-md bg-indigo-200/10 text-indigo-400 shrink-0 ">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-white/40">Pomorskie, Poland</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
              <div className="py-1 px-2 rounded-md bg-indigo-200/10 text-indigo-400 shrink-0">
                <i className="bi bi-envelope"></i>
              </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:blazejfederowicz@gmail.com" className="text-white/40 hover:text-indigo-500 active:text-indigo-500 transition-colors break-all">blazejfederowicz@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-border/50">
              <h4 className="font-medium mb-3">Social Profiles</h4>
              <div className="flex gap-3">
                  <a href="https://github.com/blazejfederowicz" target="_blank" rel="noopener noreferrer" className="py-2 px-3 rounded-full bg-indigo-900/15 hover:bg-indigo-900/30 text-white/40 hover:text-indigo-300 active:text-indigo-300 transition-colors">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/błażej-federowicz-6a25b0320/" target="_blank" rel="noopener noreferrer" className="py-2 px-3 rounded-full bg-indigo-900/15 hover:bg-indigo-900/30 text-white/40 hover:text-indigo-300 active:text-indigo-300 transition-colors">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="mailto:blazejfederowicz@gmail.com:" target="_blank" rel="noopener noreferrer" className="py-2 px-3 rounded-full bg-indigo-900/15 hover:bg-indigo-900/30 text-white/40 hover:text-indigo-300 active:text-indigo-300 transition-colors">
                    <i className="bi bi-envelope"></i>
                  </a>
                </div>
            </div>
          </div>
        </Reveal>
        </div>
        <Reveal custom="overflow-hidden">
          <div className="rounded-lg border text-white/80 shadow-sm bg-indigo-900/15 backdrop-blur-sm border-zinc-800/80">
            <div className="p-6"><h3 className="text-xl font-medium mb-4">Send Me a Message</h3>
              <form onSubmit={sendEmail} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none " htmlFor="name">Name</label>
                  <input className="flex h-10 w-full rounded-md border ring-offset-indigo-800 ring-indigo-700/50 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-white text-white/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-950 focus-visible:ring-offset-2  md:text-sm bg-gray-800/20 border-zinc-800/80 mt-2" id="name" name="name" placeholder="Your name" onChange={(e)=>handleOnChange(e,setName)} value={name}/>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">Email</label>
                  <input type="text" className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium ring-offset-indigo-800 ring-indigo-700/50 file:text-white text-white/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-gray-800/20 border-zinc-800/80 mt-2" id="email" name="email" placeholder="your.email@example.com" onChange={(e)=>handleOnChange(e,setEmail)} value={email}/>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="title">Title</label>
                  <input type="text" className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium ring-offset-indigo-800 ring-indigo-700/50 file:text-white text-white/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-gray-800/20 border-zinc-800/80 mt-2" id="title" name="title" placeholder="Your title" onChange={(e)=>handleOnChange(e,setTitle)} value={title}/>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="message">Message</label>
                  <textarea className="flex w-full rounded-md border px-3 py-2 text-sm ring-offset-background text-white/80 focus-visible:outline-none focus-visible:ring-1 ring-offset-indigo-800 ring-indigo-700/50  focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px] bg-gray-800/20 border-zinc-800/80 mt-2" id="message" name="message" placeholder="Your message" onChange={(e)=>handleOnChange(e,setMessage)} value={message} style={{height: "21px"}}>
                  </textarea>
                </div>
                <button className="inline-flex overflow-hidden items-center justify-center gap-2 cursor-pointer whitespace-nowrap rounded-md text-sm font-medium ring-offset-indigo-900 ring-indigo-900/50 transition-colors focus-visible:outline-none focus-visible:ring-1  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-indigo-950 hover:bg-indigo-900/70 h-10 px-4 py-2 w-full" type="submit" value="Send" disabled={isSubmitting}>
                <span className="flex items-center me-1">Send Message</span>
                {isSubmitting?
                <svg className="spinner" viewBox="0 0 50 50">
                  <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                </svg>:
                  <i className="bi bi-send-fill"></i>
                }
                </button>
                {stateMessage && <p className={`text-sm -mt-3 ${error?' text-red-500':'text-green-400'}`}>{stateMessage}</p>}
              </form>
            </div>
          </div>
        </Reveal>
      </div>
      
    </section>
  )
}
