import AvatarHome from "../src/img/Avatar-Home.png";

export default function AboutSections() {
  return (
    <section
      id="about"
      className="flex items-center flex-row justify-center self-center w-screen h-[70vh] max-[800px]:h-[120vh]"
    >
      <div className="container flex flex-row items-center justify-center max-[800px]:flex-col">
        <div className="flex flex-col w-[60%] justify-center items-center gap-5">
          <h2 className="text-6xl font-extrabold drop-shadow-md max-[800px]:text-2xl max-[800px]:mt-32">
            Tentang Kami
          </h2>
          <p className="text-base font-bold bg-yellow-400 px-12 max-[800px]:px-5 py-5 w-[500px] max-[800px]:w-[90vw]">
            Azkar Solution adalah penyedia solusi IT yang berdedikasi untuk
            membantu bisnis Anda berkembang melalui teknologi. Dengan pengalaman
            dan keahlian di berbagai bidang, kami berkomitmen untuk memberikan
            solusi inovatif yang disesuaikan dengan kebutuhan spesifik Anda.
          </p>
        </div>
        <img
          src={AvatarHome}
          className="w-[50%] self-center flex -z-10 max-[800px]:w-[100%] max-[800px]:self-end"
          alt="Avatar Home Azkar Solution"
        />
      </div>
    </section>
  );
}
