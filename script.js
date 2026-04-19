// 1. SETTING LOGO & HERO
document.getElementById('nav-logo-img').src = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

// 2. DATA PRODUK (GANTI FOTO DI SINI)
const produk = [
    { nama: "Produk 1", desc: "Deskripsi Produk 1", img: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=400" },
    { nama: "Produk 2", desc: "Deskripsi Produk 2", img: "https://images.unsplash.com/photo-1558494949-ef010958384e?q=80&w=400" },
    // Tambah sampai 10 produk dengan format yang sama
];

const grid = document.getElementById('katalog-produk');
produk.forEach(p => {
    const div = document.createElement('div');
    div.className = 'card';
    div.onclick = () => { document.querySelectorAll('.card').forEach(c=>c.classList.remove('active')); div.classList.add('active'); };
    div.innerHTML = `<img src="${p.img}" class="card-img"><h3>${p.nama}</h3><div class="detail"><p>${p.desc}</p><button>Order</button></div>`;
    grid.appendChild(div);
});

// 3. 5 KETERANGAN LAYANAN
const ket = document.getElementById('keterangan-layanan');
for(let i=1; i<=5; i++) {
    ket.innerHTML += `<div class="step-item"><h3>Keterangan ${i}</h3><p>Penjelasan layanan profesional.</p><img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600" class="step-img"></div>`;
}

// 4. 5 KATALOG FOTO + TEXT
const gal = document.getElementById('katalog-foto-text');
for(let i=1; i<=5; i++) {
    gal.innerHTML += `<div class="card"><img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400" class="card-img"><h3>Katalog ${i}</h3><p>Deskripsi katalog.</p></div>`;
}

// 5. KONTAK BAWAH
document.getElementById('kontak-bawah').innerHTML = `
    <div class="contact-box">
        <img src="https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=800" style="width:100%; border-radius:12px;">
        <p>Telegram : <a href="https://t.me/MoyhazXcodr">click here</a></p>
        <p>WhatsApp : <a href="https://wa.me/628123456789">click here</a></p>
    </div>`;
