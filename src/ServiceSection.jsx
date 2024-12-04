import { PropTypes } from "prop-types";
import ServiceCustom from "../src/img/Service-Custom.png";
import ServiceInfra from "../src/img/Service-Infra.png";
import ServiceSystem from "../src/img/Service-System.png";

ServiceCardComponent.propTypes = {
  className: PropTypes.string,
  contentTitle: PropTypes.string,
  contentDesc: PropTypes.string,
  img: PropTypes.string,
};

function ServiceCardComponent({ className, contentTitle, contentDesc, img }) {
  return (
    <div className={`flex gap-12 max-[800px]:gap-0 w-50%` + " " + className}>
      <div className="flex flex-col">
        <h2 className="pb-2 text-2xl font-extrabold max-[800px]:text-base">
          {contentTitle}
        </h2>
        <p className="px-5 py-2 font-bold bg-blue-600 max-[800px]:text-sm">
          {contentDesc}
        </p>
        <button className="px-5 py-2 text-base font-bold text-white bg-yellow-400 hover:bg-yellow-500">
          Pelajari Lebih Lanjut
        </button>
      </div>
      <img
        src={img}
        alt="Azkar Solution Image Service"
        className="w-[400px] h-auto self-center drop-shadow-md"
      />
    </div>
  );
}

export default function ServiceSections() {
  return (
    <section
      id="service"
      className="flex items-center flex-col justify-center w-screen h-[100%] pb-52 bg-blue-700 pt-52 z-20"
    >
      <div className="flex flex-col items-center justify-center gap-2 mb-[80px]">
        <h2 className="text-5xl font-extrabold max-[800px]:text-2xl">
          Layanan Kami
        </h2>
        <p className="px-5 mb-32 text-xl font-semibold bg-blue-500 max-[800px]:bg-transparent rounded-xl max-[800px]:text-center max-[800px]:text-base">
          Kami menawarkan berbagai layanan teknologi informasi untuk memenuhi
          kebutuhan bisnis Anda
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-12 max-[800px]:gap-0">
        <ServiceCardComponent
          className="w-[60%] h-[300px] max-[800px]:flex-col max-[800px]:h-[700px] max-[800px]:w-[80%]"
          contentTitle="1. Pengembangan Aplikasi Custom"
          contentDesc="Kami mengembangkan aplikasi berbasis web, desktop, dan mobile yang
            sesuai kebutuhan bisnis Anda. Dengan desain modern dan fitur yang
            disesuaikan, aplikasi kami membantu meningkatkan produktivitas."
          img={ServiceCustom}
        />
        <ServiceCardComponent
          className="flex-row-reverse w-[60%] h-[300px] max-[800px]:flex-col max-[800px]:h-[700px] max-[800px]:w-[80%]"
          contentTitle="2. Integrasi Sistem"
          contentDesc="
            Menghubungkan berbagai sistem bisnis Anda untuk memastikan aliran
            data yang lancar dan efisien. Solusi ini membantu mengurangi
            kesalahan manual dan meningkatkan kinerja operasional secara
            keseluruhan."
          img={ServiceSystem}
        />
        <ServiceCardComponent
          className="w-[60%] h-[300px] max-[800px]:flex-col max-[800px]:h-[700px] max-[800px]:w-[80%]"
          contentTitle="3. Manajemen Infrastruktur IT"
          contentDesc="Kami menyediakan pengelolaan infrastruktur IT, mulai dari server
            hingga jaringan dan penyimpanan data. Infrastruktur yang aman dan
            skalabel membantu menjaga kelangsungan bisnis Anda tanpa hambatan."
          img={ServiceInfra}
        />
      </div>
    </section>
  );
}
