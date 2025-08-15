"use client"
import React,{ useEffect, useRef, useState } from "react";
import {motion, useMotionValue} from 'motion/react';
import { Reveal } from "@/common/Reveal/Reveal";
import { ASSET_PATHS } from "@/constants";

const DRAG_BUFFER = 50

export const ImageSlider =()=>{
    const [positionIndexes, setPositionIndexes]= useState(0);
    const [position, setPosition] = useState<string[]>([])
    const [dragging, setDragging] = useState(false);
    const [translateX, setTranslateX] = useState('0px')
    const [windowSize, setWindowSize] = useState(0);
    const [delay, setDelay] = useState(false)
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLDivElement | null>(null);
    const dragX = useMotionValue(0);

    const handleClick = (i:number)=>{
        setPositionIndexes(i)
    }
    
    const handleDragStart= ()=>{
        setDragging(true)
    }

    const handleDragEnd= ()=>{
        setDragging(false)
        const x = dragX.get()

        if(x <= -DRAG_BUFFER && positionIndexes< images.length-1){
            setPositionIndexes(prev=> prev+1)
        }else if(x>=DRAG_BUFFER && positionIndexes>0){
            setPositionIndexes(prev=> prev-1)
        }
    }

    const images=[
        {
            img:ASSET_PATHS.image1, 
            href:'https://the-calm-corner.onrender.com/',
            title:"The Calm Corner",
            stack:"Bootstrap Node.Js Express.Js JavaScript JQuery EJS",
            desc:"A blogging platform that allows users to create and share posts. It offers various design options, a preview feature before publishing, and the ability to edit or delete posts as needed."
        },
        {
            img:ASSET_PATHS.image2,
            href:'https://github.com/blazejfederowicz/ex.2_ONX_IT',
            title:'Library',
            stack:'Vue.Js Laravel PHP JavaScript MySQL Bootstrap',
            desc:"A basic book library application demonstrating CRUD operations, powered by a Laravel backend."
        },
        {
            img:ASSET_PATHS.image3,
            href:'https://github.com/blazejfederowicz/ex.1_ONX_IT',
            title:'URL Shortener',
            stack:'Vue.Js Laravel PHP JavaScript MySql Tailwind ',
            desc:"Upon submitting a URL, the front end sends the data to the backend and receives a shortened URL in response."
        }
    ]

    useEffect(()=>{
        const positions = ()=>{
            if(positionIndexes===1){
                setPosition(['left','center','right'])
            } else if(positionIndexes ===2){
                setPosition(['left1','left','center'])
            } else{
                setPosition(['center','right','right1'])
            }
        }
        positions()
    },[positionIndexes])

    useEffect(()=>{
        const handleResize = ()=>{
            setWindowSize(window.innerWidth)
        }

        window.addEventListener('resize',handleResize)

        return()=>{
         window.removeEventListener('resize', handleResize)
        }
    },[])

    useEffect(()=>{
        const carouselWidth = carouselRef.current?.offsetWidth || windowSize;
        const imageWidth = imageRef.current?.offsetWidth || carouselWidth / images.length;

        const newTranslateX =
            windowSize < 640
            ? `-${positionIndexes}00%`
            : `${positionIndexes===1?(carouselWidth / 2) - (imageWidth / 2):positionIndexes===0?0:(carouselWidth ) - (imageWidth)}px`;

            setTranslateX(newTranslateX);

    },[windowSize, positionIndexes, images.length])

    const variants = {
        center: {x:0,scale:1, zIndex:  10, cursor:'', filter:'none'},
        right: {x:"98%",scale:0.9, zIndex: 0, cursor:'inherit',filter: "brightness(50%)"},
        right1: {x:"186%",scale:0.8, zIndex: 0, cursor:'inherit',filter: "brightness(30%)"},
        left1: {x:"-186%",scale:0.8, zIndex: 0, cursor:'inherit',filter: "brightness(30%)"},
        left: {x:"-98%",scale:0.9, zIndex: 0, cursor:'inherit',filter: "brightness(50%)"},
    }

    return(
        <div ref={carouselRef} className=" w-full flex flex-col items-center relative overflow-hidden min-[1630px]:overflow-visible">
            <motion.div 
                className="relative w-full h-[20em] md:h-[30em] cursor-grab active:cursor-grabbing flex items-start justify-start sm:mb-10 md:mb-20"
                drag="x"
                dragConstraints={{left:0,right:0}}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                style={{
                    x:dragX
                }}
                animate={{translateX:translateX}}
                transition={{
                    type:'spring',
                    mass:3,
                    stiffness:400,
                    damping:50,
                }}
            >
           { images.map((e,i)=>(
                <motion.div
                    key={i}
                    ref={i === positionIndexes?imageRef:null}
                    onClick={()=>handleClick(i)}
                    style={{background:`url(${e.img})`,backgroundPosition:windowSize<640?'50% 35%':'50% 0%',backgroundSize:"cover"}}
                    variants={windowSize>639 ? variants: {}}
                    initial="center"
                    animate={windowSize<640?{scale:0.90}:position[i]}
                    className="rounded-xl group sm:absolute aspect-video sm:aspect-auto shrink-0 sm:shrink w-full sm:w-[15em] md:w-[20em] h-[20em] md:h-[30em] active:cursor-grabbing"
                    transition={{duration:0.5}}
                >
                <a 
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={()=>setDelay(true)}
                    onMouseLeave={()=>setDelay(false)} 
                    className={`w-full h-full overflow-hidden duration-500 ease-in-out bg-gradient-to-t rounded-xl from-transparent to-70% to-black scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 justify-center flex-col p-5 md:p-10 backdrop-blur-xs ${position[i]==='center' && !dragging?'flex':'hidden'}`}
                    >
                    <span className={`group-hover:text-white group-active:text-white text-transparent ${delay?'delay-0 duration-200':'delay-300 duration-500'}  font-bold mb-1 text-base md:text-lg`}>{e.title}</span>
                    <span className={`group-hover:opacity-100 group-active:opacity-100 opacity-0 bg-gradient-to-r from-purple-300 via-slate-500 to-blue-500 bg-clip-text text-xs md:text-sm tracking-tight text-transparent mb-2 transition-opacity ${delay?'delay-0 duration-200':'delay-500 duration-500'}`}>{e.stack}</span>
                    <span className={`group-hover:text-blue-200 group-active:text-blue-200 text-transparent ${!delay?'delay-400 duration-500':'delay-0 duration-200'} text-sm md:text-base`}>{e.desc}</span>
                </a>
                <div className="pointer-events-none absolute inset-px rounded-xl ring-1 shadow-sm ring-black/5"></div>
                </motion.div>
           ))}
           </motion.div>
           <Reveal>
            {windowSize<640 &&(
                <p className="mb-10 text-indigo-500 text-sm ">Hold to see the description</p>
            )}
           <div className="mx-auto w-fit flex gap-2 p-1">
            {
                images.map((e,i)=>(
                    
                        <div key={i} className="w-4 h-4 bg-neutral-500 rounded-full">
                            <div onClick={()=> handleClick(i)} className={`h-full w-full rounded-full ${positionIndexes===i?' bg-indigo-500  scale-105':'cursor-pointer'}`}></div>
                        </div>
                    
                ))
            }
           </div>
           </Reveal>
        </div>
    )
}
