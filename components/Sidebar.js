import Link from "next/link";
import Image from "next/image";

const Sidebar = ({ isOpen, toggle, route }) => {
  return (
    <div
      className={
        isOpen
          ? "fixed z-30 bg-white top-0 w-full h-full lg:hidden translate-y-0 duration-700 transform ease-out "
          : "translate-y-[-100%]"
      }
    >
      <div className="absolute  top-0 right-0 z-30 w-full bg-bgCol h-full text-main overflow-hidden flex flex-col items-center justify-center">
        <div className="flex py-4 items-center w-full justify-between px-4 sm:px-0 z-10 max-w-[500px]">
          <Link href="/" passHref>
            <Image
              className="object-contain cursor-pointer"
              src="/icons/logo_black.svg"
              alt="galeri keramik logo"
              width={125}
              height={45}
            />
          </Link>

          <div className="cursor-pointer z-10" onClick={toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="main"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="w-full flex flex-col h-full justify-start items-center pt-[160px] z-40">
          <ul
            className="px-4 pt-3 text-[22px] -mt-40 text-subTwo w-full z-10 max-w-[500px]"
            onClick={toggle}
          >
            <li className="w-full">
              <Link href="/" passHref>
                <a className={`block py-3 px-5`}>HOME</a>
              </Link>
            </li>
            <li className="w-full">
              <Link href="/product" passHref>
                <a className={`block py-3 px-5`}>PRODUCTS</a>
              </Link>
            </li>
            <li className="w-full">
              <Link href="/about" passHref>
                <a className={`block py-3 px-5`}>ABOUT US</a>
              </Link>
            </li>
          </ul>
          <div className="flex justify-center text-[16px] px-4 absolute bottom-0 py-[20px] bg-[#242424] text-white w-full">
            <div className="flex flex-col gap-[8px] max-w-[500px] w-full">
              <p className="text-[#FFE8AC]">Contact us for more information</p>
              <p>Baliwerti 118, Surabaya</p>
              <p>+62 8510 8889 991</p>
              <p>galerikeramik@yahoo.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
