import Link from "next/link"
import { ModeToggle } from "./ModeToggle"

const Navbar = () => {
  return (
    <nav className="p-2 px-10 md:px-20 fixed w-[100vw] flex gap-6 flex-row items-center justify-between align-middle border-muted border-b drop-shadow-sm dark:bg-black bg-white opacity-95 backdrop-blur-sm z-50">
      <div className="flex items-center gap-2">
        <Link href="/">
          <h1 className="text-3xl font-extrabold text-primary tracking-tight drop-shadow-none">TomCha.</h1>
        </Link>
      </div>
      <ul className="hidden md:flex flex-row justify-between gap-6 items-center uppercase tracking-widest text-sm">
        <li>
          <Link href="#about" className="hover:border-b-2 hover:border-black dark:hover:border-white transition-all">About</Link>
        </li>
        <li>
          <div className="w-1 h-1 rounded-full bg-primary"></div>
        </li>
        <li>
          <Link href="#projects" className="hover:border-b-2 hover:border-black dark:hover:border-white transition-all">Projects</Link>
        </li>
        <li>
          <div className="w-1 h-1 rounded-full bg-primary"></div>
        </li>
        <li>
          <Link href="#contact" className="hover:border-b-2 hover:border-black dark:hover:border-white transition-all">Contact</Link>
        </li>
        <ModeToggle />
      </ul>
      <div className="flex md:hidden">
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar