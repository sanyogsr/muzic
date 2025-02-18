import ModernInputButton from "../components/Input-button";
import NowPlaying from "../components/NowPlaying";
import UpcomingVideoList from "../components/UpcomingVideoList";

export default function Dashboard() {
  return (
    <div className="bg-[#08041e] min-h-screen">
      <div className="flex justify-center text-white pt-16 pb-16">
        <div className="flex flex-col justify-center border border-white min-w-[800px] w-full max-w-5xl bg-[#08041e] overflow-hidden">
          {/* yt-link */}
          <div className="flex flex-col">
            <ModernInputButton />
          </div>
          {/* upcoming video */}
          <div className="border border-pink-700">
            <UpcomingVideoList />
          </div>
          {/* Now playing */}
          <div className="bg-[#08041e]">
            <NowPlaying />
          </div>
        </div>
      </div>
    </div>
  );
}
