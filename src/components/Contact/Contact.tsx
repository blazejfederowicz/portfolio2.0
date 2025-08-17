"use client"
import React, { useCallback, useEffect, useState } from "react";
import { Reveal } from "@/common/Reveal/Reveal";
import { HighlightMiddle } from "@/common/Highlight/Highlight";
import { COMPONENTS_IDS, CONTACT_TEXT } from "@/constants";
import FormContainer from "./components/FormContainer/FormContainer";
import SocialsContainer from "./components/SocialsContainer/SocialsContainer";

export default function Contact() {
  return (
    <section id={COMPONENTS_IDS.CONTACT} className="container max-w-xl lg:max-w-5xl px-5 sm:px-6 lg:px-8 mx-auto mb-20 mt-10 md:mt-0 md:mb-32">
      <Reveal custom="overflow-hidden">
        <div className="lg:text-center mb-16 space-y-2">
          <h2 className="text-3xl md:text-5xl text-gray-200">{CONTACT_TEXT}</h2>
          <HighlightMiddle/>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full mx-auto">
        <SocialsContainer/>
        <FormContainer/>
      </div>
      
    </section>
  )
}
