import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

import rehypeMermaid from "rehype-mermaid";

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
          label: "Instalasi dan Konfigurasi",
          items: [
            {
              label: "Varian baseline",
              items: [
                {
                  label: "Setup server / web admin",
                  items: [
                    {
                      label: "Prasyarat instalasi",
                      link: "/panduan/baseline/prasyarat",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    tailwind(),
  ],
  markdown: {
    rehypePlugins: [[rehypeMermaid, { strategy: "img-svg", dark: true }]],
  },
});
