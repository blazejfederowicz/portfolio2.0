import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
}); 

export const metadata: Metadata = {
  title: "Blazej Federowicz - Portfolio",
  description: "Portfolio of Blazej Federowicz, showcasing projects and experience in web development.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
	<html className="scroll-smooth" lang="en">
	  <body className={`${montserrat.variable} antialiased h-full relative overflow-x-hidden bg-gray-50`}>
		  {children}
	  </body>
	</html>
  )
}