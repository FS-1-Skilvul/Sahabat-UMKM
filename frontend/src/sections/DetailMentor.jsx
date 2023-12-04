export default function DetailMentor() {
  return (
    <section id="detail-mentor" className="max-w-3xl">
      <h2 className="mb-3 text-[28px] font-semibold text-gray-900">
        Pengajar Kelas
      </h2>
      <div className="border-2 border-primary rounded-bl-lg rounded-tr-lg p-5 w-fit">
        <div className="flex justify-center gap-5 mb-10 max-lg:mb-5 max-lg:flex-col max-lg:gap-5 max-lg:items-center">
          <div className="rounded-full overflow-hidden h-14 w-14 border-[1.5px] border-primary">
            <img
              src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-fit max-lg:text-center">
            <h3 className="text-primary text-[20px] font-semibold">
              Joko Anwar
            </h3>
            <span className="text-primary font-semibold">
              Ahli Manajemen Keuangan dan Konsultan Keuangan
            </span>
          </div>
        </div>
        <p className="max-lg:text-center">
          Joko Anwar adalah seorang profesional berpengalaman dalam bidang
          manajemen keuangan. Dengan latar belakang yang kaya dalam industri
          keuangan, ia telah memimpin banyak perusahaan dalam mengelola keuangan
          mereka dengan efisien.
        </p>
      </div>
    </section>
  );
}
