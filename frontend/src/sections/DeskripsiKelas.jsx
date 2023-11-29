export default function DeskripsiKelas({ desc }) {
  return (
    <section id="deskripsi-kelas">
      <h2 className="mb-3 text-[28px] font-semibold text-gray-900">
        Deskripsi Kelas
      </h2>
      <div className="border-2 border-primary rounded-bl-lg rounded-tr-lg p-5 w-fit">
        <p>{desc}</p>
      </div>
    </section>
  );
}
