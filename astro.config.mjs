import starlight from "@astrojs/starlight";
// @ts-check
import { defineConfig } from "astro/config";

import rehypeMermaid from "rehype-mermaid";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: 'https://sora.rmecha.my.id',
	markdown: {
    	rehypePlugins: [[rehypeMermaid, { strategy: "img-svg" }]],
  	},
	integrations: [
		starlight({
			title: "Sora Vote Project (ᮞᮧᮛ)",
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/withastro/starlight",
				},
			],
			editLink: {
				baseUrl: "https://github.com/sora-vp/web-dokumentasi/edit/main/",
			},
			customCss: ["./src/styles/global.css"],
			sidebar: [
				{
					label: "Apa itu sora (varian baseline)?",
					link: "perkenalan",
				},
				{
					label: "Catatan Penggunaan",
					link: "catatan-penggunaan",
				},
				{
					label: "Konfigurasi dan Penggunaan",
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
											label: "Menyebarkan hak pilih berupa gambar QR menggunakan qrcode-web",
											link: "/panduan/baseline/sebelum-hari-utama/sebar-qr",
										},
									],
								},
								{
									label: "Hari Pemilihan dan Pasca Pemilihan",
									items: [
										{
											label: "Menjalankan Kegiatan Pemilihan pada Hari Utama",
											link: "/panduan/baseline/hari-utama/pemilihan",
										},
										{
											label: "Mengakhiri Kegiatan Pemilihan",
											link: "/panduan/baseline/hari-utama/mengakhiri-pemilihan",
										},
										{
											label: "Pelaporan Hasil Perolehan Suara",
											link: "/panduan/baseline/hari-utama/laporan-perolehan-suara",
										},
									],
								},
							],
						},
					],
				},
			],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
