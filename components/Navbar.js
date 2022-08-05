import Link from "next/link";
import Image from "next/image";

const Navbar = ({ toggle, route, router }) => {
  return (
    <nav
      className="flex justify-center items-center relative top-0 z-30 px-4 py-2 md:px-0 w-full"
      role="navigation"
    >
      <div className="flex justify-between items-center w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] pt-2 border-b">
        <div className="flex space-x-10 items-center justify-center text-black">
          <div className="flex items-center relative w-[125px] h-[45px] md:w-[170px] md:h-[65px] xl:w-[224px] xl:h-[82px] text-black">
            <Link href="/" passHref>
              <Image
                className="object-contain cursor-pointer"
                src="/icons/logo_black.svg"
                alt="galeri keramik logo"
                layout="fill"
              />
            </Link>
          </div>
          <Link className="p-4" href="/" passHref>
            <a
              className={`hover:opacity-100 opacity-80 items-center gap-2 hidden md:flex text-[16px]`}
            >
              HOME
            </a>
          </Link>
          <Link className="p-4 hidden md:flex" href="/product" passHref>
            <a
              className={`hover:opacity-100 opacity-80 items-center gap-2 hidden md:flex text-[16px]`}
            >
              PRODUCTS
            </a>
          </Link>
          <Link className="p-4 hidden md:flex" href="/about" passHref>
            <a
              className={`hover:opacity-100 opacity-80 items-center gap-2 hidden md:flex text-[16px]
              }`}
            >
              ABOUT US
            </a>
          </Link>
        </div>
        <div className="cursor-pointer md:hidden" onClick={toggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="main"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <Link href="/#contact" passHref>
          <a className="hidden md:flex justify-center items-center gap-[10px]">
            <Image
              className="object-contain cursor-pointer "
              src="/icons/location.svg"
              alt="galeri keramik logo"
              width={20}
              height={20}
            />
            <p className="hidden lg:flex">Baliwerti 118, Surabaya</p>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
