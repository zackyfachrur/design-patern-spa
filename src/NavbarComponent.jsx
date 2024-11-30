import { PropTypes } from "prop-types";
import { useMediaQuery } from "react-responsive";

ListComponent.propTypes = {
  className: PropTypes.string,
  Href: PropTypes.string,
  Content: PropTypes.string,
  Icon: PropTypes.object,
};

function ListComponent({ className, Href, Content, Icon }) {
  return (
    <>
      <li className="py-2">
        <a href={Href} className={className} aria-current="page">
          {Icon} {Content}
        </a>
      </li>
    </>
  );
}

export default function NavbarComponents() {
  const isDekstop = useMediaQuery({ query: "(min-width: 801px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <nav className="flex items-center justify-center w-full">
      <div className="bg-gray-900 w-[700px] flex justify-around max-[800px]:justify-center max-[800px]:top-0 items-center rounded-full fixed top-2 py-5 drop-shadow-md z-50 max-[800px]:flex-col max-[800px]:gap-2 max-[800px]:sticky max-[800px]:rounded-none">
        <ul className="flex items-center justify-center gap-5">
          <div className="flex flex-row gap-5">
            {isDekstop && (
              <li>
                <ListComponent
                  Href="/#home"
                  className="text-base font-semibold hover:text-white hover:underline hover:underline-offset-2 decoration-blue-700"
                  Content="Home"
                  Icon={<i className="ri-home-5-line"></i>}
                />
              </li>
            )}
            {isMobile && (
              <li>
                <ListComponent
                  Href="/#home"
                  className="text-base font-semibold hover:text-white hover:underline hover:underline-offset-2 decoration-blue-700"
                  Content={null}
                  Icon={<i className="text-2xl ri-home-5-line"></i>}
                />
              </li>
            )}
            {isDekstop && (
              <li>
                <ListComponent
                  Href="/#about"
                  className="text-base font-semibold hover:text-white hover:underline hover:underline-offset-2 decoration-blue-700"
                  Content="About"
                  Icon={<i className="ri-user-line"></i>}
                />
              </li>
            )}
            {isMobile && (
              <li>
                <ListComponent
                  Href="/#about"
                  className="text-base font-semibold hover:text-white hover:underline hover:underline-offset-2 decoration-blue-700"
                  Content={null}
                  Icon={<i className="text-2xl ri-user-line"></i>}
                />
              </li>
            )}
            {isDekstop && (
              <li>
                <ListComponent
                  Href="/#service"
                  className="text-base font-semibold hover:text-white hover:underline hover:underline-offset-2 decoration-blue-700"
                  Content="Services"
                  Icon={<i className="ri-customer-service-line"></i>}
                />
              </li>
            )}
            {isMobile && (
              <li>
                <ListComponent
                  Href="/#service"
                  className="text-base font-semibold hover:text-white hover:underline hover:underline-offset-2 decoration-blue-700"
                  Content={null}
                  Icon={<i className="text-2xl ri-customer-service-line"></i>}
                />
              </li>
            )}
            {isDekstop && (
              <li>
                <ListComponent
                  Href="/#contact"
                  className="text-base font-semibold hover:text-white hover:underline hover:underline-offset-2 decoration-blue-700"
                  Content="Contact"
                  Icon={<i className="ri-smartphone-line"></i>}
                />
              </li>
            )}
            {isMobile && (
              <li>
                <ListComponent
                  Href="/#contact"
                  className="text-base font-semibold hover:text-white hover:underline hover:underline-offset-2 decoration-blue-700"
                  Content={null}
                  Icon={<i className="text-2xl ri-smartphone-line"></i>}
                />
              </li>
            )}
          </div>
        </ul>
        <div className="flex flex-row">
          <button
            className="px-5 py-2 font-semibold text-white bg-blue-700 hover:bg-blue-500 rounded-l-xl"
            onClick={() => window.location.assign("/register")}
          >
            Register
          </button>
          <button
            className="px-5 py-2 font-semibold text-white bg-blue-700 hover:bg-blue-500 rounded-r-xl"
            onClick={() => window.location.assign("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
