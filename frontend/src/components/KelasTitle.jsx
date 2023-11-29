export default function KelasTitle({ title }) {
  return (
    <div id="title" className="bg-gray-300">
      <h1 className="text-3xl text-primary py-5 px-12 font-semibold">
        {title}
      </h1>
    </div>
  );
}
