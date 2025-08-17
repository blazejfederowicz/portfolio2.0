"use client"
import FeatureComponent from './components/FeatureComponent/FeatureComponent'
import {motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { ImageSlider } from "./components/ImageSlider/ImageSlider"
import { Reveal } from '@/common/Reveal/Reveal'
import { HighlightStart } from '@/common/Highlight/Highlight'
import { COMPONENTS_IDS } from '@/constants'

const Projects=()=>{
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:['start start','end end']
    })

    const bgColor = useTransform(scrollYProgress,[0,1],["#f9fafb", "rgba(0,0,0,0)"])
    const textColor = useTransform(scrollYProgress,[0,0.5,1],['rgb(39, 39, 42)', 'rgb(255, 165, 0)', 'rgb(244, 244, 245)'])
    const descriptionColor = useTransform(scrollYProgress,[0,0.5,1],['rgb(74, 85, 101)', 'rgb(0, 255, 255)', 'rgb(243, 244, 246)'])
    

    return( 
        <motion.div ref={ref} className='' style={{background:bgColor}}>
            <section id={COMPONENTS_IDS.PROJECTS} className="w-full min-h-[150vh] relative  border-t-[1px] border-t-zinc-400 ">
            <div className="absolute bg-gradient-to-r from-gray-50 to-30% to-transparent top-0 left-0 w-full -translate-y-2 h-4"></div>
            <div className="absolute bg-gradient-to-l from-gray-50 to-transparent to-30% top-0 right-0 w-full -translate-y-2 h-4"></div>
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 max-w-[1900px] px-5 sm:px-10 pt-10 md:py-20 bg-gradient-to-b from-gray-50 to-transparent md:px-20 ">
                <div className="w-full flex items-start justify-center flex-col lg:pe-10">
                    <div className="max-w-[30em] md:max-w-[35em] w-full mb-10 md:mb-20">
                        <Reveal>
                            <div className="mb-10">
                                <motion.p className="text-balance text-3xl sm:text-4xl md:text-5xl  tracking-tight" style={{color:textColor}}><span className='font-bold'>Projects</span> | React, Vue, Node.js, Laravel</motion.p>
                                <HighlightStart/>
                            </div>
                        </Reveal>
                        <Reveal>
                            <motion.p className="text-sm sm:text-base lg:text-lg font-medium" style={{color:descriptionColor}}>I have strong experience in <span className='font-bold'>Front-End</span> and <span className='font-bold'>UI Development,</span> with a solid understanding of <span className='font-bold'>web technologies</span> and <span className='font-bold'>frameworks</span>. I’m skilled in creating <span className='font-bold'>responsive</span> and <span className='font-bold'>dynamic</span> websites and applications. On the<span className='font-bold'> Back-End</span>, I have experience with server-side <span className='font-bold'>technologies</span> and frameworks, enabling me to build <span className='font-bold'>flexible</span> and <span className='font-bold'>efficient</span> web solutions.</motion.p>
                        </Reveal>
                    </div>
                </div>
                <div className="relative">
                    <ImageSlider/>
                </div>
            </div>
            <FeatureComponent scroll={scrollYProgress}/>
            </section>
        </motion.div>
        )
}

export default Projects