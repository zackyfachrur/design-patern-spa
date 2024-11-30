import AvatarFooter from "./img/Avatar-Home.png";

export default function FooterComponents() {
  return (
    <footer className="w-screen bg-blue-700 shadow  h-[30vh] text-white">
      <div className="w-full max-w-screen-xl p-4 mx-auto text-white md:py-8">
        <div className="text-white sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse"
          >
            <img src={AvatarFooter} className="h-24" alt="Footer Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Azkar Solution
            </span>
          </a>
          <ul className="flex flex-wrap items-center justify-center mb-6 text-base font-bold text-white">
            <li>
              <a href="/#home" className="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="/#about" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="/#service" className="hover:underline me-4 md:me-6">
                Services
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 text-white border-gray-200 sm:mx-auto lg:my-8" />
        <span className="flex items-center justify-center text-sm sm:text-center">
          © {new Date().getFullYear()}
          <a href="/" className="hover:underline">
            {" "}
            Azkar Solution
          </a>
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
