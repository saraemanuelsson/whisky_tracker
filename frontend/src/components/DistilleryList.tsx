import * as React from "react";
import { Distillery } from "../types/types"

interface Props {
    distilleries?: Distillery[],
    className?: string
}

export const DistilleryList: React.FC<Props> = (props) => {
    return (
        <div className={props.className}>
            <h2>This will be a DistilleryList!</h2>
        </div>
    )
}