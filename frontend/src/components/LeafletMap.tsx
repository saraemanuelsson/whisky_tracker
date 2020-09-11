import * as React from "react";
import { Map, TileLayer } from "react-leaflet";
import { LatLngTuple } from "leaflet";

const defaultLatLng: LatLngTuple = [56.788845, -4.3396];
const zoom: number = 7;

interface Props {
    className?: string
}

export const LeafletMap: React.FC<Props> = (props) => {
    return (
        <div className="map-div">
            <Map className={props.className} center={defaultLatLng} zoom={zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors">
                </TileLayer>
            </Map>
            <a href="https://leafletjs.com/" className="contributor-link">Leaflet</a>
            <p className="contributor-link">  | &copy;</p>
            <a href="https://www.openstreetmap.org/copyright" className="contributor-link">OpenStreetMap  </a>
            <p className="contributor-link"> contributors</p>
        </div>

    )
}