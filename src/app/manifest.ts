import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vertical Mouse Guide",
    short_name: "VMG",
    description: "Evidence-led vertical and ergonomic mouse buying guides.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#047857",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
