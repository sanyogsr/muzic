import {
  Crown,
  Globe2,
  Heart,
  MessageCircle,
  Sparkles,
  Users2,
} from "lucide-react";

export default function FeatureSection() {
  return (
    <div className="py-10 bg-[#08041e] text-white flex flex-col items-center">
      <div className=" inline-flex items-center gap-2 border border-violet-500/20 bg-violet-500/5 text-violet-300 rounded-full px-5 font-medium text-xs py-1.5">
        <Crown className="w-3.5 h-3.5" />
        <span>Premium Features</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text  bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500">
        Everything You Need to Succeed
      </h2>
      <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
        Powerful tools designed to help you create unforgettable streaming
        experiences
      </p>

      <div className=" py-10 px-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: Globe2,
            title: "Global Reach",
            description:
              "Stream to audiences worldwide with ultra-low latency and crystal-clear audio",
          },
          {
            icon: Users2,
            title: "Community Control",
            description:
              "Let your audience vote on upcoming tracks and shape the playlist in real-time",
          },
          {
            icon: Heart,
            title: "Engagement Analytics",
            description:
              "Track listener engagement, popular tracks, and audience growth trends",
          },
          {
            icon: MessageCircle,
            title: "Live Chat",
            description:
              "Foster meaningful connections with live chat, reactions, and custom emotes",
          },
          {
            icon: Crown,
            title: "Creator Tools",
            description:
              "Access advanced streaming tools, custom overlays, and integrations",
          },
          {
            icon: Sparkles,
            title: "AI Enhancement",
            description:
              "Smart features to enhance your stream quality and audience engagement",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="group relative p-1 rounded-xl transition-all duration-300 hover-scale-[1.02]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
            <div className="relative h-full bg-[#0A0A1E] border border-white/10 p-6 rounded-xl overflow-hidden">
              <div className="relative z-10">
                <feature.icon className="h-10 w-10 text-violet-500 mb-4" />
                <h3 className="text-xl  font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-zinc-400">{feature.description}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-violet-500/10 via-transparent to-transparent"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
