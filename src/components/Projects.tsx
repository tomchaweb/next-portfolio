"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Badge } from "./ui/badge"
import Link from "next/link"
import { Button } from "./ui/button"
import { SquareArrowUpRightIcon } from "lucide-react"
import Image from "next/image"

import { motion } from "framer-motion"
import GithubLogo from "./svg/GithubLogo"

const titleVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      delay: 0.2
    }
  }
};

const cardVariants = {
  offscreenLeft: {
    x: -100,
    opacity: 0
  },
  offscreenRight: {
    x: 100,
    opacity: 0
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      delay: 0.2
    }
  }
}

export default function Projects() {
  return (
    <section id="projects" className="projects h-fit py-20 px-10 md:py-20 md:px-40 flex flex-col gap-2 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] dark:bg-darkgray bg-gray-50 border-muted border-b">
      <motion.div
        variants={titleVariants}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true }}>
        <div className="flex items-center align-middle gap-2">
          <div className="rounded-full w-2 h-2 bg-primary"></div>
          <h3 className="font-bold tracking-widest uppercase">Projects</h3>
        </div>
        {/* <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight">
          My Work
        </h2> */}
      </motion.div>
      <div className="project-cards grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-10 mt-10">
        <motion.div
          variants={cardVariants}
          initial={"offscreenLeft"}
          whileInView={"onscreen"}
          viewport={{ once: true }}>
          <Card className="w-auto p-2 flex flex-col items-start justify-between overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl md:text-4xl font-bold tracking-tighter">Modal E-Commerce</CardTitle>
              <CardDescription>A fully functional furniture e-commerce site.</CardDescription>
            </CardHeader>
            <CardContent className="h-full flex flex-col justify-between">
              <Image src="/modalLaptop.png" alt="modal website on laptop" width={600} height={600} className="hidden md:block relative left-36 top-10 bg-[url('/blob.svg')] bg-cover" />
              <Image src="/modalPhone.png" alt="modal website on phone" width={300} height={300} className="block md:hidden relative left-32 top-3 bg-[url('/blob.svg')] bg-cover" />
              <div className="flex items-center gap-2">
                <Button className="w-30 rounded-full hover:scale-110 hover:bg-purple-950 transition-all z-10 bg-modal">
                  <Link href="https://modal-ecommerce-ten.vercel.app/" target="_blank" className="flex items-center gap-2">Live Demo<SquareArrowUpRightIcon /></Link>
                </Button>
                <Button className="w-30 rounded-full hover:scale-110 hover:bg-purple-950 transition-all z-10 bg-modal">
                  <Link href="https://github.com/tomchaweb/ecommerce" target="_blank" className="flex items-center gap-2">Code<GithubLogo size={24} /></Link>
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2 w-fit">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">JS</Badge>
              <Badge variant="secondary">CSS</Badge>
            </CardFooter>
          </Card>
        </motion.div>
        <motion.div
          variants={cardVariants}
          initial={"offscreenRight"}
          whileInView={"onscreen"}
          viewport={{ once: true }}>
          <Card className="w-auto p-2 flex flex-col items-start justify-between overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl md:text-4xl font-bold tracking-tighter">QuizBuzz</CardTitle>
              <CardDescription>A fun little trivia quiz app.</CardDescription>
            </CardHeader>
            <CardContent className="h-full flex flex-col justify-between">
              <Image src="/quizbuzzLaptop.png" alt="quizbuzz website on laptop" width={400} height={400} className="hidden md:block relative left-48 top-20 bg-[url('/blob2.svg')] bg-cover" />
              <Image src="/quizbuzzPhone.png" alt="quizbuzz website on phone" width={300} height={300} className="block md:hidden relative left-32 top-3 bg-[url('/blob2.svg')] bg-cover" />
              <div className="flex items-center gap-2">
                <Button className="w-30 rounded-full hover:scale-110 hover:bg-yellow-800 text-black transition-all z-10 bg-yellow-500">
                  <Link href="https://quizbuzz-rho.vercel.app/" target="_blank" className="flex items-center gap-2">Live Demo<SquareArrowUpRightIcon /></Link>
                </Button>
                <Button className="w-30 rounded-full hover:scale-110 hover:bg-yellow-800 text-black transition-all z-10 bg-yellow-500">
                  <Link href="https://github.com/tomchaweb/quizbuzz" target="_blank" className="flex items-center gap-2">Code<GithubLogo size={24} /></Link>
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2 w-fit">
              <Badge variant="secondary">NextJS</Badge>
              <Badge variant="secondary">TS</Badge>
              <Badge variant="secondary">Tailwind</Badge>
            </CardFooter>
          </Card>
        </motion.div>

      </div>

    </section>
  )
}
