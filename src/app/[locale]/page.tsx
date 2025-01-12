import Footer from "@/components/Footer/Footer";
import FormLayout from "@/components/FormLayout/FormLayout ";
import MapViewer from "@/components/MapViewer/MapViewer";
import Navbar from "@/components/Navbar/Navbar";
import TextSection from "@/components/TextSection/TextSection";

export default async function Home() {
  return (
    <main>
      <div className="bg-custom-gradient">
        <Navbar />
        <FormLayout />
      </div>
      <MapViewer />
      <TextSection />
      <Footer />
    </main>
  );
}
