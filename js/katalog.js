// =====================================================
// katalog.js — Modul 3: menampilkan katalog dengan DOM
// Praktikum Pemrograman Web 1 · Sasirangan Banua
// =====================================================

// 1. Data katalog: array yang berisi objek-objek produk
const katalog = [
  {
    id: 1,
    nama: "Kain Motif Gigi Haruan",
    kategori: "kain",
    harga: 185000,
    gambar: "img/gigi-haruan.svg",
    deskripsi: "Kain katun 2 meter bermotif zig-zag menyerupai gigi ikan haruan.",
  },
  {
    id: 2,
    nama: "Kain Motif Kambang Kacang",
    kategori: "kain",
    harga: 175000,
    gambar: "img/kambang-kacang.svg",
    deskripsi: "Motif bunga kacang yang melambangkan keakraban dan kerukunan.",
  },
  {
    id: 3,
    nama: "Kain Motif Bayam Raja",
    kategori: "kain",
    harga: 175000,
    gambar: "img/bayam-raja.svg",
    deskripsi: "Motif bayam raja.",
  },
  {
    id: 4,
    nama: "Kain Motif Naga Balimbur",
    kategori: "kain",
    harga: 175000,
    gambar: "img/naga-balimbur.svg",
    deskripsi: "Motif naga balimbur.",
  },
  {
    id: 5,
    nama: "Kain Motif Ombak Sinapur Karang",
    kategori: "kain",
    harga: 175000,
    gambar: "img/ombak-sinapur-karang.svg",
    deskripsi: "Motif ombak sinapur karang.",
  },
  {
    id: 6,
    nama: "Kain Motif Favicon",
    kategori: "kain",
    harga: 175000,
    gambar: "img/favicon.svg",
    deskripsi: "Motif Favicon.",
  },
  {
    id: 7,
    nama: "Selendang Iris Pudak",
    kategori: "aksesoris",
    harga: 120000,
    gambar: "img/iris-pudak.svg",
    deskripsi: "Selendang ringan bermotif irisan daun pudak (pandan).",
  },
  // Contoh produk pakaian agar ada 3 kategori dan 8 item (ganti dengan produk Anda)
  {
    id: 8,
    nama: "Kemeja Bayam Raja",
    kategori: "pakaian",
    harga: 265000,
    gambar: "img/bayam-raja.svg",
    deskripsi: "Kemeja lengan panjang berbahan sasirangan, cocok untuk acara resmi.",
  },
];
// 2. Ambil elemen-elemen HTML yang akan dimanipulasi
const daftarKatalog = document.querySelector("#daftar-katalog");
const inputCari = document.querySelector("#cari");
const tombolFilter = document.querySelectorAll(".tombol-filter");
const infoJumlah = document.querySelector("#info-jumlah");

// 3. Status filter yang sedang aktif
let kategoriAktif = "semua";

// 4. Mengubah angka menjadi format Rupiah, contoh: 185000 -> "Rp 185.000"
function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(angka);

  // 5. Membuat elemen <article> untuk satu produk
function buatKartu(produk) {
  const kartu = document.createElement("article");
  kartu.className = "kartu";

  const gambar = document.createElement("img");
  gambar.src = produk.gambar;
  gambar.alt = produk.nama;
  gambar.width = 600;
  gambar.height = 400;
  gambar.loading = "lazy";

  const isi = document.createElement("div");
  isi.className = "kartu-isi";

  const label = document.createElement("span");
  label.className = "label-kategori";
  label.textContent = produk.kategori;

  const judul = document.createElement("h3");
  judul.textContent = produk.nama;

  const deskripsi = document.createElement("p");
  deskripsi.textContent = produk.deskripsi;

  const harga = document.createElement("p");
  harga.className = "harga";
  harga.textContent = formatRupiah(produk.harga);

  isi.append(label, judul, deskripsi, harga);
  kartu.append(gambar, isi);
  return kartu;
}
// 6. Menampilkan sekumpulan produk ke dalam #daftar-katalog
function tampilkanKatalog(daftarProduk) {
 daftarKatalog.replaceChildren(); // kosongkan isi sebelumnya
 if (daftarProduk.length === 0) {
 const kosong = document.createElement("p");
 kosong.textContent = "Produk tidak ditemukan. Coba kata kunci lain.";
 daftarKatalog.append(kosong);
 }
 daftarProduk.forEach((produk) => {
 daftarKatalog.append(buatKartu(produk));
 });
 infoJumlah.textContent = `Menampilkan ${daftarProduk.length} dari ${katalog.length} produk`;
}
// 10. Tampilkan semua produk ketika halaman pertama kali dibuka
tampilkanKatalog(katalog);
}
