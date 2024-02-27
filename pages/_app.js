import { ProgressiveImageSupportProvider } from "@components/image/ProgressiveImageSupportContext";
import SmartOutline from "@components/utils/SmartOutline";
import localFont from "next/font/local";
import SEO from "@components/seo";
import "../styles/style.css";
import { useRouter } from "next/router";
import Header from "@components/Header";
import Footer from "@components/Footer";

const fontMain = localFont({
  src: [
    {
      path: "../fonts/Sora-VariableFont.woff2",
    },
  ],
  fallback: ["ui-sans-serif"],
});
const fontDisplay = localFont({
  src: [
    {
      path: "../fonts/RoadRadio.woff2",
      weight: "400",
    },
    {
      path: "../fonts/RoadRadio-Thin_latin_subset.woff2",
      weight: "100",
    },
  ],
  fallback: ["ui-sans-serif"],
});

function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ProgressiveImageSupportProvider>
      <style jsx global>{`
        :root {
          --font-main: ${fontMain.style.fontFamily};
          --font-display: ${fontDisplay.style.fontFamily};
        }
      `}</style>

      <SmartOutline />
      <SEO
        description={pageProps.data.description}
        title={pageProps.data.title}
        seo={pageProps.seo}
      />
      <Header light={pageProps.logoLight} data={pageProps.header} />
      <Component key={router.pathname} {...pageProps} />
      <Footer data={pageProps.header} />
      {/* <a
        href="https://wa.me/79533507282"
        className="fixed bottom-0 right-0 z-50 m-8"
        rel="nofollow noreferrer"
        target="_blank"
      >
        <img
          src="/images/whatsapp.svg"
          alt="whatsapp"
          className="object-contain w-16 h-16"
        />
      </a> */}
    </ProgressiveImageSupportProvider>
  );
}

export default App;
