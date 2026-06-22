// ============================================================
// DATA SOAL — TPA Simulasi
// Edit / tambah soal di sini. Format setiap soal:
// { subtest: "Nama Subtes", question: "Teks soal", options: [...5 opsi], answer: indexJawabanBenar (0-4) }
// ============================================================

const QUESTIONS = [

  // ---------------- 1. DERET ANGKA (13 soal) ----------------
  { subtest: "Deret Angka", question: "2, 4, 8, 16, ...", options: ["24", "32", "30", "20", "18"], answer: 1 },
  { subtest: "Deret Angka", question: "3, 6, 9, 12, ...", options: ["14", "15", "16", "18", "13"], answer: 1 },
  { subtest: "Deret Angka", question: "1, 4, 9, 16, 25, ...", options: ["30", "32", "34", "36", "38"], answer: 3 },
  { subtest: "Deret Angka", question: "100, 90, 81, 73, ...", options: ["64", "65", "66", "68", "70"], answer: 2 },
  { subtest: "Deret Angka", question: "5, 10, 20, 40, ...", options: ["60", "70", "80", "90", "100"], answer: 2 },
  { subtest: "Deret Angka", question: "2, 3, 5, 8, 13, ...", options: ["18", "19", "20", "21", "22"], answer: 3 },
  { subtest: "Deret Angka", question: "7, 14, 28, 56, ...", options: ["84", "98", "108", "112", "120"], answer: 3 },
  { subtest: "Deret Angka", question: "1, 1, 2, 3, 5, 8, ...", options: ["11", "12", "13", "14", "15"], answer: 2 },
  { subtest: "Deret Angka", question: "81, 27, 9, 3, ...", options: ["0", "1", "2", "3", "4"], answer: 1 },
  { subtest: "Deret Angka", question: "4, 9, 16, 25, 36, ...", options: ["42", "45", "47", "49", "52"], answer: 3 },
  { subtest: "Deret Angka", question: "10, 20, 18, 36, 34, ...", options: ["64", "66", "68", "70", "72"], answer: 2 },
  { subtest: "Deret Angka", question: "6, 11, 21, 41, 81, ...", options: ["151", "156", "161", "166", "171"], answer: 2 },
  { subtest: "Deret Angka", question: "3, 7, 15, 31, 63, ...", options: ["117", "120", "125", "127", "130"], answer: 3 },

  // ---------------- 2. MATEMATIKA DASAR (13 soal) ----------------
  { subtest: "Matematika Dasar", question: "25% dari 200 adalah ...", options: ["40", "45", "50", "55", "60"], answer: 2 },
  { subtest: "Matematika Dasar", question: "Jika x + 5 = 12, maka nilai x adalah ...", options: ["5", "6", "7", "8", "9"], answer: 2 },
  { subtest: "Matematika Dasar", question: "Sebuah barang harga Rp150.000 didiskon 20%. Harga setelah diskon adalah ...", options: ["Rp100.000", "Rp110.000", "Rp120.000", "Rp130.000", "Rp140.000"], answer: 2 },
  { subtest: "Matematika Dasar", question: "Hasil dari 8 × 7 − 15 = ...", options: ["38", "39", "40", "41", "42"], answer: 3 },
  { subtest: "Matematika Dasar", question: "3/4 + 1/2 = ...", options: ["1/4", "3/4", "1", "5/4", "3/2"], answer: 3 },
  { subtest: "Matematika Dasar", question: "Keliling persegi dengan sisi 9 cm adalah ...", options: ["18 cm", "27 cm", "36 cm", "45 cm", "81 cm"], answer: 2 },
  { subtest: "Matematika Dasar", question: "Rata-rata dari 5 angka adalah 20. Jumlah kelima angka tersebut adalah ...", options: ["80", "90", "100", "110", "120"], answer: 2 },
  { subtest: "Matematika Dasar", question: "15 adalah berapa persen dari 60?", options: ["15%", "20%", "25%", "30%", "35%"], answer: 2 },
  { subtest: "Matematika Dasar", question: "Sebuah mobil menempuh 240 km dalam 4 jam. Kecepatan rata-ratanya adalah ...", options: ["40 km/jam", "50 km/jam", "60 km/jam", "70 km/jam", "80 km/jam"], answer: 2 },
  { subtest: "Matematika Dasar", question: "Akar kuadrat dari 144 adalah ...", options: ["10", "11", "12", "13", "14"], answer: 2 },
  { subtest: "Matematika Dasar", question: "2 pekerja menyelesaikan pekerjaan dalam 6 hari. Dengan kecepatan kerja sama, 3 pekerja akan menyelesaikannya dalam ...", options: ["2 hari", "3 hari", "4 hari", "5 hari", "6 hari"], answer: 2 },
  { subtest: "Matematika Dasar", question: "Hasil dari (−3) × 4 + 10 = ...", options: ["−12", "−2", "2", "12", "22"], answer: 1 },
  { subtest: "Matematika Dasar", question: "Barang dibeli Rp50.000 dan dijual dengan untung 20%. Harga jualnya adalah ...", options: ["Rp55.000", "Rp58.000", "Rp60.000", "Rp62.000", "Rp65.000"], answer: 2 },

  // ---------------- 3. SPASIAL (12 soal) ----------------
  { subtest: "Spasial", question: "Lanjutkan pola berikut: ▲ ▼ ▲ ▼ ▲ ...", options: ["▲", "▼", "■", "●", "◆"], answer: 1 },
  { subtest: "Spasial", question: "Lanjutkan pola berikut: ● ●● ●●● ●●●● ...", options: ["●●", "●●●", "●●●●", "●●●●●", "●●●●●●"], answer: 3 },
  { subtest: "Spasial", question: "Lanjutkan pola berikut: ◼ ◻ ◼ ◻ ◼ ...", options: ["◼", "◻", "◆", "◇", "●"], answer: 1 },
  { subtest: "Spasial", question: "Sebuah kubus memiliki jumlah sisi (wajah) sebanyak ...", options: ["4", "5", "6", "8", "12"], answer: 2 },
  { subtest: "Spasial", question: "Sebuah kubus memiliki jumlah rusuk sebanyak ...", options: ["6", "8", "10", "12", "14"], answer: 3 },
  { subtest: "Spasial", question: "Sebuah kubus memiliki jumlah titik sudut sebanyak ...", options: ["6", "8", "10", "12", "16"], answer: 1 },
  { subtest: "Spasial", question: "Bangun datar dengan 5 sisi disebut ...", options: ["Heksagon", "Pentagon", "Oktagon", "Trapesium", "Belah ketupat"], answer: 1 },
  { subtest: "Spasial", question: "Bangun datar dengan 6 sisi disebut ...", options: ["Pentagon", "Heptagon", "Heksagon", "Oktagon", "Nonagon"], answer: 2 },
  { subtest: "Spasial", question: "Jika sebuah bentuk diputar penuh 360°, posisinya akan ...", options: ["Terbalik", "Bergeser setengah", "Sama seperti semula", "Menjadi cermin", "Mengecil"], answer: 2 },
  { subtest: "Spasial", question: "Jaring-jaring kubus terdiri dari berapa buah persegi?", options: ["4", "5", "6", "7", "8"], answer: 2 },
  { subtest: "Spasial", question: "Jika sebuah panah menghadap ke atas diputar 90° searah jarum jam, arah panah menjadi menghadap ke ...", options: ["Kiri", "Kanan", "Atas", "Bawah", "Diagonal"], answer: 1 },
  { subtest: "Spasial", question: "Pola arah mata angin searah jarum jam: Utara, Timur, Selatan, Barat, ...", options: ["Tenggara", "Barat Daya", "Utara", "Timur Laut", "Barat Laut"], answer: 2 },

  // ---------------- 4. SINONIM (12 soal) ----------------
  { subtest: "Sinonim", question: "Sinonim dari kata \"Cerdas\" adalah ...", options: ["Bijak", "Pintar", "Rajin", "Tegas", "Sopan"], answer: 1 },
  { subtest: "Sinonim", question: "Sinonim dari kata \"Abadi\" adalah ...", options: ["Sementara", "Kekal", "Singkat", "Baru", "Lama"], answer: 1 },
  { subtest: "Sinonim", question: "Sinonim dari kata \"Bahagia\" adalah ...", options: ["Sedih", "Marah", "Senang", "Takut", "Bingung"], answer: 2 },
  { subtest: "Sinonim", question: "Sinonim dari kata \"Mungkin\" adalah ...", options: ["Pasti", "Tidak", "Barangkali", "Selalu", "Jarang"], answer: 2 },
  { subtest: "Sinonim", question: "Sinonim dari kata \"Asumsi\" adalah ...", options: ["Fakta", "Kenyataan", "Anggapan", "Bukti", "Data"], answer: 2 },
  { subtest: "Sinonim", question: "Sinonim dari kata \"Kontribusi\" adalah ...", options: ["Sumbangan", "Pengurangan", "Penolakan", "Permintaan", "Larangan"], answer: 0 },
  { subtest: "Sinonim", question: "Sinonim dari kata \"Efektif\" adalah ...", options: ["Sia-sia", "Berhasil guna", "Lambat", "Mahal", "Rumit"], answer: 1 },
  { subtest: "Sinonim", question: "Sinonim dari kata \"Inisiatif\" adalah ...", options: ["Perintah", "Prakarsa", "Larangan", "Aturan", "Paksaan"], answer: 1 },
  { subtest: "Sinonim", question: "Sinonim dari kata \"Komprehensif\" adalah ...", options: ["Terbatas", "Sebagian", "Menyeluruh", "Singkat", "Sederhana"], answer: 2 },
  { subtest: "Sinonim", question: "Sinonim dari kata \"Spontan\" adalah ...", options: ["Terencana", "Tiba-tiba", "Lambat", "Sengaja", "Diatur"], answer: 1 },
  { subtest: "Sinonim", question: "Sinonim dari kata \"Optimis\" adalah ...", options: ["Pesimis", "Ragu", "Penuh harap", "Takut", "Cemas"], answer: 2 },
  { subtest: "Sinonim", question: "Sinonim dari kata \"Transparan\" adalah ...", options: ["Tertutup", "Terbuka", "Rumit", "Gelap", "Rahasia"], answer: 1 },

  // ---------------- 5. ANTONIM (12 soal) ----------------
  { subtest: "Antonim", question: "Antonim dari kata \"Maju\" adalah ...", options: ["Mundur", "Cepat", "Tinggi", "Besar", "Kuat"], answer: 0 },
  { subtest: "Antonim", question: "Antonim dari kata \"Mahal\" adalah ...", options: ["Murah", "Bagus", "Baru", "Lama", "Berat"], answer: 0 },
  { subtest: "Antonim", question: "Antonim dari kata \"Rajin\" adalah ...", options: ["Pintar", "Malas", "Cepat", "Lambat", "Tegas"], answer: 1 },
  { subtest: "Antonim", question: "Antonim dari kata \"Optimis\" adalah ...", options: ["Yakin", "Pesimis", "Berani", "Takut", "Ragu"], answer: 1 },
  { subtest: "Antonim", question: "Antonim dari kata \"Konkret\" adalah ...", options: ["Jelas", "Nyata", "Abstrak", "Pasti", "Tegas"], answer: 2 },
  { subtest: "Antonim", question: "Antonim dari kata \"Sentralisasi\" adalah ...", options: ["Pemusatan", "Desentralisasi", "Penggabungan", "Pembagian", "Pengaturan"], answer: 1 },
  { subtest: "Antonim", question: "Antonim dari kata \"Mayoritas\" adalah ...", options: ["Sebagian besar", "Minoritas", "Keseluruhan", "Banyak", "Sedikit"], answer: 1 },
  { subtest: "Antonim", question: "Antonim dari kata \"Eksplisit\" adalah ...", options: ["Jelas", "Implisit", "Terbuka", "Pasti", "Langsung"], answer: 1 },
  { subtest: "Antonim", question: "Antonim dari kata \"Statis\" adalah ...", options: ["Tetap", "Dinamis", "Diam", "Kaku", "Tenang"], answer: 1 },
  { subtest: "Antonim", question: "Antonim dari kata \"Lazim\" adalah ...", options: ["Biasa", "Umum", "Langka", "Sering", "Wajar"], answer: 2 },
  { subtest: "Antonim", question: "Antonim dari kata \"Subjektif\" adalah ...", options: ["Pribadi", "Objektif", "Pendapat", "Perasaan", "Pandangan"], answer: 1 },
  { subtest: "Antonim", question: "Antonim dari kata \"Heterogen\" adalah ...", options: ["Beragam", "Bervariasi", "Homogen", "Campuran", "Berbeda"], answer: 2 },

  // ---------------- 6. ANALOGI (12 soal) ----------------
  { subtest: "Analogi", question: "Dokter : Rumah Sakit = Guru : ...", options: ["Kantor", "Sekolah", "Pasar", "Rumah", "Bank"], answer: 1 },
  { subtest: "Analogi", question: "Kunci : Pintu = Sandi : ...", options: ["Kertas", "Akses", "Buku", "Meja", "Pulpen"], answer: 1 },
  { subtest: "Analogi", question: "Air : Sungai = Darah : ...", options: ["Tulang", "Otot", "Pembuluh darah", "Jantung", "Kulit"], answer: 2 },
  { subtest: "Analogi", question: "Pena : Menulis = Pisau : ...", options: ["Menulis", "Memotong", "Membaca", "Melihat", "Mendengar"], answer: 1 },
  { subtest: "Analogi", question: "Petani : Sawah = Nelayan : ...", options: ["Sawah", "Kota", "Laut", "Pasar", "Gunung"], answer: 2 },
  { subtest: "Analogi", question: "Roda : Mobil = Sayap : ...", options: ["Mobil", "Kapal", "Pesawat", "Kereta", "Sepeda"], answer: 2 },
  { subtest: "Analogi", question: "Jam : Waktu = Termometer : ...", options: ["Berat", "Suhu", "Panjang", "Volume", "Tekanan"], answer: 1 },
  { subtest: "Analogi", question: "Buku : Perpustakaan = Obat : ...", options: ["Sekolah", "Apotek", "Pasar", "Bank", "Kantor"], answer: 1 },
  { subtest: "Analogi", question: "Singa : Hutan = Ikan Hiu : ...", options: ["Sungai", "Danau", "Laut", "Kolam", "Sawah"], answer: 2 },
  { subtest: "Analogi", question: "Telinga : Mendengar = Mata : ...", options: ["Mencium", "Melihat", "Meraba", "Mengecap", "Berpikir"], answer: 1 },
  { subtest: "Analogi", question: "Panas : Api = Dingin : ...", options: ["Air", "Angin", "Es", "Hujan", "Awan"], answer: 2 },
  { subtest: "Analogi", question: "Bibit : Pohon = Telur : ...", options: ["Sarang", "Ayam", "Induk", "Sayap", "Bulu"], answer: 1 },

  // ---------------- 7. BAHASA INGGRIS (13 soal) ----------------
  { subtest: "Bahasa Inggris", question: "She ___ to the office every day.", options: ["go", "goes", "going", "gone", "went"], answer: 1 },
  { subtest: "Bahasa Inggris", question: "Synonym of \"Huge\" is ...", options: ["Tiny", "Small", "Enormous", "Narrow", "Slow"], answer: 2 },
  { subtest: "Bahasa Inggris", question: "Antonym of \"Increase\" is ...", options: ["Decrease", "Raise", "Grow", "Expand", "Rise"], answer: 0 },
  { subtest: "Bahasa Inggris", question: "I have ___ my homework.", options: ["did", "do", "doing", "done", "does"], answer: 3 },
  { subtest: "Bahasa Inggris", question: "Which sentence is grammatically correct?", options: ["He don't like coffee.", "She doesn't likes coffee.", "They doesn't like coffee.", "She doesn't like coffee.", "He not like coffee."], answer: 3 },
  { subtest: "Bahasa Inggris", question: "If I ___ rich, I would travel the world.", options: ["am", "was", "were", "be", "is"], answer: 2 },
  { subtest: "Bahasa Inggris", question: "The idiom \"Break the ice\" means ...", options: ["To destroy something", "To start a conversation", "To stop an argument", "To finish early", "To celebrate"], answer: 1 },
  { subtest: "Bahasa Inggris", question: "Choose the correct passive voice of \"They build houses.\"", options: ["Houses build them.", "Houses are built by them.", "Houses was built by them.", "Houses building by them.", "Houses builds by them."], answer: 1 },
  { subtest: "Bahasa Inggris", question: "Despite ___ hard, he failed the exam.", options: ["study", "studied", "to study", "studying", "studies"], answer: 3 },
  { subtest: "Bahasa Inggris", question: "The plural form of \"Analysis\" is ...", options: ["Analysises", "Analysis", "Analyses", "Analysi", "Analyzes"], answer: 2 },
  { subtest: "Bahasa Inggris", question: "Which word means \"to make something better\"?", options: ["Improve", "Worsen", "Ignore", "Reduce", "Stop"], answer: 0 },
  { subtest: "Bahasa Inggris", question: "He has been working here ___ 2019.", options: ["for", "since", "from", "at", "in"], answer: 1 },
  { subtest: "Bahasa Inggris", question: "This task is ___ than the previous one.", options: ["difficult", "more difficult", "most difficult", "difficultest", "difficulty"], answer: 1 },

  // ---------------- 8. COMPUTER LITERACY (13 soal) ----------------
  { subtest: "Computer Literacy", question: "Apa kepanjangan dari CPU?", options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Unit", "Core Processing Unit", "Central Processor Utility"], answer: 0 },
  { subtest: "Computer Literacy", question: "Apa fungsi utama RAM dalam komputer?", options: ["Menyimpan data secara permanen", "Menyimpan data sementara saat program berjalan", "Mengatur tampilan grafis", "Menghubungkan ke internet", "Mencetak dokumen"], answer: 1 },
  { subtest: "Computer Literacy", question: "Format file gambar yang mendukung transparansi adalah ...", options: ["JPG", "PNG", "BMP", "DOCX", "PPT"], answer: 1 },
  { subtest: "Computer Literacy", question: "Apa kepanjangan dari URL?", options: ["Uniform Resource Locator", "Universal Reading Link", "User Result Locator", "Unique Resource Link", "Uniform Reading Locator"], answer: 0 },
  { subtest: "Computer Literacy", question: "Shortcut untuk menyalin (copy) di Windows adalah ...", options: ["Ctrl+V", "Ctrl+X", "Ctrl+C", "Ctrl+Z", "Ctrl+A"], answer: 2 },
  { subtest: "Computer Literacy", question: "Shortcut untuk membatalkan (undo) aksi terakhir adalah ...", options: ["Ctrl+Y", "Ctrl+Z", "Ctrl+S", "Ctrl+P", "Ctrl+N"], answer: 1 },
  { subtest: "Computer Literacy", question: "Apa fungsi utama dari sistem operasi (OS)?", options: ["Mendesain grafis", "Mengelola perangkat keras dan lunak komputer", "Menyambungkan ke printer saja", "Membuat dokumen", "Memutar musik"], answer: 1 },
  { subtest: "Computer Literacy", question: "Apa kepanjangan dari HTTP?", options: ["Hyper Transfer Text Protocol", "Hypertext Transfer Protocol", "High Text Transfer Process", "Hypertext Transmission Path", "Host Transfer Text Protocol"], answer: 1 },
  { subtest: "Computer Literacy", question: "Perangkat keras yang berfungsi sebagai \"otak\" komputer adalah ...", options: ["Monitor", "Keyboard", "Processor (CPU)", "Mouse", "Speaker"], answer: 2 },
  { subtest: "Computer Literacy", question: "Apa yang dimaksud dengan \"Cloud Storage\"?", options: ["Penyimpanan data di hard disk lokal", "Penyimpanan data secara online/internet", "Penyimpanan data di flash disk", "Penyimpanan data di CD/DVD", "Penyimpanan data di kertas digital"], answer: 1 },
  { subtest: "Computer Literacy", question: "Ekstensi file untuk dokumen Microsoft Excel adalah ...", options: [".docx", ".pptx", ".xlsx", ".pdf", ".txt"], answer: 2 },
  { subtest: "Computer Literacy", question: "Wi-Fi umumnya dipahami sebagai kepanjangan dari ...", options: ["Wireless Fidelity", "Wide Fiber", "Wireless File", "Wide Frequency", "Wired Fidelity"], answer: 0 },
  { subtest: "Computer Literacy", question: "Apa fungsi utama dari antivirus?", options: ["Mempercepat internet", "Melindungi komputer dari malware/virus", "Menambah kapasitas RAM", "Mencetak dokumen", "Mengedit foto"], answer: 1 },
];

const SUBTEST_ORDER = [
  "Deret Angka", "Matematika Dasar", "Spasial", "Sinonim",
  "Antonim", "Analogi", "Bahasa Inggris", "Computer Literacy"
];
