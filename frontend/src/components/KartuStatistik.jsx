function KartuStatistik({judul, nilai}){
    return (
        <div className="bg-white rounded-xl shadow-md p-5">
            <h3 className="text-gray-500 text-sml">
                {judul}
            </h3>

            <h2 className="text 3xl font-bold mt-2">
                {nilai}
            </h2>
        </div>
    );
};

export default KartuStatistik;