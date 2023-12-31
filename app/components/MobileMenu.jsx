import { usePathname, useRouter } from "next/navigation"
import { motion } from "framer-motion";
import { AngelListIcon, GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon, UpworkIcon } from "./Icons"


const CustomLink = ({ href, title, className, toggle }) => {
  const router = useRouter()
  const pathname = usePathname();

  const handelNavigation = () => {
    toggle()
    router.push(href)
  }

return (
  <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handelNavigation}>
    {title}
    <span 
    className={`h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] 
    ease duration-300 ${pathname === href ? "w-full" : "w-0"} dark:bg-dark `}
    >&nbsp;</span>
  </button>
);
}

const MobileMenu = ({ mode, setMode, isOpen, handleClick }) => {
  return (
    <>
   { 
    isOpen ?   
      <motion.div 
        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50
    bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
      <nav className="flex items-center flex-col justify-center">
        <CustomLink toggle={handleClick} href= "/" title= "Home" className= "" />
        <CustomLink toggle={handleClick} href= "/about" title= "About" className= "" />
        <CustomLink toggle={handleClick} href= "/projects" title= "Projects" className= "" />
        {/* <CustomLink toggle={handleClick} href= "/articles" title= "Articles" className= "" /> */}
      </nav>
      
      <nav className="flex items-center justify-center flex-wrap mt-2">
        <motion.a whileHover={{
          y: -2
        }} className="w-6 mr-3 sm:mx-1" whileTap={{scale: 0.9}} href="https://twitter.com/sam_mongare" target="_blank"><TwitterIcon /></motion.a>
        <motion.a whileHover={{
          y: -2
        }} className="w-6 mx-3 sm:mx-1 dark:bg-dark bg-light rounded-full" whileTap={{scale: 0.9}} href="https://github.com/Mosams" target="_blank"><GithubIcon /></motion.a>
        <motion.a whileHover={{
          y: -2
        }} className="w-6 mx-3 sm:mx-1" whileTap={{scale: 0.9}} href="https://www.linkedin.com/in/samwel-mongare/" target="_blank"><LinkedInIcon /></motion.a>
        <motion.a whileHover={{
          y: -2
        }} className="w-6 mx-2 rounded-full" whileTap={{scale: 0.9}} href="https://www.upwork.com/freelancers/~017927a169e62dec08?viewMode=1" target="_blank"><UpworkIcon /></motion.a>
        <motion.a whileHover={{
          y: -2
        }} className="w-6 p-1 ml-3 bg-light/75  rounded-full" whileTap={{scale: 0.9}} href="https://wellfound.com/u/samwel-mongare" target="_blank"><AngelListIcon /></motion.a>

        <button
         onClick={() => setMode(mode === "light" ? "dark" : "light")}
         className={`${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"} ml-3 flex items-center justify-center rounded-full p-1`}
        >
          {
            mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )
          }
        </button>
      </nav>
      </motion.div>
      : null
    }
    </>
  )
}

export default MobileMenu;