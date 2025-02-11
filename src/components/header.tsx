import DownloadResume from "./downloadResume";
import Link from "next/link";

const Header = () => {
  return (
    <header className="m-8 rounded-lg bg-white px-10 sm:px-20 lg:px-52 fixed top-0 left-0 right-0 z-50">
      <nav className="py-5 flex justify-between align-middle items-center">
        <ul className="flex px-1 sm:px-4 underline">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/aboutMe" className="pl-4 underline">
              About
            </Link>
          </li>
        </ul>
        <ul className="flex items-center">
          <li>
            <DownloadResume></DownloadResume>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
