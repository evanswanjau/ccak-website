import { Fade } from "react-reveal";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
).toString();

const options = {
    cMapUrl: "cmaps/",
    standardFontDataUrl: "standard_fonts/",
};

export const ResearchDownload = ({ data }) => {
    return (
        <Fade>
            <div className="w-60 text-center">
                <div className="Example__container">
                    <div className="Example__container__document">
                        <Document file={data.url} options={options}>
                            <Page pageNumber={1} />
                        </Document>
                    </div>
                </div>
                <div>
                    <a href={data.url} target="_blank" rel="noreferrer">
                        <button
                            href="/get-involved/become-a-member"
                            className="bg-[#EC7422] font-manjari leading-none pb-2 pt-3 px-5 text-white hover:bg-[#ce621b] rounded-md transition duration-300 ease-in-out tracking-widest"
                        >
                            DOWNLOAD
                        </button>
                    </a>
                </div>
            </div>
        </Fade>
    );
};
