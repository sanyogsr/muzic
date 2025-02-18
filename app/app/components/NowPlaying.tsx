import { Play } from "lucide-react";

export default function NowPlaying() {
  return (
    <div className="p-5   flex flex-col  gap-5 ">
      <div className="border border-white">
        {" "}
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/GhH1QWY6BDc?loop=1&playlist=GhH1QWY6BDc"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-[500px] object-cover"
        />
      </div>
      <button className="flex gap-1 items-center justify-center transition-all duration-300 active:scale-[1.02] animate-pulse shadow-md  bg-green-600 p-3 border border-black border-1">
        {" "}
        <Play size={20} />
        Play Next
      </button>
    </div>
  );
}
