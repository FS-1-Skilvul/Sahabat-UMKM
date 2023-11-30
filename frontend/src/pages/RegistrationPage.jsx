const RegistrationPage = () => {
  return (
    <div className="h-screen flex flex-row justify-around items-center mx-auto">
      <h1 className=" text-6xl text-center  font-medium">
        BERGABUNG <br /> BERSAMA KAMI
      </h1>
      <form
        action="#"
        className="p-6 flex flex-col border-4 border-umkm3 w-96 rounded h-5/6 flex flex-col justify-between"
      >
        <div>
          <h3 className="text-center font-semibold text-2xl">Masuk</h3>
          <label htmlFor="nama" className="block font-bold mb-2">
            Nama Lengkap
          </label>
          <input
            type="text"
            name="nama"
            id="nama"
            className="border-2 border-umkm3 rounded-[16px] w-full h-10 px-2"
          />
          {/* login input */}
          <label htmlFor="email" className="block font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-2 border-umkm3 rounded-[16px] w-full h-10 px-2"
          />
          <label htmlFor="password" className="block font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border-2 border-umkm3 rounded-[16px] w-full h-10 px-2"
          />
          <label htmlFor="konfirmasipassword" className="block font-bold mb-2">
            Konfirmasi Password
          </label>
          <input
            type="password"
            name="konfirmasipassword"
            id="konfirmasipassword"
            className="border-2 border-umkm3 rounded-[16px] w-full h-10 px-2"
          />
          <p className="text-end text-red-500 font-semibold my-1">
            Lupa Password?
          </p>
        </div>

        <div>
          <button className="bg-umkm1 p-3 text-white font-semibold rounded-[16px] w-[100%]">
            Daftar
          </button>
          <p className="text-center mx-2">
            Sudah Punya Akun?{" "}
            <span className="text-blue-500 font-semibold">Masuk</span>
          </p>
        </div>
      </form>
    </div>
  );
};
