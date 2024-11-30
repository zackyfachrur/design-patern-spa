export default function HomeSections() {
  return (
    <section
      className="flex w-[100%] max-[800px]:w-[100%] justify-center items-center h-[50vh] bg-blue-700"
      id="home"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-4xl font-extrabold text-white drop-shadow-lg max-[800px]:text-base">
          Selamat datang di Website Azkar Solution
        </h2>
        <p className="px-5 text-xl font-bold bg-yellow-400 max-[800px]:text-sm text-center max-[800px]:w-full">
          Solusi IT Terbaik untuk Meningkatkan Produktivitas Anda
        </p>
        <div className="flex flex-row gap-2 max-[800px]:text-xl max-[800px]:flex-col">
          <button className="px-5 py-2 text-2xl max-[800px]:text-xl font-bold text-white bg-blue-500 rounded-full hover:bg-blue-400 max-[800px]:px-32">
            Get in touch
          </button>
          <button className="px-5 py-2 text-2xl font-bold max-[800px]:text-xl text-white bg-gray-800 rounded-full hover:bg-gray-700">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
