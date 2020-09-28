import * as React from "react";
import { Map, TileLayer, LayerGroup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import { LayerContext } from "../context/LayerContext";
import AddMarkerButton from "./AddMarkerButton";

const defaultLatLng: LatLngTuple = [56.788845, -4.3396];
const zoom: number = 7;

interface Props {
    className?: string
}

export const LeafletMap: React.FC<Props> = (props) => {
    
    const { point } = React.useContext(LayerContext);
    
    return (
        <div className="map-div">
            <Map className={props.className} center={defaultLatLng} zoom={zoom}>
                <LayerGroup>
                    {point}
                </LayerGroup>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors">
                </TileLayer>
            </Map>
            <AddMarkerButton />
            <p><a href="https://leafletjs.com/" className="contributor-link">Leaflet</a> | &copy;<a href="https://www.openstreetmap.org/copyright" className="contributor-link">OpenStreetMap  </a> contributors</p>
        </div>

    )
}