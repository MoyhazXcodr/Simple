// DATA TOKO
const DATA = {
    desc: "Selamat datang di Moyhaz Store. Kami menyediakan layanan digital premium, mulai dari script bot WhatsApp otomatis berbasis Baileys, setup panel server Pterodactyl, hingga sewa VPS.",
    products: [
        { name: "Script Bot (Hazdbail)", price: "Rp 150.000", img: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=400" },
        { name: "Premium Panel Pterodactyl", price: "Rp 50.000", img: "https://images.unsplash.com/photo-1558494949-ef010958384e?q=80&w=400" },
        { name: "Setup VPS DCloud", price: "Rp 75.000", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400" },
        { name: "UI Web Custom", price: "Rp 200.000", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400" }
    ],
    kontak: {
        wa: "628xxx",
        waGroup: "Link Group WA",
        tele: "@MoyhazXcodr",
        teleCh: "Link Channel Tele"
    }
};

// HTML UNTUK MASING-MASING TAB
const tabHTML = {
    home: `
        <div class="panel text-center max-w-3xl mx-auto">
            <h2>Tentang Kami</h2>
            <p style="color: var(--text-muted); line-height: 1.6;">${DATA.desc}</p>
            <div style="display: flex; justify-content: space-around; margin-top: 30px; border-top: 1px solid var(--border); padding-top: 20px;">
                <div><h3 style="color: var(--primary); margin:0; font-size: 24px;">100%</h3><span style="font-size:12px; color:var(--text-muted);">Aman</span></div>
                <div><h3 style="color: var(--primary); margin:0; font-size: 24px;">24/7</h3><span style="font-size:12px; color:var(--text-muted);">Support</span></div>
                <div><h3 style="color: var(--primary); margin:0; font-size: 24px;">Fast</h3><span style="font-size:12px; color:var(--text-muted);">Respon</span></div>
            </div>
        </div>
    `,
    product: `
        <div class="grid">
            ${DATA.products.map(p => `
                <div class="card-produk">
                    <div class="img-box"><img src="${p.img}" alt="${p.name}"></div>
                    <div class="card-info">
                        <div>
                            <h3>${p.name}</h3>
                            <p class="harga">${p.price}</p>
                        </div>
                        <button class="btn-beli">Beli Sekarang</button>
                    </div>
                </div>
            `).join('')}
        </div>
    `,
    info: `
        <div class="kontak-grid">
            <div class="panel">
                <h3 style="color: #10b981;">WhatsApp Admin</h3>
                <ul class="list-info">
                    <li><span style="color: var(--text-muted);">Nomor</span> <strong>${DATA.kontak.wa}</strong></li>
                    <li><span style="color: var(--text-muted);">Group</span> <span>${DATA.kontak.waGroup}</span></li>
                </ul>
            </div>
            <div class="panel">
                <h3 style="color: #3b82f6;">Telegram Admin</h3>
                <ul class="list-info">
                    <li><span style="color: var(--text-muted);">Username</span> <strong>${DATA.kontak.tele}</strong></li>
                    <li><span style="color: var(--text-muted);">Channel</span> <span>${DATA.kontak.teleCh}</span></li>
                </ul>
            </div>
        </div>
    `
};

// FUNGSI GANTI TAB
function switchTab(tabId) {
    // 1. Ganti warna tombol navbar
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // 2. Ganti isi konten dengan animasi
    const contentArea = document.getElementById('app-content');
    contentArea.classList.remove('animasi-masuk');
    
    // Trik biar animasi ke-reset
    void contentArea.offsetWidth; 
    
    contentArea.innerHTML = tabHTML[tabId];
    contentArea.classList.add('animasi-masuk');
}

// Buka tab home pertama kali jalan
document.getElementById('app-content').innerHTML = tabHTML['home'];
