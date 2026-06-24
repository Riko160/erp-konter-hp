function SearchBarang({
  keyword,
  setKeyword
}) {

  return (
    <input
      type="text"
      placeholder="Cari Barang..."
      value={keyword}
      onChange={(e) =>
        setKeyword(e.target.value)
      }
      className="border p-2 rounded-lg"
    />
  );

}

export default SearchBarang;