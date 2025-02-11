import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const RedesSociais = () => {
  return (
    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
      <a
        href="https://www.linkedin.com/in/rodrigo-meneghetti-simoes/"
        target="_blank"
        className="text-blue-600"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://instagram.com/rodrigo.msimoes?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
        target="_blank"
        className="text-red-600"
      >
        <AiFillInstagram />
      </a>
      <a href="https://github.com/SimoesMR" target="_blank">
        <AiFillGithub />
      </a>
    </div>
  );
};

export default RedesSociais;
