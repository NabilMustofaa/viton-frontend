import React from "react";
import { getAllRekomendasi } from "../utils/api";

function FavoritePage({ id }) {
  const [rekomendasi, setRekomendasi] = React.useState(null);

  React.useEffect(() => {
    async function fetchRekomendasi() {
      const { data } = await getAllRekomendasi({ id });
      setRekomendasi(data);
    }

    fetchRekomendasi();
  }, []);

  if (!rekomendasi) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="flex flex-wrap justify-center">
        {rekomendasi.map((rekomendasi) => (
          <img src={rekomendasi.fileUrl} alt={rekomendasi.caption}  className="w-[45%] p-2 border m-3 border-gray-300 rounded-lg"  />
        ))}
      </div>
    </div>
  );
}

export default FavoritePage;