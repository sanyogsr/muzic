import { Play, Sparkles } from "lucide-react";
import Image from "next/image";
import svg from "@/public/globe.svg";
export default function HeroSection() {
  return (
    <div className="  bg-[#08041e] text-white pt-32 pb-20 md:pt-30 md:pb-32 ">
      <div className="relative z-10 text-center max-w-3xl mx-auto space-y-8">
        <div className="inline-flex items-center justify-center rounded-full px-4 py-1.5 mb-4 gap-1.5 text-xs font-medium  border border-violet-500/20 bg-violet-500/5 text-violet-300">
          <Sparkles className="w-3.5 h-3.5" />

          <p>Play your favourite Music on creator's live stream</p>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent  bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 leading-[1.1]">
          Your Music , <br />
          Their Live Stream
        </h1>
        <h4 className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
          Create immersive music experiences where your audience shapes the
          vibe. Connect deeper, stream better, grow faster.
        </h4>
        <div className="flex gap-5 justify-center">
          <button
            className=" py-4 px-5 font-semibold rounded-lg bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 hover:from-violet-500 hover:via-fuchsia-500 hover:to-cyan-500
        min-w-[200px] transition-all duration-300 text-white shadow-xl shadow-fuchsia-500/20 group"
          >
            Start playing
          </button>
          <button className="flex justify-center items-center border border-violet-500/20 hover:bg-violet-500/5 min-w-[200px] text-zinc-300">
            <Play className="mr-2 h-5 w-5" />
            Watch demo
          </button>
        </div>
      </div>
      {/* features preview */}
      <div className="mt-20 p-8 relative">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10 rounded-2xl blur-3xl" />

        <div className="mt-20 p-8 relative">
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10 rounded-2xl blur-3xl pointer-events-none" />

          {/* Video Container */}
          <div className="relative bg-white/5 border  rounded-2xl overflow-hidden ">
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/GhH1QWY6BDc?loop=1&playlist=GhH1QWY6BDc"
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[700px] object-cover"
            />

            {/* Dark Overlay Gradient (Set pointer-events to none) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
