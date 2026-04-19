// ==========================================
// TEMPAT LU NGATUR PRODUK & CUSTOM FOTO
// ==========================================

const produk = [
    {
        nama: "Script Hazdbail V1",
        deskripsi: "Bot WhatsApp Baileys Anti-Ban.",
        harga: "Rp 150.000",
        // GANTI LINK INI DENGAN FOTO CUSTOM LU (Bisa icon, logo, atau thumbnail)
        foto: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=150"
    },
    {
        nama: "Panel Pterodactyl",
        deskripsi: "Server game premium tanpa lag.",
        harga: "Rp 50.000 / bln",
        // GANTI LINK INI DENGAN FOTO CUSTOM LU
        foto: "https://images.unsplash.com/photo-1558494949-ef010958384e?q=80&w=150"
    },
    {
        nama: "VPS Ubuntu DCloud",
        deskripsi: "Cloud server lokal anti DDoS.",
        harga: "Rp 75.000 / bln",
        // GANTI LINK INI DENGAN FOTO CUSTOM LU
        foto: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=150"
    },
    {
        nama: "Jasa Web UI/UX",
        deskripsi: "Desain custom class modern.",
        harga: "Mulai Rp 200.000",
        // GANTI LINK INI DENGAN FOTO CUSTOM LU
        foto: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=150"
    }
];

// Mesin Pembuat Katalog Otomatis
const wadahKatalog = document.getElementById('katalog-produk');

produk.forEach(item => {
    // Bikin elemen kartu
    const kartu = document.createElement('div');
    kartu.className = 'card';
    
    // Isi dari kartunya
    kartu.innerHTML = `
        <div class="ikon-produk">
            <img src="${item.foto}" alt="${item.nama}">
        </div>
        <div class="info-produk">
            <h3>${item.nama}</h3>
            <p>${item.deskripsi}</p>
            <div class="harga">${item.harga}</div>
        </div>
    `;

    // Pasang kartunya ke web
    wadahKatalog.appendChild(kartu);
});
