function KartuStat({ label, nilai, icon, warna, sub }) {
  const warnaBg = {
    indigo:  "bg-indigo-50 text-indigo-600",
    emerald: "bg-emerald-50 text-emerald-600",
    amber:   "bg-amber-50 text-amber-600",
    rose:    "bg-rose-50 text-rose-600",
  };
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-center gap-4 shadow-sm">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${warnaBg[warna]}`}>
        {icon}
      </div>
      <div>
        <p className="text-xs text-slate-500 font-medium">{label}</p>
        <p className="text-xl font-bold text-slate-800 mt-0.5">{nilai}</p>
        {sub && <p className="text-xs text-slate-400 mt-0.5">{sub}</p>}
      </div>
    </div>
  );
}

const transaksiHariIni = [
  { id: "TRX-001", pelanggan: "Budi Santoso",   jenis: "Penjualan",  nominal: "Rp 85.000",  status: "Lunas",    waktu: "08:32" },
  { id: "TRX-002", pelanggan: "Siti Rahayu",    jenis: "Pulsa",      nominal: "Rp 50.000",  status: "Lunas",    waktu: "09:14" },
  { id: "TRX-003", pelanggan: "Ahmad Fauzi",    jenis: "Service",    nominal: "Rp 150.000", status: "DP",       waktu: "10:05" },
  { id: "TRX-004", pelanggan: "Dewi Lestari",   jenis: "PPOB",       nominal: "Rp 200.000", status: "Lunas",    waktu: "11:22" },
  { id: "TRX-005", pelanggan: "Rudi Hermawan",  jenis: "Penjualan",  nominal: "Rp 35.000",  status: "Piutang",  waktu: "13:47" },
];

const stokMenipis = [
  { nama: "Charger Vivan 25W",      stok: 3,  minimal: 5 },
  { nama: "Tempered Glass iPhone",  stok: 2,  minimal: 5 },
  { nama: "Kabel Data Type-C Remax",stok: 4,  minimal: 5 },
];

const serviceAktif = [
  { no: "SRV-010", hp: "Samsung A15",    keluhan: "LCD Pecah",       status: "Dikerjakan",         teknisi: "Anan"   },
  { no: "SRV-011", hp: "Xiaomi Redmi 9", keluhan: "Baterai Bocor",   status: "Menunggu Sparepart", teknisi: "Baihaqi"},
  { no: "SRV-012", hp: "Vivo Y20",       keluhan: "Speaker Mati",    status: "Selesai",            teknisi: "Anan"   },
];

const statusColor = {
  "Dikerjakan":          "bg-blue-100 text-blue-700",
  "Menunggu Sparepart":  "bg-amber-100 text-amber-700",
  "Selesai":             "bg-emerald-100 text-emerald-700",
  "Menunggu":            "bg-slate-100 text-slate-600",
  "Diambil":             "bg-purple-100 text-purple-700",
};

const jenisColor = {
  "Penjualan": "bg-indigo-100 text-indigo-700",
  "Pulsa":     "bg-sky-100 text-sky-700",
  "Service":   "bg-orange-100 text-orange-700",
  "PPOB":      "bg-teal-100 text-teal-700",
};

const statusBayarColor = {
  "Lunas":   "bg-emerald-100 text-emerald-700",
  "DP":      "bg-amber-100 text-amber-700",
  "Piutang": "bg-rose-100 text-rose-700",
};

function Dashboard() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Selamat Datang, Owner 👋</h1>
        <p className="text-slate-500 text-sm mt-1">
          Berikut ringkasan operasional Gun's Cell hari ini —{" "}
          {new Date().toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
        </p>
      </div>

      {/* Kartu Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <KartuStat label="Pemasukan Hari Ini"  nilai="Rp 1.250.000" icon="💰" warna="indigo"  sub="+12% dari kemarin" />
        <KartuStat label="Transaksi Hari Ini"  nilai="24 Transaksi" icon="🛒" warna="emerald" sub="5 penjualan, 11 pulsa, 8 PPOB" />
        <KartuStat label="Service Aktif"        nilai="8 Unit"       icon="🔧" warna="amber"   sub="3 menunggu sparepart" />
        <KartuStat label="Piutang Berjalan"     nilai="Rp 475.000"  icon="📒" warna="rose"    sub="3 pelanggan" />
      </div>

      {/* Row 2: Transaksi terbaru + Stok menipis */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

        {/* Transaksi Terbaru */}
        <div className="xl:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center">
            <p className="font-semibold text-slate-800 text-sm">Transaksi Hari Ini</p>
            <button className="text-xs text-indigo-600 hover:underline">Lihat semua →</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-slate-500 border-b border-slate-100">
                  <th className="px-5 py-3 text-left font-medium">ID</th>
                  <th className="px-5 py-3 text-left font-medium">Pelanggan</th>
                  <th className="px-5 py-3 text-left font-medium">Jenis</th>
                  <th className="px-5 py-3 text-left font-medium">Nominal</th>
                  <th className="px-5 py-3 text-left font-medium">Status</th>
                  <th className="px-5 py-3 text-left font-medium">Waktu</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {transaksiHariIni.map((t) => (
                  <tr key={t.id} className="hover:bg-slate-50 transition">
                    <td className="px-5 py-3 font-mono text-xs text-slate-500">{t.id}</td>
                    <td className="px-5 py-3 font-medium text-slate-700">{t.pelanggan}</td>
                    <td className="px-5 py-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${jenisColor[t.jenis]}`}>
                        {t.jenis}
                      </span>
                    </td>
                    <td className="px-5 py-3 font-semibold text-slate-800">{t.nominal}</td>
                    <td className="px-5 py-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusBayarColor[t.status]}`}>
                        {t.status}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-slate-400 text-xs">{t.waktu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stok Menipis */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center">
            <p className="font-semibold text-slate-800 text-sm">⚠️ Stok Menipis</p>
            <button className="text-xs text-indigo-600 hover:underline">Kelola →</button>
          </div>
          <div className="divide-y divide-slate-100">
            {stokMenipis.map((s, i) => (
              <div key={i} className="px-5 py-3">
                <p className="text-sm font-medium text-slate-700 leading-snug">{s.nama}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-slate-400">Minimal: {s.minimal} pcs</span>
                  <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                    Sisa {s.stok} pcs
                  </span>
                </div>
                <div className="mt-2 w-full bg-slate-100 rounded-full h-1.5">
                  <div
                    className="bg-rose-400 h-1.5 rounded-full"
                    style={{ width: `${(s.stok / s.minimal) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Row 3: Service Aktif */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
        <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center">
          <p className="font-semibold text-slate-800 text-sm">🔧 Service Aktif</p>
          <button className="text-xs text-indigo-600 hover:underline">Lihat semua →</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-slate-500 border-b border-slate-100">
                <th className="px-5 py-3 text-left font-medium">No. Service</th>
                <th className="px-5 py-3 text-left font-medium">HP</th>
                <th className="px-5 py-3 text-left font-medium">Keluhan</th>
                <th className="px-5 py-3 text-left font-medium">Status</th>
                <th className="px-5 py-3 text-left font-medium">Teknisi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {serviceAktif.map((s) => (
                <tr key={s.no} className="hover:bg-slate-50 transition">
                  <td className="px-5 py-3 font-mono text-xs text-slate-500">{s.no}</td>
                  <td className="px-5 py-3 font-medium text-slate-700">{s.hp}</td>
                  <td className="px-5 py-3 text-slate-600">{s.keluhan}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColor[s.status]}`}>
                      {s.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-slate-600">{s.teknisi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;