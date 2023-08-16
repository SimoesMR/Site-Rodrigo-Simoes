"use client";

const DownloadCurriculo = () => {
  const downloadArquivoCurriculo = () => {
    const link = document.createElement("a");
    const pdfPath =
      process.env.NEXT_PUBLIC_PDF_PATH + "/CurriculoRodrigoSimoes.pdf";
    if (pdfPath) {
      link.href = pdfPath;
    }
    link.download = "CurriculoRodrigoSimoes.pdf";
    link.target = "_blank";
    link.click();
  };

  return (
    <button
      className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-2 py-2 border-none rounded-md ml-8"
      onClick={downloadArquivoCurriculo}
    >
      Curriculo
    </button>
  );
};

export default DownloadCurriculo;
