"use client"

import Link from "next/link"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

const h1Variants = {
  offscreen: {
    x: 50,
    opacity: 0
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
}

const h2Variants = {
  offscreen: {
    x: -50,
    opacity: 0
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
}



export default function Hero() {
  return (
    <section id="hero" className="hero h-[90vh] py-10 px-10 md:py-20 md:px-40 flex flex-col items-left md:items-center justify-center gap-4 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] dark:bg-darkgray bg-gray-50 border-muted border-b">
      <motion.div
        variants={h1Variants}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true }}>
        <Badge variant="default" className="max-w-fit">Front-end Developer</Badge>
      </motion.div>
      <motion.h1
        variants={h1Variants}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true }}
        className="scroll-m-20 text-7xl text-left md:text-center font-extrabold tracking-tighter lg:text-8xl dark:text-gray-300">
        Hi, I&apos;m Tom Chapman.
      </motion.h1>
      <motion.p
        variants={h2Variants}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true }}
        className="text-2xl text-left tracking-tight text-muted-foreground">
        Manchester dev that loves bringing code to life.
      </motion.p>
      <motion.div className="flex flex-col items-start md:items-center"
        variants={h2Variants}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true }}>
        <Button className="w-fit rounded-full hover:scale-110 transition-all"><Link href="#contact">Get in Touch</Link></Button>
        <ArrowDown className="mt-10 hidden md:block text-center dark:text-gray-300" />
      </motion.div>
    </section>
  )
}
