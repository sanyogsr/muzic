import { Music2 } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-[#08041e] border-white/5 py-12 relative">
      <div className="container mx-auto px-4 md:px-6  ">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link
              href={"#"}
              className="flex items-center gap-2 font-bold text-xl mb-4"
            >
              <Music2 className="h-6 w-6 text-violet-500" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
                muzic
              </span>
            </Link>
            <p className="text-zinc-400 text-sm">
              Transforming the live streaming to more fun and creative with
              community driven experience
            </p>
          </div>
          {[
            {
              title: "Product",
              links: ["Features", "Pricing", "Beta Access", "Changelog"],
            },
            {
              title: "Resources",
              links: ["Documentation", "Help Center", "Blog", "Community"],
            },
            {
              title: "Company",
              links: ["About", "Careers", "Terms", "Privacy"],
            },
          ].map((column, index) => (
            <div key={index}>
              <h4 className="font-semibold text-white mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={"#"}
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className=" mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} muzic. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "Github"].map((social) => (
              <Link
                key={social}
                href={"#"}
                className="text-zinc-400 hover:text-white transition-colors text-sm"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
