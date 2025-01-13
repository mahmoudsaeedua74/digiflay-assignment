import { useTranslations } from "next-intl";
import PartDescription from "../PartDescription/PartDescription";
import Map from "../Map/Map";

export default function MapViewer() {
  const t = useTranslations("Part");
  return (
    <section className="bg-[#FCFCFE]">
      <PartDescription title={t("Part 2")} content={t("Contact 2")} />
      <Map />
    </section>
  );
}
