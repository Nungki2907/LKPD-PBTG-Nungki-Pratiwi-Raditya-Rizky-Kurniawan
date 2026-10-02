/* FORM VALIDATION */

const form = document.getElementById("contactForm");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const namaError = document.getElementById("namaError");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", function (event) {
    let valid = true;

    /* VALIDASI NAMA */

    if (nama.value.trim() === "") {
        namaError.textContent = "Nama wajib diisi";
        valid = false;
    } else if (nama.value.trim().length < 3) {
        namaError.textContent = "Nama minimal 3 huruf";
        valid = false;
    } else {
        namaError.textContent = "";
    }

    /* VALIDASI EMAIL */

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
        emailError.textContent = "Email wajib diisi";
        valid = false;
    } else if (!polaEmail.test(email.value.trim())) {
        emailError.textContent = "Email tidak valid";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    if (!valid) {
        event.preventDefault();
    } else {
        event.preventDefault();
        alert("Pesan berhasil dikirim!");
        form.reset();
    }
});


/* TOGGLE PASSWORD */

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

const konfirmasi = document.getElementById("konfirmasi");
const toggleKonfirmasi = document.getElementById("toggleKonfirmasi");


/* TOGGLE PASSWORD */

if (togglePassword) {
    togglePassword.addEventListener("click", function () {
        if (password.type === "password") {
            password.type = "text";
            togglePassword.textContent = "🙈";
        } else {
            password.type = "password";
            togglePassword.textContent = "👁️";
        }
    });
}


/* TOGGLE KONFIRMASI PASSWORD */

if (toggleKonfirmasi) {
    toggleKonfirmasi.addEventListener("click", function () {
        if (konfirmasi.type === "password") {
            konfirmasi.type = "text";
            toggleKonfirmasi.textContent = "🙈";
        } else {
            konfirmasi.type = "password";
            toggleKonfirmasi.textContent = "👁️";
        }
    });
}


/* CHATBOT */

const chatButton = document.getElementById("chatButton");
const chatbot = document.getElementById("chatbot");
const closeChat = document.getElementById("closeChat");
const chatBody = document.getElementById("chatBody");
const chatInput = document.getElementById("chatInput");

chatButton.addEventListener("click", function () {
    chatbot.classList.add("active");
});

closeChat.addEventListener("click", function () {
    chatbot.classList.remove("active");
});


/* TAMBAH PESAN */

function addMessage(text, type) {
    const message = document.createElement("div");

    message.classList.add(type + "-message");
    message.textContent = text;

    chatBody.appendChild(message);
    chatBody.scrollTop = chatBody.scrollHeight;
}


/* JAWABAN CHATBOT */

