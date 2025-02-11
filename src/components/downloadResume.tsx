"use client";

const DownloadResume = () => {
  const downloadFileResume = () => {
    const link = document.createElement("a");
    const pdfPath =
      process.env.NEXT_PUBLIC_PDF_PATH + "/ResumeRodrigoSimoes.pdf";
    if (pdfPath) {
      link.href = pdfPath;
    }
    link.download = "ResumeRodrigoSimoes.pdf";
    link.target = "_blank";
    link.click();
  };

  return (
    <button
      className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-2 py-2 border-none rounded-md ml-8"
      onClick={downloadFileResume}
    >
      Resume
    </button>
  );
};

export default DownloadResume;
