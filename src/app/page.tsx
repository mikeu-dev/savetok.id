import { Metadata } from "next";
import HomeClient from "./home-client";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tikdrop.my.id";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  title: "Download Video TikTok Tanpa Watermark (HD) - TikDrop",
  description: "Download video TikTok tanpa watermark gratis kualitas HD. Simpan VT, MP4, atau lagu MP3 dengan cepat, aman, dan tanpa biaya berlangganan.",
  keywords: [
    "download video tiktok",
    "download vt tanpa watermark",
    "tiktok downloader indonesia",
    "save tiktok lokal",
    "download fyp tiktok",
    "unduh tiktok HD",
    "tiktok mp4",
    "tiktok mp3",
    "simpan video tiktok",
    "snaptik alternatif",
    "tiktok saver id",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: baseUrl,
    title: "TikDrop - TikTok Downloader No Watermark",
    description: "Download video TikTok tanpa watermark gratis kualitas HD.",
    siteName: "TikDrop",
    images: [
      {
        url: `${baseUrl}/logo.png`,
        alt: "TikDrop Logo",
      },
    ],
  },
};

export default function Home() {
  return <HomeClient />;
}
