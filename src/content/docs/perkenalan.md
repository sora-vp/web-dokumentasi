---
title: Apa itu sora?
description: Sebuah perkenalan singkat mengenai aplikasi ini.
---

ᮞᮧᮛ (Sora) yang berarti suara dalam bahasa sunda adalah sebuah aplikasi yang dapat menyuarakan aspirasi masyarakat untuk memilih kandidat pemimpin yang baru.

Aplikasi ini berbasis Next.js hasil pengembangan progresif karena penggunaan terus-menerus juga umpan balik dari [Majelis Permusyaratan Kelas (MPK)](https://www.instagram.com/mpksman12bekasi) di [SMAN 12 Bekasi](https://www.sman12-bekasi.sch.id/). Oleh karena itu, saat ini sora sudah memasuki versi ke tiga.

## Motivasi pengembangan proyek ini

Dalam pengembangannya, protipe dari aplikasi sora adalah [nva13](https://github.com/sekilas13/nva13) yang dikembangkan pada zaman covid, dan saya (Ezra Khairan Permana) masih duduk di bangku [SMP Negeri 13 Bekasi](https://smpn13kotabekasi.sch.id/). Sudah sampai tahap siap pakai, namun karena kondisi pandemi mengakibatkan aplikasi tersebut tidak digunakan, juga secara UI/UX tidak terlalu bagus karena keterbatasan skill saya waktu itu.

Setelah saya diterima dan mengikuti proses belajar mengajar di SMAN 12 Bekasi, saya di ajari pelajaran ekonomi oleh Ibu Sri Sudarsih, SE, M.Pd dan beliau juga pernah menjadi tim kurikulum sebelum zaman pandemi. Pada suatu hari, beliau bercerita tentang penggunaan CBT (_Computer Based Test_) karena kondisi pandemi. Kurang lebih, begini ujarnya,

> "Dulu anak kelas 12 tahun 2020 itu lagi ujian sekolah, tau tau dateng itu covid ke Indonesia. Ibu selaku kurikulum pada saat itu mau tidak mau harus mindahin ujiannya jadi pake hape karena udah menyebar juga di deket sekolaan ini."

> "Nah, karena jamannya udah serba canggih ya kita harus adopsi, jangan mau kita ketinggalan sama negara lain yang apa apa serba teknologi. Sekolah ini jangan mau ketinggalan, masa kita dulu pas covid kita pake tapi sekarang nggak? Itu namanya kemunduran."

Perkataan tersebut membuat saya terpikirkan sesuatu, hal apa yang harus saya lakukan.

Sebagai tambahan konteks, beliau bercerita setelah sekolah melakukan pemilihan ketua osis yang baru, masih menggunakan kertas dan presensi tanda tangan, berikut ini cuplikan videonya.

<div className="space-y-10">
   <div class="flex flex-col justify-center items-center gap-2">
      <video width="420" height="240" controls>
         <source src="/assets/perkenalan/pencoblosan-2022.mp4" type="video/mp4">
      </video>
      <a class="text-xs text-inherit" target="_blank" href="https://www.instagram.com/stories/highlights/17913986090366902/">Link IG Story</a>
   </div>

   <div class="flex flex-col justify-center items-center gap-2">
      <video width="420" height="240" controls>
         <source src="/assets/perkenalan/penghitungan-2022.mp4" type="video/mp4">
      </video>
      <a class="text-xs text-inherit" target="_blank" href="https://www.instagram.com/stories/highlights/17913986090366902/">Link IG Story</a>
   </div>
</div>

Semua proses pemilihan dilakukan dengan cara manual dan kurang efisien. Selain memakan waktu, biaya untuk mencetak dan logistik makanan para panitia juga besar karena panitia perlu konsumsi pada saat pemilihan juga penghitungan.

Setelah pengembangan iteratif, sampailah pada penggunaan sora yang bisa membantu MPK dalam melakukan pemilihan ketua osis. Di bawah ini cuplikan pemilihan ketua osis periode 2024/2025 pada tanggal 16 Oktober 2023, waktu itu pemilihan di tutup pada pukul 1 siang. Pada waktu itu juga, pada saat itu juga bisa langsung dilihat pemenangnya.

<div className="space-y-10">
   <div class="flex flex-col justify-center items-center gap-2">
      <video width="420" height="240" controls>
         <source src="/assets/perkenalan/pencoblosan-2024.mp4" type="video/mp4">
      </video>
      <a class="text-xs text-inherit" target="_blank" href="https://www.instagram.com/stories/highlights/17899451963891635/">Link IG Story</a>
   </div>

   <div class="flex flex-col justify-center items-center gap-2">
<img src="/assets/perkenalan/hasil-di-hari-sama.png" alt="Gambar statistik pemilihan, hasil akhir di hari yang sama" />
<a class="text-xs text-inherit text-center" target="_blank" href="https://www.instagram.com/p/CyscHhbyRLP/?img_index=2">Link Post IG</a>
   </div>
</div>

## Bagaimana cara kerjanya?

Terdapat 13 komputer yang sudah di atur untuk menjalankan sora. Satu komputer sebagai server, 10 sebagai komputer pemilih, dan 2 sebagai komputer absen.

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

Software ini diniatkan untuk berkembang lebih jauh dan memiliki banyak varian. Saat ini hanya tersedia untuk versi [baseline](https://github.com/sora-vp/baseline) yang sudah memenuhi kebutuhan untuk level organisasi saja.

Memiliki ide dan ingin berkontribusi? Silahkan buka diskusi di [halaman diskusi](https://github.com/orgs/sora-vp/discussions/new?category=ideas) repositori baseline dan berikan rincian secara padat dan jelas.
