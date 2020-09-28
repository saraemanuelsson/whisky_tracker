import * as React from "react";
import { Distillery, Whisky } from "../types/types";
import { LeafletMap } from "../components/LeafletMap";
import { DetailedInfo } from "../components/DetailedInfo";
import { DistilleryPhotos } from "../components/DistilleryPhotos";
import { LayerContextProvider } from "../context/LayerContext";

interface Props {
    distilleries?: Distillery[];
}

interface State {
    displayDistilleries: Distillery[];
    selected?: Distillery | Whisky;
}

export class MapContainer extends React.Component<Props, State> {

    state: State = {
        displayDistilleries: [],
        selected: undefined
    }

    componentDidMount() {
        // Grab three random distilleries and set pics
    }

    render() {
        return (
            <>
                <div className="map-container-grid">
                    <div className="grid-1-of-2">
                        <DetailedInfo className="detailed-info" />        
                        <DistilleryPhotos className="composition" />
                    </div>
                    <div className="map-box">
                        <LayerContextProvider>
                            <LeafletMap className="map"/>
                        </LayerContextProvider>
                    </div>
                </div>
            </>
        )
    }
}