function botReply(text) {
    const tanya = text
        .toLowerCase()
        .replace(/[?!.,]/g, "")
        .trim();


    /* SAPAAN */

    if (
        tanya.includes("halo") ||
        tanya.includes("hai") ||
        tanya.includes("hello") ||
        tanya.includes("hi")
    ) {
        return "Halo! 👋 Ada yang bisa saya bantu? Kamu bisa bertanya tentang berbagai ekstrakurikuler, pendaftaran, atau kontak sekolah.";
    }


    /* SEMUA EKSKUL */

    if (
        tanya.includes("ekskul") ||
        tanya.includes("ekstra") ||
        tanya.includes("ekstranya") ||
        tanya.includes("ekstrakurikuler") ||
        tanya.includes("kegiatan") ||
        tanya.includes("ada apa saja") ||
        tanya.includes("apa saja")
    ) {
        return "Ada banyak pilihan ekstrakurikuler seperti Padus, MTQ, Paskibra, Rohis, PMR, Pramuka, Tari, Jurnalis, Bahasa Jepang, Voli, Futsal, Drumband, Rebana, Silat, dan Fooster.";
    }


    /* PADUS */

    if (
        tanya.includes("padus") ||
        tanya.includes("paduan suara")
    ) {
        return "Padus atau Paduan Suara merupakan ekskul yang mengembangkan kemampuan bernyanyi secara berkelompok. Kegiatannya melatih vokal, harmonisasi, kekompakan, percaya diri, dan kemampuan tampil di depan umum.";
    }


    /* MTQ */

    if (
        tanya.includes("mtq") ||
        tanya.includes("tilawah") ||
        tanya.includes("quran")
    ) {
        return "MTQ merupakan ekskul yang berfokus pada kemampuan membaca dan melantunkan Al-Qur'an dengan baik. Kegiatannya dapat melatih tajwid, makhraj, suara, dan kemampuan tampil.";
    }


    /* PASKIBRA */

    if (
        tanya.includes("paskibra") ||
        tanya.includes("paskibraka") ||
        tanya.includes("baris")
    ) {
        return "Paskibra melatih kedisiplinan, tanggung jawab, kekompakan, kepemimpinan, dan kemampuan baris-berbaris. Kamu bisa melihat informasi pendaftaran Paskibra melalui card Paskibra.";
    }


    /* ROHIS */

    if (
        tanya.includes("rohis") ||
        tanya.includes("miftahul")
    ) {
        return "Rohis Miftahul Jannah merupakan ekskul yang berfokus pada kegiatan keislaman, pengembangan karakter, tanggung jawab, dan kebersamaan siswa.";
    }


    /* PMR */

    if (
        tanya.includes("pmr") ||
        tanya.includes("palang merah")
    ) {
        return "PMR atau Palang Merah Remaja merupakan ekskul yang mempelajari kepedulian sosial, kesehatan, kerja sama, dan pengetahuan dasar pertolongan pertama.";
    }


    /* PRAMUKA */

    if (
        tanya.includes("pramuka") ||
        tanya.includes("sangga") ||
        tanya.includes("bantara")
    ) {
        return "Pramuka melatih kemandirian, kedisiplinan, kerja sama, kepemimpinan, tanggung jawab, dan berbagai keterampilan.";
    }


    /* TARI */

    if (
        tanya.includes("tari") ||
        tanya.includes("menari")
    ) {
        return "Ekskul Tari mengembangkan kemampuan siswa dalam seni tari. Kegiatannya melatih gerakan, ekspresi, kreativitas, kekompakan, dan kepercayaan diri.";
    }


    /* JURNALIS */

    if (
        tanya.includes("jurnalis") ||
        tanya.includes("jurnalistik") ||
        tanya.includes("berita")
    ) {
        return "Ekskul Jurnalis mengembangkan kemampuan mencari, mengolah, dan menyampaikan informasi. Siswa dapat belajar menulis berita, wawancara, fotografi, membuat konten, dan bekerja dalam tim.";
    }


    /* BAHASA JEPANG */

    if (
        tanya.includes("bahasa jepang") ||
        tanya.includes("jepang")
    ) {
        return "Ekskul Bahasa Jepang membantu siswa mempelajari dasar bahasa dan budaya Jepang, seperti kosakata, percakapan, huruf Jepang, dan budaya.";
    }


    /* VOLI */

    if (
        tanya.includes("voli") ||
        tanya.includes("volleyball")
    ) {
        return "Ekskul Voli melatih teknik dasar permainan bola voli, kerja sama tim, koordinasi, kedisiplinan, dan kekompakan.";
    }


    /* FUTSAL */

    if (tanya.includes("futsal")) {
        return "Ekskul Futsal melatih teknik bermain, strategi, kerja sama tim, kecepatan, ketahanan, dan sportivitas.";
    }


    /* DRUMBAND */

    if (
        tanya.includes("drumband") ||
        tanya.includes("drum band")
    ) {
        return "Ekskul Drumband melatih kemampuan bermusik, kekompakan, konsentrasi, kedisiplinan, ritme, dan kerja sama tim.";
    }


    /* REBANA */

    if (tanya.includes("rebana")) {
        return "Ekskul Rebana merupakan kegiatan seni musik bernuansa Islami. Siswa belajar memainkan alat musik rebana, menjaga irama, bernyanyi, dan bekerja sama dalam kelompok.";
    }


    /* SILAT */

    if (
        tanya.includes("silat") ||
        tanya.includes("pencak silat")
    ) {
        return "Ekskul Silat merupakan kegiatan bela diri yang melatih ketangkasan, kedisiplinan, keberanian, konsentrasi, dan sportivitas.";
    }


    /* FOOSTER */

    if (
        tanya.includes("fooster") ||
        tanya.includes("foster")
    ) {
        return "Fooster merupakan salah satu ekstrakurikuler sekolah. Untuk informasi lebih lengkap mengenai kegiatan dan jadwal Fooster, kamu dapat melihat bagian ekskul pada website.";
    }


    /* PENDAFTARAN */

    if (
        tanya.includes("daftar") ||
        tanya.includes("pendaftaran") ||
        tanya.includes("mendaftar") ||
        tanya.includes("bergabung") ||
        tanya.includes("join")
    ) {
        return "Untuk mendaftar, pilih ekskul yang kamu inginkan kemudian isi form pendaftaran yang tersedia pada halaman ekskul tersebut.";
    }


    /* SYARAT */

    if (
        tanya.includes("syarat") ||
        tanya.includes("persyaratan") ||
        tanya.includes("ketentuan")
    ) {
        return "Syarat pendaftaran dapat berbeda pada setiap ekskul. Silakan pilih ekskul yang ingin kamu ikuti untuk melihat informasi lebih lengkap.";
    }


    /* KONTAK */

    if (
        tanya.includes("kontak") ||
        tanya.includes("nomor") ||
        tanya.includes("telepon") ||
        tanya.includes("email") ||
        tanya.includes("hubungi")
    ) {
        return "Kamu bisa menghubungi Extrasata melalui nomor +62 838 6967 4060 atau email extra@sata.sch.id.";
    }


    /* TERIMA KASIH */

    if (
        tanya.includes("terima kasih") ||
        tanya.includes("makasih") ||
        tanya.includes("thanks")
    ) {
        return "Sama-sama! 😊 Semoga informasinya membantu.";
    }


    /* JAWABAN DEFAULT */

    return "Maaf, saya belum menemukan informasi yang sesuai. Kamu bisa bertanya tentang Padus, MTQ, Paskibra, Rohis, PMR, Pramuka, Tari, Jurnalis, Bahasa Jepang, Voli, Futsal, Drumband, Rebana, Silat, Fooster, pendaftaran, atau kontak sekolah.";
}


/* KIRIM PESAN */

function sendMessage() {
    const text = chatInput.value.trim();

    if (text === "") {
        return;
    }

    addMessage(text, "user");
    chatInput.value = "";

    setTimeout(function () {
        const jawaban = botReply(text);
        addMessage(jawaban, "bot");
    }, 500);
}


/* ENTER */

chatInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});