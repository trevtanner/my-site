import { Box } from "@mui/material";
import { Document, Page, pdfjs } from "react-pdf";
import Layout from "../../layout/layout";
import Resume from './Trevor-Tanner-Resume(Official).pdf'



function ResumePdf() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    return(
<Layout>
<Box sx={{ alignItems: "center" }}>
 <Document file={Resume}>
     <Page pageIndex={0}/>
 </Document>
 </Box>
 </Layout>
    )
}

export default ResumePdf;