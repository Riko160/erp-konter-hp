import {
  FiHome,
  FiBox,
  FiTag,
  FiTruck,
  FiShoppingCart,
  FiTool,
  FiSmartphone,
  FiArchive,
  FiDollarSign,
  FiBarChart2,
  FiSettings,
  FiLogOut,
  FiX,
} from "react-icons/fi";

function Sidebar({
  activePage,
  setActivePage,
  sidebarOpen,
  setSidebarOpen,
}) {
  const menus = [
    {
      title: "Dashboard",
      icon: <FiHome />,
      id: "dashboard",
    },
    {
      title: "Barang",
      icon: <FiBox />,
      id: "barang",
    },
    {
      title: "Kategori Barang",
      icon: <FiTag />,
      id: "kategori",
    },
    {
      title: "Supplier",
      icon: <FiTruck />,
      id: "supplier",
    },
    {
      title: "Penjualan",
      icon: <FiShoppingCart />,
      id: "penjualan",
    },
    {
      title: "Service HP",
      icon: <FiTool />,
      id: "service",
    },
    {
      title: "PPOB & Pulsa",
      icon: <FiSmartphone />,
      id: "ppob",
    },
    {
      title: "Gudang",
      icon: <FiArchive />,
      id: "gudang",
    },
    {
      title: "Keuangan",
      icon: <FiDollarSign />,
      id: "keuangan",
    },
    {
      title: "Laporan",
      icon: <FiBarChart2 />,
      id: "laporan",
    },
    {
      title: "Pengaturan",
      icon: <FiSettings />,
      id: "pengaturan",
    },
  ];

  return (
    <>
      {/* Overlay Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          fixed lg:static
          top-0 left-0
          z-50
          h-screen
          w-64
          bg-slate-900
          text-white
          flex flex-col
          transition-transform duration-300

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          lg:translate-x-0
        `}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-700">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-lg">
                G
              </div>

              <div>
                <h1 className="font-bold text-lg">
                  Gun's Cell
                </h1>

                <p className="text-xs text-slate-400">
                  Management System
                </p>
              </div>

            </div>

            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden"
            >
              <FiX size={22} />
            </button>

          </div>

        </div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto px-3 py-4">

          <p className="text-xs text-slate-500 uppercase tracking-wider mb-3 px-3">
            Menu Utama
          </p>

          <div className="space-y-1">

            {menus.map((menu) => (
              <button
                key={menu.id}
                onClick={() => {
                  setActivePage(menu.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition

                ${
                  activePage === menu.id
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }
                `}
              >
                <span className="text-lg">
                  {menu.icon}
                </span>

                <span>
                  {menu.title}
                </span>

              </button>
            ))}

          </div>

        </div>

        {/* Footer */}
        <div className="border-t border-slate-700 p-4">

          <button
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500 hover:text-white transition"
          >
            <FiLogOut />

            Logout
          </button>

          <p className="text-xs text-slate-500 mt-4 text-center">
            GCMS v1.0
          </p>

        </div>

      </aside>
    </>
  );
}

export default Sidebar;