import Kategori_Kelas from "../components/KategoriKelas";


const Kategori = () => {
  return (
    <section className="mt-20" id="mentor">
      <div className="flex flex-col py-10 padding-x   ">
        <div className="flex flex-col ">
          <h1 className="font-poppins text-3xl text-primary font-bold">Kategori Kursus</h1>
          <p className="mt-2 font-poppins text-sm text-gray-500">Jelajahi 6 kategori yang tersedia di sahabat umkm</p>
        </div>
     <Kategori_Kelas/>
        
      </div>
    </section>
  );
};

export default Kategori;
