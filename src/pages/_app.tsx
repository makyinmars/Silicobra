import "../styles/globals.css"
import type { AppType } from "next/dist/shared/lib/utils"
import { PDFViewer } from "@react-pdf/renderer"
import MyDocument from "./pdf"

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps}>
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
    </Component>
  )
}

export default MyApp
