import * as React from "react";
import { Map, TileLayer } from "react-leaflet";
import { LatLngTuple } from "leaflet";

const defaultLatLng: LatLngTuple = [48.865572, 2.283523];
const zoom: number = 8;

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
        </div>

    )
}