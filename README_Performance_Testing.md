
# 📊 Performance Testing Report - Vasdev Career Site

Hasil pengujian performa dilakukan menggunakan [K6](https://k6.io/) dengan 300 virtual users selama 30 detik untuk masing-masing skenario.

---

## ✅ Skenario 1: Membuka Halaman Lowongan (Admin)
📄 Script: `test-vacancy.js`  
🔗 Endpoint: `/admin/vacancy`

### Hasil Utama:
- Total Request: **1398**
- Average Response Time: **7.06 detik**
- Median: **8.01 detik**
- 95th Percentile: **9.12 detik**
- Maksimum: **10.08 detik**
- Error Rate: **0%**
- Status 200 OK: **100%**
- Average RPS (Request per Second): **33.6**
- Iterasi Berhasil: **699**

### Catatan:
> Meskipun seluruh request berhasil, response time cukup tinggi (> 7 detik). Perlu investigasi dan optimasi pada halaman ini jika akan digunakan secara luas.

---

## ✅ Skenario 2: Melakukan Pencarian Status Pelamar (Publik)
📄 Script: `search-status.js`  
🔗 Endpoint: `/?query=lorem`

### Hasil Utama:
- Total Request: **844**
- Average Response Time: **11.43 detik**
- Median: **11.12 detik**
- 95th Percentile: **17.7 detik**
- Maksimum: **18.07 detik**
- Error Rate: **0%**
- Status 200 OK: **100%**
- Average RPS: **20.8**
- Iterasi Berhasil: **844**

### Catatan:
> Fitur pencarian membutuhkan waktu tanggapan sangat tinggi (~11 detik). Disarankan mengoptimalkan backend query, caching, atau pagination.

---

## 📌 Kesimpulan Umum

| Kriteria               | Vacancy Page | Search Page |
|------------------------|--------------|-------------|
| Rata-rata Response     | 7.06 detik   | 11.43 detik |
| Maksimum Response      | 10.08 detik  | 18.07 detik |
| Total Request          | 1398         | 844         |
| Status 200 OK          | 100%         | 100%        |
| Error Rate             | 0%           | 0%          |
| Perlu Optimasi         | ⚠️ Ya        | ⚠️ Ya       |

---

## 🧪 Tools
- Tool: [K6](https://k6.io/)
- Format Output: CLI → `.txt`
- VU (Virtual Users): 300
- Durasi Uji: 30 detik per skenario

