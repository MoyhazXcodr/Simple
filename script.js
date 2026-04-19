// Katalog 10 Produk
const kat = document.getElementById('katalog-produk');
for(let i=1; i<=10; i++) {
    kat.innerHTML += `<div class="card"><img src="https://picsum.photos/300?random=${i}"><div style="padding:10px;"><h3>Produk ${i}</h3><p>Deskripsi singkat.</p></div></div>`;
}

// 5 Keterangan Layanan
const ket = document.getElementById('keterangan-layanan');
for(let i=1; i<=5; i++) {
    ket.innerHTML += `<div class="step-item"><h3>Keterangan ${i}</h3><p>Penjelasan layanan profesional.</p><img src="https://picsum.photos/400/200?random=${i+10}" class="step-img"></div>`;
}
