"use client"

import CSSLogo from "./svg/CSSLogo";
import HTMLogo from "./svg/HTMLogo";
import JSLogo from "./svg/JSLogo";
import NextLogo from "./svg/NextLogo";
import ReactLogo from "./svg/ReactLogo";
import TailwindLogo from "./svg/TailwindLogo";
import TSLogo from "./svg/TSLogo";

import { motion } from "framer-motion";

const textVariants = {
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
      duration: 0.8
    }
  }
};

const logoVariants = {
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
      staggerChildren: 0.2,
    }
  }
}

export default function About() {
  return (
    <section id="about" className="about w-fit md:h-[100vh] py-20 px-20 md:py-20 md:px-40 flex flex-col gap-6 border-muted border-b">
      <motion.div
        variants={textVariants}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true }}
        className="about-text flex flex-col gap-2">
        <div className="flex items-center align-middle gap-2">
          <div className="rounded-full w-2 h-2 bg-primary"></div>
          <h3 className="font-bold tracking-widest uppercase">About me</h3>
        </div>
        <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight">
          Hello there!
        </h2>
        <p className="text-xl leading-7 [&:not(:first-child)]:mt-4 mb-4">
          Hello there, I&apos;m Tom, a passionate front-end developer from Manchester, UK. I first discovered my interest in web development during a game development course at university, and it grew from there. There&apos;s something magical about seeing code you&apos;ve written come to life as a beautiful design.
        </p>
      </motion.div>
      <motion.div className="mx-auto grid grid-cols-4 md:flex place-items-center gap-12"
        variants={logoVariants}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true }}>
        <motion.div variants={logoVariants} whileHover={{ scale: 1.2, rotate: -10 }} className="flex flex-col gap-2 justify-center items-center">
          <HTMLogo />
          <span>HTML</span>
        </motion.div>
        <motion.div variants={logoVariants} whileHover={{ scale: 1.2, rotate: -10 }} className="flex flex-col gap-2 justify-center items-center">
          <CSSLogo />
          <span>CSS</span>
        </motion.div>
        <motion.div variants={logoVariants} whileHover={{ scale: 1.2, rotate: -10 }} className="flex flex-col gap-2 justify-center items-center">
          <JSLogo />
          <span>JavaScript</span>
        </motion.div>
        <motion.div variants={logoVariants} whileHover={{ scale: 1.2, rotate: -10 }} className="flex flex-col gap-2 justify-center items-center">
          <TSLogo />
          <span>TypeScript</span>
        </motion.div>
        <motion.div variants={logoVariants} whileHover={{ scale: 1.2, rotate: -10 }} className="flex flex-col gap-2 justify-center items-center">
          <ReactLogo />
          <span>React</span>
        </motion.div>
        <motion.div variants={logoVariants} whileHover={{ scale: 1.2, rotate: -10 }} className="flex flex-col gap-2 justify-center items-center">
          <NextLogo />
          <span>NextJS</span>
        </motion.div>
        <motion.div variants={logoVariants} whileHover={{ scale: 1.2, rotate: -10 }} className="flex flex-col gap-2 justify-center items-center">
          <TailwindLogo />
          <span>Tailwind</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
