document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // --- Logika BARU untuk Dropdown Profile ---
    const dropdownToggle = document.querySelector('.dropdown > .nav-link');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener('click', (event) => {
            event.preventDefault(); // Mencegah link default
            dropdownMenu.classList.toggle('active');
        });
    }

    // Menutup dropdown jika klik di luar area menu
    window.addEventListener('click', (event) => {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('active');
        }
    });
});


// --- Logika untuk Countdown Ulang Tahun ---
const ulangTahunList = [
    //angkatan25
    { nama: "Mira", tanggal: 9, bulan: 8 },
    { nama: "Bila", tanggal: 8, bulan: 8 },
    { nama: "Dinda", tanggal: 30, bulan: 7 },
    { nama: "Rasya", tanggal: 3, bulan: 4 },
    { nama: "Rw", tanggal: 15, bulan: 6 },
    { nama: "Frans", tanggal: 20, bulan: 10 },
    { nama: "Ghani", tanggal: 18, bulan: 6 },
    { nama: "Rp", tanggal: 8, bulan: 4 },
    //angktan24
    { nama: "Rizqon", tanggal: 21, bulan: 10 },
    { nama: "Zalsabila", tanggal: 30, bulan: 5 },
    { nama: "Aisyah", tanggal: 30, bulan: 5 },
    { nama: "Azzahra", tanggal: 9, bulan: 2 },
    { nama: "Sutan", tanggal: 30, bulan: 5 },
    { nama: "Micko", tanggal: 21, bulan: 8 },
    { nama: "Annisa", tanggal: 30, bulan: 5 },
    { nama: "Difasa", tanggal: 26, bulan: 4 },
    { nama: "Ekik", tanggal: 30, bulan: 5 },
    { nama: "Risha", tanggal: 30, bulan: 5 },
    { nama: "Jeje", tanggal: 30, bulan: 5 },
    //angkatan23
    { nama: "Athala", tanggal: 30, bulan: 5 },
    { nama: "Taufiq", tanggal: 30, bulan: 5 },
    { nama: "Nisyah", tanggal: 30, bulan: 5 },
    { nama: "Mifta", tanggal: 30, bulan: 5 },
    { nama: "Syamsi", tanggal: 30, bulan: 5 },
    { nama: "Yurike", tanggal: 30, bulan: 5 },
    { nama: "Widia", tanggal: 30, bulan: 5 },
    { nama: "Surya", tanggal: 30, bulan: 5 },
];

function updateCountdown() {
    const sekarang = new Date();

    ulangTahunList.forEach(person => {
        const el = document.getElementById(`cd-${person.nama}`);
        if (!el) return; // Lewati jika elemen tidak ada di halaman

        const { nama, tanggal, bulan } = person;
        const tahunSekarang = sekarang.getFullYear();

        let ultah = new Date(tahunSekarang, bulan - 1, tanggal);
        if (ultah < sekarang) {
            ultah = new Date(tahunSekarang + 1, bulan - 1, tanggal);
        }

        if (
            sekarang.getDate() === tanggal &&
            (sekarang.getMonth() + 1) === bulan
        ) {
            el.textContent = "Selamat Ulang tahun!";
            setTimeout(() => {
            namaUltahHariIni = nama;
                // Mungkin arahkan ke halaman khusus
                window.location.href = `ultah/index.html?nama=${encodeURIComponent(nama)}`; 
            }, 2000);
            return; // Hentikan untuk orang ini
        }
        
        const selisihDetik = Math.floor((ultah - sekarang) / 1000);
        const hari = Math.floor(selisihDetik / (3600 * 24));
        const jam = Math.floor((selisihDetik % (3600 * 24)) / 3600);
        const menit = Math.floor((selisihDetik % 3600) / 60);
        const detik = selisihDetik % 60;

        el.textContent = `${hari}h ${jam}j ${menit}m ${detik}d`;
    });
}

setInterval(updateCountdown, 1000);
updateCountdown();
