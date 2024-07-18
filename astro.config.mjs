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
      editLink: {
        baseUrl: "https://github.com/sora-vp/web-dokumentasi/edit/main/",
      },
      defaultLocale: "id",
      locales: {
        id: {
          label: "Bahasa Indonesia",
        },
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
                  label: "Setup server",
                  items: [
                    {
                      label: "Prasyarat instalasi",
                      link: "/panduan/baseline/web-admin/prasyarat",
                    },
                    {
                      label: "Konfigurasi docker",
                      link: "/panduan/baseline/web-admin/konfigurasi-docker",
                    },
                  ],
                },
                {
                  label: "Menghubungkan Server dengan Komputer Klien",
                  items: [
                    {
                      label:
                        "Topologi Jaringan, Alat yang diperlukan, dan Praktik Terbaik",
                      link: "/panduan/baseline/konektivitas/topologi-alat-praktik",
                    },
                    {
                      label: "Tunneling ke klien menggunakan SSH/PuTTY",
                      link: "/panduan/baseline/konektivitas/tunnel",
                    },
                  ],
                },
                {
                  label: "Konfigurasi data sebelum hari pemilihan",
                  items: [
                    {
                      label: "Registrasi panitia sebagai administrator",
                      link: "/panduan/baseline/sebelum-hari-utama/registrasi-admin",
                    },
                    {
                      label:
                        "Menambahkan data kandidat dan seluruh pemilih tetap",
                      link: "/panduan/baseline/sebelum-hari-utama/registrasi-kandidat-partisipan",
                    },
                    {
                      label: "Menyebarkan gambar QR menggunakan qrcode-web",
                      link: "/panduan/baseline/sebelum-hari-utama/sebar-qr",
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
