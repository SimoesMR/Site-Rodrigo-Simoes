import { BsFillMoonStarsFill } from "react-icons/bs";
import DownloadCurriculo from "./downloadCurriculo";
import Link from "next/link";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (setDarkMode: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  return (
    <header className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-52 fixed top-0 left-0 right-0 z-50">
      <nav className="py-5 flex justify-between align-middle items-center dark:text-white">
        <div>
          <Link href="/" className="px-4 underline">
            Home
          </Link>
          <Link href="/sobreMim" className="px-4 underline">
            Sobre Mim
          </Link>
        </div>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl"
            />
          </li>
          <li>
            <DownloadCurriculo></DownloadCurriculo>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
