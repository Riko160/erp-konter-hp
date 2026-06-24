function TabelBarang({
  daftarBarang,
  editBarang,
  hapusBarang
}) {

  return (
    <div className="overflow-x-auto">

      <table className="w-full border border-gray-300">

        <thead>

          <tr className="bg-gray-100">

            <th className="border p-2">No</th>
            <th className="border p-2">Nama Barang</th>
            <th className="border p-2">Brand</th>
            <th className="border p-2">Harga Jual</th>
            <th className="border p-2">Stok</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Aksi</th>

          </tr>

        </thead>

        <tbody>

          {
            daftarBarang.length === 0 ? (

              <tr>

                <td
                  colSpan="7"
                  className="text-center p-4"
                >
                  Belum ada data barang
                </td>

              </tr>

            ) : (

              daftarBarang.map((item, index) => (

                <tr
                  key={index}
                  className="hover:bg-gray-50"
                >

                  <td className="border p-2">
                    {index + 1}
                  </td>

                  <td className="border p-2">
                    {item.namaBarang}
                  </td>

                  <td className="border p-2">
                    {item.brand}
                  </td>

                  <td className="border p-2">
                    Rp{" "}
                    {Number(item.hargaJual)
                      .toLocaleString("id-ID")}
                  </td>

                  <td className="border p-2">
                    {item.stok}
                  </td>

                  <td className="border p-2">

                    {
                      Number(item.stok) <= 5 ? (

                        <span className="bg-red-100 text-red-600 px-2 py-1 rounded">
                          Menipis
                        </span>

                      ) : (

                        <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
                          Aman
                        </span>

                      )
                    }

                  </td>

                  <td className="border p-2">

                    <div className="flex gap-2">

                      <button
                        onClick={() => editBarang(index)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => {
                          if (
                            confirm(
                              "Yakin ingin menghapus barang ini?"
                            )
                          ) {
                            hapusBarang(index);
                          }
                        }}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Hapus
                      </button>

                    </div>

                  </td>

                </tr>

              ))
            )
          }

        </tbody>

      </table>

    </div>
  );
}

export default TabelBarang;