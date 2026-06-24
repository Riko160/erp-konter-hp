import { useState } from "react";
import { FiMenu } from "react-icons/fi";

function Navbar({ activePage, setSidebarOpen }) {

  const [showNotif, setShowNotif] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const pageLabels = {
    dashboard: "Dashboard",
    barang:    "Master Barang",
    penjualan: "Penjualan",
    service:   "Service HP",
    keuangan:  "Keuangan",
  };

  const notifikasi = [
    { id: 1, pesan: "Stok Charger Vivan hampir habis (3 pcs)", waktu: "5 menit lalu", tipe: "warning" },
    { id: 2, pesan: "Service #SRV-012 sudah selesai dikerjakan", waktu: "30 menit lalu", tipe: "info" },
    { id: 3, pesan: "Piutang Budi Santoso jatuh tempo hari ini", waktu: "1 jam lalu", tipe: "danger" },
  ];

  return (
    <div className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between sticky top-0 z-10">
      <button
  onClick={() => setSidebarOpen(true)}
  className="lg:hidden"
>
  <FiMenu size={24} />
</button>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-slate-400">GCMS</span>
        <span className="text-slate-300">/</span>
        <span className="text-slate-800 font-semibold">
          {pageLabels[activePage] || activePage}
        </span>
      </div>

      {/* Kanan: notif + profil */}
      <div className="flex items-center gap-3 relative">

        {/* Tombol Notifikasi */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotif(!showNotif);
              setShowProfile(false);
            }}
            className="relative w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-500 transition"
          >
            🔔
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {showNotif && (
            <div className="absolute right-0 top-11 w-80 bg-white rounded-xl shadow-lg border border-slate-200 z-50">
              <div className="px-4 py-3 border-b border-slate-100">
                <p className="font-semibold text-sm text-slate-800">Notifikasi</p>
              </div>
              <div className="divide-y divide-slate-100">
                {notifikasi.map((n) => (
                  <div key={n.id} className="px-4 py-3 hover:bg-slate-50 cursor-pointer">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 text-base">
                        {n.tipe === "warning" ? "⚠️" : n.tipe === "danger" ? "🔴" : "ℹ️"}
                      </span>
                      <div>
                        <p className="text-xs text-slate-700 leading-snug">{n.pesan}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{n.waktu}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-2 border-t border-slate-100 text-center">
                <button className="text-xs text-indigo-600 hover:underline">
                  Lihat semua notifikasi
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Profil User */}
        <div className="relative">
          <button
            onClick={() => {
              setShowProfile(!showProfile);
              setShowNotif(false);
            }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition"
          >
            <div className="w-7 h-7 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
              O
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-xs font-semibold text-slate-800 leading-tight">Owner</p>
              <p className="text-xs text-slate-400 leading-tight">Gun's Cell</p>
            </div>
            <span className="text-slate-400 text-xs">▾</span>
          </button>

          {showProfile && (
            <div className="absolute right-0 top-11 w-44 bg-white rounded-xl shadow-lg border border-slate-200 z-50 py-1">
              <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                👤 Profil Saya
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                ⚙️ Pengaturan
              </button>
              <div className="border-t border-slate-100 mt-1 pt-1">
                <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50">
                  🚪 Keluar
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Navbar;