// ==========================================
// DATA GALERI PRODUK
// ==========================================
// Note: Ganti link "foto" pake URL gambar custom lu
const dataProduk = [
    {
        kategori: "Script",
        nama: "Script Hazdbail V1",
        deskripsi: "Bot WhatsApp otomatis berbasis Baileys, fitur anti-ban & super ringan.",
        harga: "Rp 150.000",
        foto: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=600"
    },
    {
        kategori: "Server",
        nama: "Premium Pterodactyl",
        deskripsi: "Panel hosting game premium tanpa lag untuk komunitas lu.",
        harga: "Rp 50.000 / bln",
        foto: "https://images.unsplash.com/photo-1558494949-ef010958384e?q=80&w=600"
    },
    {
        kategori: "Server",
        nama: "VPS Ubuntu DCloud",
        deskripsi: "Cloud server lokal anti DDoS, setup mudah dan cepat.",
        harga: "Rp 75.000 / bln",
        foto: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600"
    },
    {
        kategori: "Desain",
        nama: "Jasa Web UI Custom",
        deskripsi: "Bikin website jualan lu jadi terang dan profesional kayak gini.",
        harga: "Mulai Rp 200.000",
        foto: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600"
    }
];

const wadahGaleri = document.getElementById('katalog-produk');

// Fungsi nge-render foto ke web
function renderGaleri(filterKategori = 'Semua') {
    wadahGaleri.innerHTML = ''; // Kosongin dulu

    // Saring data berdasarkan tab yang dipencet
    const produkDisaring = filterKategori === 'Semua' 
        ? dataProduk 
        : dataProduk.filter(item => item.kategori === filterKategori);

    produkDisaring.forEach(item => {
        const kartu = document.createElement('div');
        kartu.className = 'card muncul'; // Tambah efek animasi muncul
        
        // HTML Kartu Galeri
        kartu.innerHTML = `
            <div class="card-img-box">
                <img src="${item.foto}" alt="${item.nama}">
            </div>
            <div class="card-body">
                <span class="kategori-label">${item.kategori}</span>
                <h3>${item.nama}</h3>
                <p>${item.deskripsi}</p>
                <div class="card-footer">
                    <div class="harga">${item.harga}</div>
                    <button class="btn-beli">Detail</button>
                </div>
            </div>
        `;
        wadahGaleri.appendChild(kartu);
    });
}

// Fungsi buat tombol Tab Filter
function filterKategori(kategori, elemenTombol) {
    // 1. Ubah warna tombol tab
    const semuaTombol = document.querySelectorAll('.tab-btn');
    semuaTombol.forEach(btn => btn.classList.remove('active'));
    elemenTombol.classList.add('active');

    // 2. Tampilkan galeri yang sesuai
    renderGaleri(kategori);
}

// Jalankan pertama kali saat web dibuka (Munculin 'Semua')
renderGaleri('Semua');
