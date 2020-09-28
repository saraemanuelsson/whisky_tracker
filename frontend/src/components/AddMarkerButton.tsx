import React, { useState } from "react";
import useAddMarker from "./customHooks/useAddMarker";

interface Props {};

const AddMarkerButton: React.FC<Props> = (props) => {
    const { setActivate, activate } = useAddMarker(false);

    return <button className="add-marker" onClick= {() => setActivate(!activate)}>+</button>
}

export default AddMarkerButton;