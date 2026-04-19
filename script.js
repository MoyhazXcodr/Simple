// ==========================================
// PUSAT KENDALI URL FOTO & DATA
// ==========================================

// 1. URL LOGO NAV & FOTO STEP
document.getElementById('logo-nav').style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/512/3135/3135715.png')";
document.getElementById('logo-nav').style.backgroundSize = "cover";

document.getElementById('img-step1').src = "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600";
document.getElementById('img-contact').src = "https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=800";

// 2. DATA PRODUK (GANTI FOTO DI SINI)
const produk = [
    {
        nama: "Script Hazdbail",
        desc: "Bot WhatsApp Anti-Ban.",
        harga: "Rp 150.000",
        foto: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=600"
    },
    {
        nama: "Panel Ptero",
        desc: "Hosting game stabil.",
        harga: "Rp 50.000",
        foto: "https://images.unsplash.com/photo-1558494949-ef010958384e?q=80&w=600"
    }
];

// Mesin Render
const wadah = document.getElementById('katalog-produk');
produk.forEach(p => {
    wadah.innerHTML += `
        <div class="card">
            <div class="card-img-box"><img src="${p.foto}" alt="${p.nama}"></div>
            <div class="card-body">
                <h3>${p.nama}</h3>
                <p>${p.desc}</p>
                <div class="card-footer">
                    <span class="harga">${p.harga}</span>
                    <button class="btn-beli">Detail</button>
                </div>
            </div>
        </div>
    `;
});
