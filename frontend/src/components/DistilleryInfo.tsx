import * as React from "react";
import { Distillery } from "../types/types"

interface Props {
    distillery?: Distillery,
    className?: string
}

export const DistilleryInfo: React.FC<Props> = (props) => {
    return (
        <div className={props.className}>
            <h2>DistilleryInfo tbd!</h2>
        </div>
    )
}