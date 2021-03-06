import * as React from "react";
import { Distillery } from "../types/types"

interface Props {
    distillery?: Distillery,
    className?: string
}

export const DistilleryListItem: React.FC<Props> = (props) => {
    return (
        <div className={props.className}>
            <h2>This will be a DistilleryListItem!</h2>
        </div>
    )
}