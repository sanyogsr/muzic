"use client";
import React, { useState, useEffect } from "react";
import { ThumbsUp, ThumbsDown, Clock } from "lucide-react";

// Define types for our data
type Video = {
  id: string;
  title: string;
  thumbnail: string;
  upvotes: number;
  downvotes: number;
  date: string;
};

const UpcomingVideoList = () => {
  // Mock data for initial videos
  const initialVideos: Video[] = [
    {
      id: "1",
      title: "Advanced Tailwind CSS Techniques",
      thumbnail: "/api/placeholder/640/360",
      upvotes: 0,
      downvotes: 0,
      date: "2025-03-05",
    },
    {
      id: "2",
      title: "Building a Real-time Chat App with Socket.io",
      thumbnail: "/api/placeholder/640/360",
      upvotes: 0,
      downvotes: 0,
      date: "2025-03-10",
    },
    {
      id: "3",
      title: "Mastering TypeScript for React Developers",
      thumbnail: "/api/placeholder/640/360",
      upvotes: 0,
      downvotes: 0,
      date: "2025-03-15",
    },
  ];

  const [videos, setVideos] = useState<Video[]>(initialVideos);
  const [userVotes, setUserVotes] = useState<
    Record<string, "up" | "down" | null>
  >({});
  const [animatingIds, setAnimatingIds] = useState<Record<string, boolean>>({});

  // Load user votes from localStorage on initial render
  useEffect(() => {
    const savedVotes = localStorage.getItem("videoVotes");
    if (savedVotes) {
      try {
        const parsedVotes = JSON.parse(savedVotes);
        setUserVotes(parsedVotes);

        // Update initial videos with saved vote counts
        const updatedVideos = [...initialVideos];
        Object.entries(parsedVotes).forEach(([videoId, voteType]) => {
          const videoIndex = updatedVideos.findIndex((v) => v.id === videoId);
          if (videoIndex !== -1) {
            if (voteType === "up") {
              updatedVideos[videoIndex].upvotes += 1;
            } else if (voteType === "down") {
              updatedVideos[videoIndex].downvotes += 1;
            }
          }
        });
        setVideos(updatedVideos);
      } catch (e) {
        console.error("Failed to parse saved votes:", e);
        localStorage.removeItem("videoVotes");
      }
    }
  }, []);

  // Save user votes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("videoVotes", JSON.stringify(userVotes));
  }, [userVotes]);

  // Sort videos by net votes (upvotes - downvotes)
  useEffect(() => {
    const currentOrder = videos.map((v) => v.id);
    const sortedVideos = [...videos].sort((a, b) => {
      const netVotesA = a.upvotes - a.downvotes;
      const netVotesB = b.upvotes - b.downvotes;
      return netVotesB - netVotesA;
    });

    const newOrder = sortedVideos.map((v) => v.id);

    // Only update if order has changed
    if (JSON.stringify(currentOrder) !== JSON.stringify(newOrder)) {
      // Mark videos that are changing position
      const animating: Record<string, boolean> = {};
      newOrder.forEach((id) => {
        if (currentOrder.indexOf(id) !== newOrder.indexOf(id)) {
          animating[id] = true;
        }
      });
      setAnimatingIds(animating);

      // Set the sorted videos
      setVideos(sortedVideos);

      // Clear animation flags after animation completes
      setTimeout(() => {
        setAnimatingIds({});
      }, 600);
    }
  }, [videos.map((v) => v.upvotes - v.downvotes).join(",")]);

  const handleVote = (videoId: string, voteType: "up" | "down") => {
    // Get current vote for this video
    const currentVote = userVotes[videoId];

    // Update videos based on user's action
    setVideos((prevVideos) =>
      prevVideos.map((video) => {
        if (video.id !== videoId) return video;

        let updatedUpvotes = video.upvotes;
        let updatedDownvotes = video.downvotes;

        // Remove previous vote if exists
        if (currentVote === "up") updatedUpvotes--;
        if (currentVote === "down") updatedDownvotes--;

        // Add new vote if not removing same vote type
        if (currentVote !== voteType) {
          if (voteType === "up") updatedUpvotes++;
          if (voteType === "down") updatedDownvotes++;
        }

        return {
          ...video,
          upvotes: updatedUpvotes,
          downvotes: updatedDownvotes,
        };
      })
    );

    // Update user votes tracking
    setUserVotes((prev) => ({
      ...prev,
      [videoId]: currentVote === voteType ? null : voteType,
    }));
  };

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Upcoming Videos</h2>

      <div className="space-y-6 relative">
        {videos.map((video) => (
          <div
            key={video.id}
            className={`
              bg-violet-950 border border-white p-5 rounded-lg overflow-hidden 
              shadow-md hover:shadow-lg transition-all duration-500
              flex flex-col sm:flex-row relative
              ${animatingIds[video.id] ? "animate-pulse scale-[1.02]" : ""}
            `}
          >
            {/* Thumbnail */}
            <div className="relative sm:w-64 h-48 flex-shrink-0 overflow-hidden rounded">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white px-2 py-1 text-sm flex items-center">
                <Clock size={14} className="mr-1" />
                <span>{formatDate(video.date)}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow justify-between">
              <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 hover:line-clamp-none transition-all duration-300">
                {video.title}
              </h3>

              {/* Voting section */}
              <div className="flex items-center mt-2">
                {/* Upvote button */}
                <button
                  onClick={() => handleVote(video.id, "up")}
                  className={`
                    group flex items-center mr-4 focus:outline-none 
                    transition-all duration-300 ease-in-out transform
                    ${
                      userVotes[video.id] === "up"
                        ? "text-green-400"
                        : "text-gray-400 hover:text-green-400 hover:scale-110"
                    }
                  `}
                  aria-label="Upvote"
                >
                  <ThumbsUp
                    className={`
                      w-5 h-5 transition-all duration-300 ease-in-out
                      ${
                        userVotes[video.id] === "up"
                          ? "scale-110 fill-current"
                          : "group-hover:scale-110"
                      }
                    `}
                  />
                  <span
                    className={`
                    ml-1 text-sm font-medium transition-all duration-300
                    ${
                      userVotes[video.id] === "up"
                        ? "text-green-400"
                        : "text-gray-300"
                    }
                  `}
                  >
                    {video.upvotes}
                  </span>
                </button>

                {/* Downvote button */}
                <button
                  onClick={() => handleVote(video.id, "down")}
                  className={`
                    group flex items-center focus:outline-none 
                    transition-all duration-300 ease-in-out transform
                    ${
                      userVotes[video.id] === "down"
                        ? "text-red-400"
                        : "text-gray-400 hover:text-red-400 hover:scale-110"
                    }
                  `}
                  aria-label="Downvote"
                >
                  <ThumbsDown
                    className={`
                      w-5 h-5 transition-all duration-300 ease-in-out
                      ${
                        userVotes[video.id] === "down"
                          ? "scale-110 fill-current"
                          : "group-hover:scale-110"
                      }
                    `}
                  />
                  <span
                    className={`
                    ml-1 text-sm font-medium transition-all duration-300
                    ${
                      userVotes[video.id] === "down"
                        ? "text-red-400"
                        : "text-gray-300"
                    }
                  `}
                  >
                    {video.downvotes}
                  </span>
                </button>

                {/* Net votes indicator */}
                <div className="ml-auto">
                  <span
                    className={`
                      inline-block rounded-full px-2 py-1 text-xs font-medium
                      transition-all duration-300 ease-in-out
                      ${
                        video.upvotes - video.downvotes > 0
                          ? "bg-green-900/50 text-green-300 border border-green-500/30"
                          : video.upvotes - video.downvotes < 0
                          ? "bg-red-900/50 text-red-300 border border-red-500/30"
                          : "bg-gray-800/50 text-gray-300 border border-gray-600/30"
                      }
                    `}
                  >
                    {video.upvotes - video.downvotes > 0 ? "+" : ""}
                    {video.upvotes - video.downvotes}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingVideoList;
