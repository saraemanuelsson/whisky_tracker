import React, { useEffect, useState } from "react"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import { LatLngTuple } from "leaflet"
import { useForm } from "react-hook-form"

interface Props {
    className?: string
}

export const LeafletMap: React.FC<Props> = (props) => {

    const defaultLatLng: LatLngTuple = [56.788845, -4.3396]
    const zoom: number = 7
    const [ marker, setMarker ] = useState<Array<number>>([0,0])
    const [ addNewDistillery, setAddNewDistillery ] = useState<boolean>(false)
    const { register, handleSubmit, watch, errors } = useForm()

    const handleClick = (event:any) => {
        console.log(event.latlng);
        
        if (addNewDistillery) {
            const clickedLocation: Array<number> = [event.latlng.lat, event.latlng.lng]
            setMarker(clickedLocation)
        }
    }

   const handleLogin = () => {

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
                            <form onSubmit={handleSubmit(handleLogin)}>
                                <label htmlFor="distillery_name"></label>
                                <input type="text" name="distillery_name" placeholder="Distillery" ref={register({required: true})}/>
                                {errors.distillery_name && <span>Required field</span>}
                                <label htmlFor="region"></label>
                                <input type="dropdown" name="region" placeholder="Region" ref={register({required: true})}/>
                                {errors.region && <span>Required field</span>}
                                <input type="submit" value="Save"/>
                            </form>
                        </Popup>
                </Marker>
            </Map>
            <button style={{float: "right"}} onClick={() => setAddNewDistillery(true)}>+</button>
            <p><a href="https://leafletjs.com/" className="contributor-link">Leaflet</a> | &copy;<a href="https://www.openstreetmap.org/copyright" className="contributor-link">OpenStreetMap  </a> contributors</p>

        </div>

    )
}