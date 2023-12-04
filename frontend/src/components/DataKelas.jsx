import { Link } from "react-router-dom";

const formatDuration = (duration) => {
  if (!duration) {
    return "";
  }
  const [hours, minutes, seconds] = duration.split(":");
  console.log("Hours:", hours);
  console.log("Minutes:", minutes);
  console.log("Seconds:", seconds);

  const formattedDuration = [];
  formattedDuration.push(`${parseInt(hours, 10)} jam`);
  formattedDuration.push(`${parseInt(minutes, 10)} menit`);
  formattedDuration.push(`${parseInt(seconds, 10)} detik`);
  return formattedDuration.join(" ");
};

export default function DataKelas({ data }) {
  const formattedDuration = formatDuration(data.durasi);
  console.log(formattedDuration);
  console.log(data.durasi); // Log the value to check its format
  return (
    <div
      id="class-data"
      className="flex max-sm:flex-col items-center mt-10 px-12 max-sm:px-0 gap-10"
    >
      <img src={data.gambar} alt="" className="max-w-xs max-sm:w-full" />
      <div>
        <span
          id="price"
          className="text-xl bg-blue-keuangan text-primary px-7 py-[2px] rounded-2xl"
        >
          {`Rp${data.harga}`}
        </span>
        <p id="duration" className="mt-2 text-gray-600">
          {formattedDuration}
        </p>
        <Link to={`/user/payment/${data.id}`}>
          <button className="border-[1.5px] border-primary bg-primary text-white px-5 py-1 rounded-lg mt-3 duration-300 hover:bg-white hover:text-primary">
            Beli Kelas
          </button>
        </Link>
      </div>
    </div>
  );
}
