import Link from "next/link"
import GithubLogo from "./svg/GithubLogo"
import InstagramLogo from "./svg/InstagramLogo"
import EmailIcon from "./svg/EmailIcon"
import LinkedinLogo from "./svg/LinkedinLogo"

export default function Contact() {
  return (
    <section id="contact" className="contact py-20 px-10 md:py-20 md:px-40 flex flex-col gap-2">
      <div className="flex items-center align-middle gap-2">
        <div className="rounded-full w-2 h-2 bg-primary"></div>
        <h3 className="font-bold tracking-widest uppercase">Contact Me</h3>
      </div>
      <ul className="flex mx-auto mt-10 align-middle gap-12 uppercase tracking-wider">
        <li><Link href="mailto:tomcha.web@gmail.com" target="_blank" className="flex items-center gap-2"><EmailIcon /><span className="hidden md:block">Email</span></Link></li>
        <li><Link href="https://www.github.com/tomchaweb" target="_blank" className="flex items-center gap-2"><GithubLogo size={32} /><span className="hidden md:block">Github</span></Link></li>
        <li><Link href="https://www.linkedin.com/in/thomas-chapman-747936130/" target="_blank" className="flex items-center gap-2"><LinkedinLogo /><span className="hidden md:block">LinkedIN</span></Link></li>
      </ul>
    </section>
  )
}
