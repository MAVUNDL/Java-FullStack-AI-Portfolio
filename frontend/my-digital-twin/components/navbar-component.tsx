import Image from "next/image";

export default function NavBarComponent(){
    return (
        <div className="relative flex w-[700px] h-[52px] border border-white/20 bg-white/5 backdrop-blur-mdjustify-center justify-center items-center rounded-full">
            <nav className="flex items-center gap-2">
                <a href="/about" className="ounded-full px-4 py-2 text-sm text-white/80 transition-all hover:bg-white/10 hover:text-white rounded-full">About</a>
                <a href="/projects" className="ounded-full px-4 py-2 text-sm text-white/80 transition-all hover:bg-white/10 hover:text-white rounded-full">Projects</a>
                <a href="/upskilling" className="ounded-full px-4 py-2 text-sm text-white/80 transition-all hover:bg-white/10 hover:text-white rounded-full">Upskilling</a>
            </nav>
        </div>
    )
}