// 1. DATA 10 PRODUK (Ganti link masing-masing)
const produk = [
    { nama: "SC PUSHKONTAK V1", desc: "Node 20+\nSimple\nNo Spam\nOnly Pushkontak", img: "https://upld.zone.id/uploads/cmi72diq/test.webp" },
    { nama: "Produk 2", desc: "Detail 2", img: "LINK_FOTO_PRODUK_2" },
    { nama: "Produk 3", desc: "Detail 3", img: "LINK_FOTO_PRODUK_3" },
    { nama: "Produk 4", desc: "Detail 4", img: "LINK_FOTO_PRODUK_4" },
    { nama: "Produk 5", desc: "Detail 5", img: "LINK_FOTO_PRODUK_5" },
    { nama: "Produk 6", desc: "Detail 6", img: "LINK_FOTO_PRODUK_6" },
    { nama: "Produk 7", desc: "Detail 7", img: "LINK_FOTO_PRODUK_7" },
    { nama: "Produk 8", desc: "Detail 8", img: "LINK_FOTO_PRODUK_8" },
    { nama: "Produk 9", desc: "Detail 9", img: "LINK_FOTO_PRODUK_9" },
    { nama: "Produk 10", desc: "Detail 10", img: "LINK_FOTO_PRODUK_10" }
];

const grid = document.getElementById('katalog-produk');
produk.forEach(p => {
    const div = document.createElement('div');
    div.className = 'card';
    div.onclick = () => {
        if (div.classList.contains('active')) {
            div.classList.remove('active');
        } else {
            document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
            div.classList.add('active');
        }
    };
    div.innerHTML = `<img src="${p.img}" class="card-img"><h3>${p.nama}</h3><div class="detail"><p>${p.desc}</p><button>Order</button></div>`;
    grid.appendChild(div);
});

// 2. 5 KETERANGAN LAYANAN (Custom Link Foto)
const ketData = [
    { judul: "Layanan 1", img: "LINK_FOTO_LAYANAN_1" },
    { judul: "Layanan 2", img: "LINK_FOTO_LAYANAN_2" },
    { judul: "Layanan 3", img: "LINK_FOTO_LAYANAN_3" },
    { judul: "Layanan 4", img: "LINK_FOTO_LAYANAN_4" },
    { judul: "Layanan 5", img: "LINK_FOTO_LAYANAN_5" }
];
const ket = document.getElementById('keterangan-layanan');
ketData.forEach(item => {
    ket.innerHTML += `<div class="step-item"><h3>${item.judul}</h3><p>Penjelasan detail.</p><img src="${item.img}" class="step-img"></div>`;
});

// 3. 5 KATALOG FOTO + TEXT (Custom Link Foto)
const galData = [
    { judul: "Galeri 1", img: "LINK_FOTO_GALERI_1" },
    { judul: "Galeri 2", img: "LINK_FOTO_GALERI_2" },
    { judul: "Galeri 3", img: "LINK_FOTO_GALERI_3" },
    { judul: "Galeri 4", img: "LINK_FOTO_GALERI_4" },
    { judul: "Galeri 5", img: "LINK_FOTO_GALERI_5" }
];
const gal = document.getElementById('katalog-foto-text');
galData.forEach(item => {
    gal.innerHTML += `<div class="card"><img src="${item.img}" class="card-img"><h3>${item.judul}</h3><p>Deskripsi katalog.</p></div>`;
});

// 4. KONTAK BAWAH (Foto Khusus)
document.getElementById('kontak-bawah').innerHTML = `
    <div class="contact-box">
        <img src="LINK_FOTO_KONTAK_LEBAR" style="width:100%; border-radius:12px;">
        <p>Telegram : <a href="https://t.me/MoyhazXcodr">click here</a></p>
        <p>WhatsApp : <a href="https://wa.me/628123456789">click here</a></p>
    </div>`;
