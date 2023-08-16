import DownloadCurriculo from "./downloadCurriculo";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-52 fixed top-0 left-0 right-0 z-50">
      <nav className="py-5 flex justify-between align-middle items-center dark:text-white">
        <ul className="flex px-4 underline">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/sobreMim" className="px-4 underline">
              Sobre Mim
            </Link>
          </li>
        </ul>
        <ul className="flex items-center">
          <li>
            <DownloadCurriculo></DownloadCurriculo>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
