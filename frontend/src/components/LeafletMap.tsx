import React, { useEffect, useState } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";

interface Props {
    className?: string
}

export const LeafletMap: React.FC<Props> = (props) => {

    const defaultLatLng: LatLngTuple = [56.788845, -4.3396];
    const zoom: number = 7;
    const [marker, setMarker] = useState<Array<number>>([0,0])

    // const addDistilleryButton = createLeafletElement(props: )

    const handleClick = (event:any) => {
        const clickedLocation: Array<number> = [event.latlng.lat, event.latlng.lng]
        setMarker(clickedLocation)
    }
    
    return (
        <div className="map-div">
            <Map className={props.className} center={defaultLatLng} zoom={zoom} onClick={handleClick}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors">
                </TileLayer>
                <Marker position={[marker[0], marker[1]]}>
                        <Popup>
                            <span></span>
                        </Popup>
                </Marker>
            </Map>
            <p><a href="https://leafletjs.com/" className="contributor-link">Leaflet</a> | &copy;<a href="https://www.openstreetmap.org/copyright" className="contributor-link">OpenStreetMap  </a> contributors</p>
        </div>

    )
}