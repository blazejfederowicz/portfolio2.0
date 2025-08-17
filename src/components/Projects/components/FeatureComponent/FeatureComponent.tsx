import { Reveal } from "@/common/Reveal/Reveal";
import HeroSectionCode from "../../../../common/Code/HeroSectionCode"
import { useTransform, motion, MotionValue } from "motion/react"
import Image from "next/image";
import { ASSET_PATHS } from "@/constants";
import { HighlightMiddle } from "@/common/Highlight/Highlight";

const FeatureComponent = ({scroll}:{scroll:MotionValue<number>})=>{
  const boldTextColor = useTransform(scroll, [0.1, 0.5, 1], ['rgb(3, 7, 18)', 'rgb(255, 165, 0)', 'rgb(249, 250, 251)']);
  const textColor = useTransform(scroll, [0, 0.55, 1], ['#52525b', 'rgb(0, 255, 255)', '#e5e7eb']);
  const bgColor = useTransform(scroll, [0.2, 0.5, 1], ['#fff', '#27272a', '#000']);
  const bgLine = useTransform(scroll, [0, 1], ['rgba(37, 99, 235,0.6)', 'rgba(147, 197, 253,0.4)']);


    return(<>
    <section className="mt-32">
      <div className=" pb-32">
        <div className="mx-auto max-w-xl px-5 lg:max-w-5xl lg:px-8">
          <Reveal custom="overflow-hidden">
            <div className="lg:text-center space-y-2">
              <motion.h2 className="text-3xl md:text-5xl" style={{color: boldTextColor}}><span className="font-bold">Additional</span> Work</motion.h2>
              <HighlightMiddle/>
            </div>
          </Reveal>
          <div className="flex justify-center items-center">
          </div>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2 w-full lg:grid-rows-2">
            <div className="relative lg:row-span-2">
            <Reveal custom="overflow-hidden">
              <motion.div className="absolute inset-px rounded-lg lg:rounded-l-[2rem]" style={{backgroundColor:bgColor}}></motion.div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <motion.p className="mt-2 text-lg font-medium tracking-tight max-lg:text-center" style={{color:boldTextColor}}>Markdown Previewer</motion.p>
                  <motion.p className="mt-2 max-w-lg text-sm/6 max-lg:text-center" style={{color:textColor}}>Markdown previewer that allowes making pages. <br/>Stack:&nbsp;
                    <span className="bg-gradient-to-r from-purple-300 via-slate-500 to-blue-500 bg-clip-text text-sm tracking-tight text-transparent text-animate brightness-125">React JavaScript Bootstrap</span>
                  </motion.p>
                </div>
                <div className="@container relative overflow-y-visible min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute  cursor-pointer h-[500px] duration-300 ease-in-out hover:md:-mt-6 active:-mt-6 inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <a href="https://markdown-landing-page.vercel.app" className="relative aspect-[4/3]" target="_blank">
                      <Image className="size-full object-cover object-top" height={500}
                            width={500} src={ASSET_PATHS.phone} alt="phone"/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-white/5 lg:rounded-l-[2rem]"></div>
              </Reveal>
            </div>
            <div className="relative lg:row-span-2">
              <Reveal>
              <motion.div className="absolute inset-px rounded-lg max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" style={{backgroundColor:bgColor}}></motion.div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <motion.p className="mt-2 text-lg font-medium tracking-tight max-lg:text-center" style={{color:boldTextColor}}>Quote Generator</motion.p>
                  <motion.p className="mt-2 max-w-lg text-sm/6 max-lg:text-center" style={{color:textColor}}>A quote machine is a good example how to generate random quotes. Stack:&nbsp;
                  <span className="bg-gradient-to-r from-purple-300 via-slate-500 to-blue-500 bg-clip-text text-sm tracking-tight text-transparent text-animate brightness-125"> React JavaScript CSS Node.Js</span>
                  </motion.p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <a href="https://quote-machine-rep.vercel.app" target="_blank">
                    <div className="absolute hover:md:-mt-6 hover:md:-ms-3 active:-mt-6 active:-ms-3 duration-300 ease-in-out cursor-pointer top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                          <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">HomeComponent.jsx</div>
                          <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                        </div>
                      </div>
                      <div className="px-6 pt-6 pb-14">
                        <HeroSectionCode/>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-white/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>)
   }
   
   export default FeatureComponent