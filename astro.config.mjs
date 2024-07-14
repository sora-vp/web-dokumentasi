import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Sora Vote Project (ᮞᮧᮛ)",
      customCss: ["./src/style.css"],
      social: {
        github: "https://github.com/sora-vp",
      },
      sidebar: [
        {
          label: "Apa itu sora?",
          link: "perkenalan",
        },
        {
          label: "Konfigurasi Aplikasi",
          items: [
            {
              label: "Topologi jaringan",
              link: "/panduan/topologi-jaringan",
            },
          ],
        },
      ],
    }),
    tailwind(),
  ],
});
