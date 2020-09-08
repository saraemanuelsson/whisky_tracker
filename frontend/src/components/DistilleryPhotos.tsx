import * as React from "react";
import { Distillery } from "../types/types"

interface Props {
    distilleries?: Distillery[],
    className?: string
}

export const DistilleryPhotos: React.FC<Props> = (props) => {
    return (
        <>
            <div className="box-for-pic-1">
                <p className="pic1">Placeholder for pic 1</p>
            </div>
            <div className="box-for-pic-2">
                <p className="pic1">Placeholder for pic 2</p>
            </div>
            <div className="box-for-pic-3">
                <p className="pic1">Placeholder for pic 3</p>
            </div>
        </>
    )
}