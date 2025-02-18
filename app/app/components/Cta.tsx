export default function CTA() {
  return (
    <div className="py-20 relative overflow-hidden bg-[#08041e]">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10 blur-3xl" />
      <div className="container mx-auto  px-4 text-center space-y-8  ">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500">
          Ready to Transform the style of music on live Streams?
        </h2>
        <p className="text-zinc-400 text-lg">
          Join thousands of creators who are streaming music by their fans
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gradient-to-r cursor-pointer  from-violet-600 via-fuchsia-600 rounded-lg py-2 to-cyan-600 hover:from-violet-500 hover:via-fuchsia-500 hover:to-cyan-500 transition-all duration-300 min-w-[200px] text-white shadow-xl shadow-fuchsia-500/20">
            {" "}
            Get Started for free
          </button>
          <button className="border border-violet-500/20 cursor-pointer rounded-lg py-2 hover:bg-violet-500/5 min-w-[200px] text-zinc-300">
            Schedule a Demo
          </button>
        </div>
      </div>
    </div>
  );
}
