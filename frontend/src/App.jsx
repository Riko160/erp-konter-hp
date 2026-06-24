import { useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Barang from "./pages/Barang";
import Kategori from "./pages/Kategori";
import Supplier from "./pages/Supplier";
import Penjualan from "./pages/Penjualan";
import Service from "./pages/Service";
import PPOB from "./pages/PPOB";
import Gudang from "./pages/Gudang";
import Keuangan from "./pages/Keuangan";
import Laporan from "./pages/Laporan";
import Pengaturan from "./pages/Pengaturan";

function App() {

  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">

    <Sidebar
      activePage={activePage}
      setActivePage={setActivePage}
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
    />

      <div className="flex-1">

        <Navbar
        activePage={activePage}
        setSidebarOpen={setSidebarOpen}
        />

        <main className="p-4 md:p-6">

          {
            activePage === "dashboard" &&
            <Dashboard />
          }

          {
            activePage === "barang" &&
            <Barang />
          }

          {
            activePage === "kategori" &&
            <Kategori />
          }

          {
            activePage === "supplier" &&
            <Supplier />
          }

          {
            activePage === "penjualan" &&
            <Penjualan />
          }

          {
            activePage === "service" &&
            <Service />
          }

          {
            activePage === "ppob" &&
            <PPOB />
          }

          {
            activePage === "gudang" &&
            <Gudang />
          }

          {
            activePage === "keuangan" &&
            <Keuangan />
          }

          {
            activePage === "laporan" &&
            <Laporan />
          }

          {
            activePage === "pengaturan" &&
            <Pengaturan />
          }

        </main>

      </div>

    </div>
  );
}

export default App;