import React, { useState, useContext, useEffect, useCallback } from "react";
import { useLeaflet, Marker } from "react-leaflet";
import L, { LeafletMouseEvent } from "leaflet";
import { LayerContext } from "../../context/LayerContext";

function useAddMarker(selected: boolean) {
    
    const { map } = useLeaflet();

    const { setPoint } = useContext(LayerContext);

    const [ activate, setActivate] = useState(selected);

    const markerEvent = useCallback(
        (e: LeafletMouseEvent) => {
            e.originalEvent.preventDefault();
            setPoint(<Marker position={e.latlng} />);
            e.originalEvent.stopPropagation();
        }, [setPoint]);

    useEffect(
        () => {
            map?.doubleClickZoom.disable()
            if (activate === true) {
                map?.on("dblclick", markerEvent);
            }
            return () => {
                map?.off("dblclick", markerEvent);
            }
        }, [map, activate, markerEvent]
    )

    return { activate, setActivate }
}

export default useAddMarker;