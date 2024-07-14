---
title: Apa itu sora?
description: Sebuah perkenalan singkat mengenai aplikasi ini.
---

ᮞᮧᮛ (Sora) yang berarti suara dalam bahasa sunda adalah sebuah aplikasi yang dapat menyuarakan aspirasi masyarakat untuk memilih kandidat pemimpin yang baru.

Aplikasi ini berbasis Next.js hasil pengembangan progresif karena penggunaan terus-menerus juga umpan balik dari [Majelis Permusyaratan Kelas (MPK)](https://www.instagram.com/mpksman12bekasi) di [SMAN 12 Bekasi](https://www.sman12-bekasi.sch.id/). Oleh karena itu, saat ini sora sudah memasuki versi ke tiga.

Cara kerja aplikasi ini adalah panitia menambahkan data partisipan dan kandidat. Aplikasi admin akan menghasilkan menghasilkan sebuah QR identifier untuk seluruh peserta yang terdaftar. Panitia mengunduh file excel dan menyebarkannya ke seluruh peserta pendaftar. Peserta mengunduh gambar QR pada [web penghasil gambar QR](https://github.com/sora-vp/qrcode-web) masing-masing acara sesuai nama mereka.

Pada hari pemilihan, peserta mengantri untuk melakukan presensi kehadiran dengan menunjukan gambar QR sebagai pengganti tanda tangan kertas. Berikut ini cuplikannya.

<div class="flex justify-center h-[33.5rem]">
<iframe class="w-full" src="https://www.youtube.com/embed/mLrBgKxFMhQ?si=RJZrDSwsRQ94KX_c&amp;clip=UgkxeH5VNIsdbyNO2eftBAst9L1VqzDFgJE7&amp;clipt=EPz1ERjiqRI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Jika sudah melakukan presensi kehadiran, peserta di arahkan panitia untuk melakukan pemilihan. Dengan menunjukkan kembali gambar QR peserta tersebut ke komputer, akan muncul seluruh kandidat sesuai acara tersebut. Peserta akan memilih kandidat sesuai pilihan mereka dengan cara menekan tombol "Pilih". Munculah sebuah dialog konfirmasi sekali lagi dan peserta melanjutkan pilihannya. Akan muncul sebuah informasi bahwa peserta tersebut sudah berhasil memilih dan diperintahkan untuk meninggalkan komputer untuk melakukan cap jari. Berikut ini cuplikannya.

<div class="flex justify-center h-[33.5rem]">
<iframe
src="https://www.youtube.com/embed/qo7I6zHkh4M"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>
</div>

## Fitur-fitur yang tersedia

1. Web admin dengan sistem login RBAC (_Role-based Access Control_) untuk mengelola jalannya pemilihan. Berikut ini rinciannya.

   - Dapat mengelola administrator yang lain.
   - Dapat mengelola kandidat yang maju dalam pemilihan.
   - Terdapat halaman statistik yang menampilkan data hitungan sementara maupun hasil akhir pemilihan.
   - Dapat menambahkan partisipan secara manual juga upload file csv dan menghasilkan kode QR secara otomatis.
   - Export ke file `.json` untuk menghasilkan gambar oleh [web qrcode](https://github.com/sora-vp/qrcode-web).
   - Export ke file `.xlsx` (excel) untuk mendapatkan daftar pemilih tetap.
   - Export ke file `.xlsx` (excel) untuk verifikasi dan audit data akhir hasil pemilihan.
   - Memiliki fitur dark mode yang menyesuaikan preferensi panitia.

2. Terdapat klien untuk melakukan presensi kehadiran dan pemilihan yang berbasis web.
3. Peserta pemilihan harus menggunakan QR Code untuk menggunakan hak suara mereka, QR tersebut didapat dari panitia yang mengirimkan file excel yang berisikan list peserta.
4. Peserta yang ingin memilih terlebih dahulu absen masuk, setelah itu dia bisa memilih.
5. Untuk alasan aksesibilitas, bagi yang tidak bisa menggunakan mouse bisa menggunakan [modul tombol](https://github.com/sora-vp/button-module) yang memudahkan proses pemilihan, pelajari lebih lanjut.

## Rencana jangka panjang

Software ini diniatkan untuk berkembang lebih jauh dan memiliki banyak varian. Saat ini hanya tersedia untuk versi [baseline](https://github.com/sora-vp/baseline) yang sudah memenuhi kebutuhan untuk level organisasi sekolah.

Memiliki ide dan ingin berkontribusi? Silahkan buka diskusi di [halaman diskusi](https://github.com/orgs/sora-vp/discussions/new?category=ideas) repositori baseline dan berikan rincian secara padat dan jelas.
