function ModalBarang({
  showModal,
  setShowModal,
  form,
  handleChange,
  KATEGORI,
  MEREK,
  rupiahFormat,
  simpanBarang,
  editIndex
}) {

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">

      <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl">

        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">

          <h2 className="text-base font-bold text-slate-800">
            {editIndex !== null ? "✏️ Edit Barang" : "➕ Tambah Barang"}
          </h2>

          <button
            onClick={() => setShowModal(false)}
            className="text-slate-400 hover:text-slate-600 text-xl"
          >
            ×
          </button>

        </div>

        <div className="px-6 py-5 space-y-4">

          <input
            name="namaBarang"
            value={form.namaBarang}
            onChange={handleChange}
            placeholder="Nama Barang"
            className="w-full border rounded-lg px-3 py-2"
          />

          <select
            name="kategori"
            value={form.kategori}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">Pilih Kategori</option>

            {KATEGORI.map((k) => (
              <option key={k}>{k}</option>
            ))}
          </select>

          <select
            name="merek"
            value={form.merek}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">Pilih Merek</option>

            {MEREK.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>

          <input
            name="hargaModal"
            type="number"
            value={form.hargaModal}
            onChange={handleChange}
            placeholder="Harga Modal"
            className="w-full border rounded-lg px-3 py-2"
          />

          <input
            name="hargaJual"
            type="number"
            value={form.hargaJual}
            onChange={handleChange}
            placeholder="Harga Jual"
            className="w-full border rounded-lg px-3 py-2"
          />

          <input
            name="stok"
            type="number"
            value={form.stok}
            onChange={handleChange}
            placeholder="Stok"
            className="w-full border rounded-lg px-3 py-2"
          />

          <input
            name="stokMinimal"
            type="number"
            value={form.stokMinimal}
            onChange={handleChange}
            placeholder="Stok Minimal"
            className="w-full border rounded-lg px-3 py-2"
          />

          {
            form.hargaModal &&
            form.hargaJual && (
              <div className="bg-indigo-50 p-3 rounded-lg text-sm">

                Margin :

                Rp {rupiahFormat(
                  Number(form.hargaJual) -
                  Number(form.hargaModal)
                )}

              </div>
            )
          }

        </div>

        <div className="px-6 py-4 border-t flex justify-end gap-2">

          <button
            onClick={() => setShowModal(false)}
            className="px-4 py-2 border rounded-lg"
          >
            Batal
          </button>

          <button
            onClick={simpanBarang}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
          >
            {editIndex !== null
              ? "Update"
              : "Tambah Barang"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default ModalBarang;