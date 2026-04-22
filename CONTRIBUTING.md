# 🤝 Contributing to TikDrop

Terima kasih telah tertarik untuk berkontribusi pada TikDrop! Kami menghargai setiap bantuan, baik itu perbaikan bug, penambahan fitur, maupun peningkatan dokumentasi.

## 🛠️ Development Setup

1.  **Fork repositori** ini.
2.  **Clone** hasil fork Anda:
    ```bash
    git clone https://github.com/your-username/tiktok-adgate.git
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Buat file `.env.local`** dan isi dengan variabel yang diperlukan (lihat `.env.example`).
5.  **Jalankan server pengembangan**:
    ```bash
    npm run dev
    ```

## 🌿 Branching Strategy

- Gunakan branch `main` untuk kode yang stabil.
- Buat branch baru untuk setiap fitur atau perbaikan: `feat/nama-fitur` atau `fix/nama-bug`.

## 📝 Commit Guidelines

Kami menggunakan standar [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Pastikan pesan commit Anda mengikuti format:

- `feat:` untuk fitur baru.
- `fix:` untuk perbaikan bug.
- `docs:` untuk perubahan dokumentasi.
- `style:` untuk perubahan tampilan (formatting, missing semi colons, dsb).
- `refactor:` untuk perubahan kode yang tidak memperbaiki bug maupun menambah fitur.
- `perf:` untuk peningkatan performa.
- `test:` untuk menambahkan atau memperbaiki test.
- `chore:` untuk perubahan pada proses build atau alat bantu lainnya.

Contoh: `feat: add Google Auth integration`

## 🎨 Coding Standards

- Gunakan **TypeScript** untuk keamanan tipe data.
- Gunakan **Tailwind CSS v4** untuk styling.
- Ikuti struktur proyek yang sudah ada di folder `src/`.
- Pastikan kode Anda lulus pengecekan tipe: `npm run typecheck`.

## 🚀 Pull Request Process

1.  Pastikan kode Anda sudah dites secara lokal.
2.  Update dokumentasi jika ada perubahan pada API atau fitur.
3.  Kirim Pull Request (PR) ke branch `main`.
4.  Berikan deskripsi yang jelas tentang apa yang Anda ubah di PR tersebut.

---
Mari kita bangun alat download TikTok terbaik bersama-sama! 🚀
