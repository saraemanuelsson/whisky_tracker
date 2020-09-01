import * as React from "react";
import { Whisky } from "../types/types"

interface Props {
    cupboard?: Whisky[],
    className?: string
}

export const CupboardList: React.FC<Props> = (props) => {
    return (
        <div className={props.className}>
            <h2>This will be a CupboardList!</h2>
        </div>
    )
}