<div align="center">
  <img src="/public/ITB.png" alt="Logo ITB" width="200"/>
  <h1>Prototype Sistem Gamifikasi Gojek</h1>
  <p>Tugas Besar II3120 Layanan Sistem dan Teknologi Informasi</p>
</div>

<table align="center">
  <tr>
    <th colspan="2">Kelompok 3</th>
  </tr>
  <tr>
    <td>18222009</td>
    <td>Daffa Ramadhan Elengi</td>
  </tr>
  <tr>
    <td>18222017</td>
    <td>Dzulfaqor Ali Dipangegara</td>
  </tr>
  <tr>
    <td>18222039</td>
    <td>Billy Samuel Setiawan</td>
  </tr>
  <tr>
    <td>18222045</td>
    <td>Givari Al Fachri</td>
  </tr>
  <tr>
    <td>18222081</td>
    <td>Harry Truman Suhalim</td>
  </tr>
</table>

## 📝 Deskripsi Proyek

Prototype ini merupakan implementasi sistem gamifikasi untuk aplikasi Gojek yang bertujuan untuk meningkatkan engagement pengguna melalui sistem misi, reward, dan leaderboard.

## 🚀 Getting Started

### Prerequisites

Sebelum memulai, pastikan sistem Anda telah memenuhi persyaratan berikut:

- Node.js (versi 16.x atau lebih tinggi)
- npm (versi 8.x atau lebih tinggi) atau yarn (versi 1.22.x atau lebih tinggi)
- Git

### Installation

1. Clone repository ini ke local machine Anda:
```bash
git clone https://github.com/your-username/prototype-gamifikasi-gojek.git
cd prototype-gamifikasi-gojek
```

2. Install dependencies menggunakan npm:
```bash
npm install
```
Atau jika menggunakan yarn:
```bash
yarn install
```

3. Jalankan development server:
```bash
npm run dev
# atau
yarn dev
```

4. Buka browser dan akses `http://localhost:3000`

### Build for Production

Untuk membuild aplikasi untuk production:

```bash
npm run build
# atau
yarn build
```

Untuk menjalankan versi production di local:
```bash
npm run start
# atau
yarn start
```

### Running Tests

Menjalankan unit tests:
```bash
npm run test
# atau
yarn test
```

Menjalankan e2e tests:
```bash
npm run test:e2e
# atau
yarn test:e2e
```

### Troubleshooting

Jika mengalami masalah saat instalasi atau menjalankan aplikasi:

1. Hapus folder node_modules dan file lock:
```bash
rm -rf node_modules
rm package-lock.json # atau yarn.lock
```

2. Clear npm cache:
```bash
npm cache clean --force
```

3. Reinstall dependencies:
```bash
npm install
```

### Fitur Utama

1. **Sistem Misi & Tantangan**
   - Misi harian dengan reward points
   - Tantangan jangka panjang dengan reward lebih besar
   - Progress tracking untuk setiap misi
   - Timer countdown untuk misi harian
   - Notifikasi completion status

2. **Sistem Reward**
   - Voucher layanan Gojek
   - Cashback GoPay
   - Reward eksklusif
   - Sistem tukar poin
   - Riwayat reward

3. **Sistem Leaderboard**
   - Ranking mingguan pengguna
   - Medali & badge untuk top performers
   - Level progression system
   - Statistik performa
   - Riwayat pencapaian

4. **Gamifikasi Engagement**
   - Daily login rewards
   - Streak bonus
   - Achievement badges
   - Special events
   - Seasonal challenges

## 🛠️ Teknologi yang Digunakan

### Core Technologies
- **Frontend Framework**: Next.js 13.5
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: Zustand
- **Type Safety**: TypeScript

### Additional Features
- **Animations**: Framer Motion
- **Sound Effects**: use-sound
- **Icons**: Lucide React
- **Date Management**: Day.js
- **Form Handling**: React Hook Form

## 📁 Struktur Proyek

```
prototype-lasti/
├── app/                      # Next.js app router
│   ├── layout.tsx           
│   ├── page.tsx
│   └── providers.tsx
├── components/               # React components
│   ├── ui/                  # Reusable UI components
│   ├── features/            # Feature-specific components
│   └── layouts/             # Layout components
├── lib/                     # Utilities & constants
│   ├── utils.ts
│   ├── constants.ts
│   └── types.ts
├── hooks/                   # Custom React hooks
├── store/                   # State management
└── public/                 # Static assets
```

## 🎨 Design System

### Brand Colors
- Primary: #00AA13 (GoGo Green)
- Secondary: #1C1C1C
- Accent: #FFE000
- Background: #F6F6F6
- Success: #00D215
- Error: #FF4B4B

### Typography
- Font Family: Maison Neue
- Fallback: System UI

### Components
- Menggunakan shadcn/ui dengan custom theme Gojek
- Komponen yang dioptimalkan untuk mobile-first design
- Accessibility compliant

## 🤝 Panduan Kontribusi

### Development Guidelines
- Gunakan TypeScript strict mode
- Ikuti Airbnb Style Guide
- Implementasikan unit testing
- Dokumentasikan perubahan API

### Git Workflow
- Branch dari `develop`
- Create feature branch
- Submit pull request
- Code review
- Merge ke `develop`

### Quality Assurance
- Unit Testing
- Integration Testing
- Performance Testing
- Accessibility Testing
- Mobile Responsiveness Testing

## 📈 Metrics & Analytics

### Performance Metrics
- Core Web Vitals
- Time to Interactive
- First Contentful Paint
- Cumulative Layout Shift

### Business Metrics
- User Engagement Rate
- Daily Active Users
- Mission Completion Rate
- Reward Redemption Rate

## 📄 Lisensi

Hak Cipta © 2024 Kelompok 3 STI ITB. All rights reserved.