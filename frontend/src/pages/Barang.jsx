import { useState } from "react";
import ModalBarang from "../components/ModalBarang";
import dummyBarang from "../data/dummyBarang";

const KATEGORI = ["Charger", "Kabel Data", "Casing", "Tempered Glass", "Headset", "Powerbank", "Lainnya"];
const MEREK    = ["Vivan", "Robot", "Uneed", "Remax", "JBL", "Lainnya"];


const emptyForm = {
  namaBarang: "", kategori: "", merek: "", hargaModal: "", hargaJual: "", stok: "", stokMinimal: ""
};

function rupiahFormat(n) {
  return Number(n).toLocaleString("id-ID");
}

function Barang() {

  const [daftarBarang, setDaftarBarang]   = useState(dummyBarang);
  const [showModal, setShowModal]         = useState(false);
  const [editIndex, setEditIndex]         = useState(null);
  const [keyword, setKeyword]             = useState("");
  const [form, setForm]                   = useState(emptyForm);
  const [filterKategori, setFilterKategori] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function bukaModalTambah() {
    setForm(emptyForm);
    setEditIndex(null);
    setShowModal(true);
  }

  function bukaModalEdit(index) {
    const real = daftarBarangFilter[index];
    const realIndex = daftarBarang.indexOf(real);
    setForm({ ...real });
    setEditIndex(realIndex);
    setShowModal(true);
  }

  function simpanBarang() {
    if (!form.namaBarang || !form.hargaJual || !form.stok) return;

    if (editIndex !== null) {
      const copy = [...daftarBarang];
      copy[editIndex] = { ...form };
      setDaftarBarang(copy);
    } else {
      setDaftarBarang([...daftarBarang, { ...form }]);
    }

    setShowModal(false);
    setEditIndex(null);
    setForm(emptyForm);
  }

  function hapusBarang(index) {
    const real = daftarBarangFilter[index];
    const realIndex = daftarBarang.indexOf(real);
    if (confirm(`Yakin ingin menghapus "${real.namaBarang}"?`)) {
      setDaftarBarang(daftarBarang.filter((_, i) => i !== realIndex));
    }
  }

  const daftarBarangFilter = daftarBarang
    .filter((b) => b.namaBarang.toLowerCase().includes(keyword.toLowerCase()))
    .filter((b) => filterKategori ? b.kategori === filterKategori : true);

  const totalBarang  = daftarBarang.length;
  const stokMenipis  = daftarBarang.filter((b) => Number(b.stok) <= Number(b.stokMinimal)).length;

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Master Barang</h1>
          <p className="text-sm text-slate-500 mt-0.5">Kelola data barang dan stok konter</p>
        </div>
        <button
          onClick={bukaModalTambah}
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg flex items-center gap-2 transition"
        >
          + Tambah Barang
        </button>
      </div>

      {/* Kartu ringkasan */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white border border-slate-200 rounded-xl px-4 py-3">
          <p className="text-xs text-slate-500">Total Barang</p>
          <p className="text-xl font-bold text-slate-800">{totalBarang}</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl px-4 py-3">
          <p className="text-xs text-slate-500">Kategori</p>
          <p className="text-xl font-bold text-slate-800">{KATEGORI.length - 1}</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl px-4 py-3">
          <p className="text-xs text-slate-500">Stok Menipis</p>
          <p className={`text-xl font-bold ${stokMenipis > 0 ? "text-rose-600" : "text-emerald-600"}`}>
            {stokMenipis}
          </p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl px-4 py-3">
          <p className="text-xs text-slate-500">Total Hasil Filter</p>
          <p className="text-xl font-bold text-slate-800">{daftarBarangFilter.length}</p>
        </div>
      </div>

      {/* Filter + Search */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="🔍 Cari nama barang..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border border-slate-200 rounded-lg px-3 py-2 text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
        <select
          value={filterKategori}
          onChange={(e) => setFilterKategori(e.target.value)}
          className="border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
          <option value="">Semua Kategori</option>
          {KATEGORI.map((k) => <option key={k}>{k}</option>)}
        </select>
      </div>

      {/* Tabel */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-slate-500 border-b border-slate-100 bg-slate-50">
                <th className="px-4 py-3 text-left font-medium">No</th>
                <th className="px-4 py-3 text-left font-medium">Nama Barang</th>
                <th className="px-4 py-3 text-left font-medium">Kategori</th>
                <th className="px-4 py-3 text-left font-medium">Merek</th>
                <th className="px-4 py-3 text-right font-medium">Harga Modal</th>
                <th className="px-4 py-3 text-right font-medium">Harga Jual</th>
                <th className="px-4 py-3 text-center font-medium">Stok</th>
                <th className="px-4 py-3 text-center font-medium">Status</th>
                <th className="px-4 py-3 text-center font-medium">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {daftarBarangFilter.length === 0 ? (
                <tr>
                  <td colSpan="9" className="text-center py-12 text-slate-400">
                    <p className="text-3xl mb-2">📦</p>
                    <p className="text-sm">Belum ada data barang</p>
                    <button
                      onClick={bukaModalTambah}
                      className="mt-3 text-xs text-indigo-600 hover:underline"
                    >
                      + Tambah barang pertama
                    </button>
                  </td>
                </tr>
              ) : (
                daftarBarangFilter.map((item, index) => {
                  const menipis = Number(item.stok) <= Number(item.stokMinimal);
                  return (
                    <tr key={index} className="hover:bg-slate-50 transition">
                      <td className="px-4 py-3 text-slate-400">{index + 1}</td>
                      <td className="px-4 py-3 font-medium text-slate-800">{item.namaBarang}</td>
                      <td className="px-4 py-3">
                        <span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full">
                          {item.kategori || "-"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-600">{item.merek || "-"}</td>
                      <td className="px-4 py-3 text-right text-slate-500">
                        Rp {rupiahFormat(item.hargaModal)}
                      </td>
                      <td className="px-4 py-3 text-right font-semibold text-slate-800">
                        Rp {rupiahFormat(item.hargaJual)}
                      </td>
                      <td className="px-4 py-3 text-center font-bold text-slate-700">
                        {item.stok}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {menipis ? (
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-rose-100 text-rose-600">
                            Menipis
                          </span>
                        ) : (
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-emerald-100 text-emerald-600">
                            Aman
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => bukaModalEdit(index)}
                            className="text-xs bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded-lg transition"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => hapusBarang(index)}
                            className="text-xs bg-rose-500 hover:bg-rose-600 text-white px-3 py-1 rounded-lg transition"
                          >
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Tambah / Edit */}
    <ModalBarang
    showModal={showModal}
    setShowModal={setShowModal}
    form={form}
    handleChange={handleChange}
    KATEGORI={KATEGORI}
    MEREK={MEREK}
    rupiahFormat={rupiahFormat}
    simpanBarang={simpanBarang}
    editIndex={editIndex}
    />
    </div>
  );
}

export default Barang;