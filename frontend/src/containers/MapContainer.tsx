import React, { useState } from "react"
import { Distillery, Whisky } from "../types/types"
import { LeafletMap } from "../components/LeafletMap"
import { DetailedInfo } from "../components/DetailedInfo"
import { DistilleryPhotos } from "../components/DistilleryPhotos"

interface Props {
    distilleries?: Distillery[]
    selected?: Distillery | Whisky
}

export const MapContainer: React.FC<Props> = (props) => {

    const [displayDistilleries, setDisplayDistilleries] = useState<Distillery[]>()
    const [selected, setSelected] = useState<Distillery | Whisky>()

    return (
        <>
            <div className="map-container-grid">
                <div className="grid-1-of-2">
                    <DetailedInfo className="detailed-info" />        
                    <DistilleryPhotos className="composition" />
                </div>
                <div className="map-box">
                    <LeafletMap className="map"/>
                </div>
            </div>
        </>
    )
}
