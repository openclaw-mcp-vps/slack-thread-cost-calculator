import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slack Thread Cost Calculator",
  description: "Calculate the real dollar cost of Slack thread discussions based on participant salaries and time spent."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6750d485-db45-4300-9452-a631a9a6bf73"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
