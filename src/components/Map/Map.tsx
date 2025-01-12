"use client";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styles from "./Map.module.css";
import { useLocale, useTranslations } from "next-intl";

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});
export default function Map() {
  const t = useTranslations("Map");
  // Digifly Group >  Latitude, Longitude
  const position: [number, number] = [30.0616113, 31.3368422];
  const local = useLocale();
  let x;
  //if local ===ar it's change the offset of tooltip to make it look at marker
  if (local === "ar") {
    x = 320;
  } else x = 0;
  return (
    <div className={styles.mapContainer}>
      <div className={`${styles.foggy} ${styles.top}`}></div>
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={true}
        zoomControl={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Tooltip
            direction="top"
            offset={[x, -70]}
            opacity={1}
            permanent
            className={`${styles.mapMark}`}
          >
            <div className="max-w-[312px] h-auto text-wrap overflow-hidden text-lg px-6 py-4 before:left-0">
              <p className=" text-xl max-w-40">
                <span className={styles.markColor}>{t("CompanyName")}</span>{" "}
                <span className="font-bold">{t("CompanyNameSecond")}</span>{" "}
                {t("Message")}
              </p>
            </div>
          </Tooltip>
        </Marker>
      </MapContainer>
      <div className={`${styles.foggy} ${styles.bottom}`}></div>
    </div>
  );
}
