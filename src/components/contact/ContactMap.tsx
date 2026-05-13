import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default Leaflet marker icon paths for Vite bundling
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

const ContactMap = () => {
  useEffect(() => {
    // @ts-expect-error private API
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({ iconRetinaUrl: iconRetina, iconUrl, shadowUrl });
  }, []);

  return (
    <div className="rounded-2xl overflow-hidden scrapbook-shadow border-4 border-white" style={{ height: 320 }}>
      <MapContainer center={[-6.5583, 106.7326]} zoom={17} style={{ height: "100%", width: "100%" }} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-6.5583, 106.7326]}>
          <Popup>
            <strong>IPB Mengajar</strong>
            <br />
            Student Center IPB Dramaga Lt.2
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ContactMap;
