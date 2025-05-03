import starlight from "@astrojs/starlight";
// @ts-check
import { defineConfig } from "astro/config";

import remarkMermaid from "remark-mermaidjs";

// https://astro.build/config
export default defineConfig({
	markdown: {
		// Applied to .md and .mdx files
		remarkPlugins: [remarkMermaid],
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
						{
							label: "Reference",
							autogenerate: { directory: "reference" },
						},
					],
				},
			],
		}),
	],
});
