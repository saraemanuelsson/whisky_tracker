import * as React from "react";
import { Distillery, Whisky } from "../types/types"

interface Props {
    selected?: Distillery | Whisky,
    className?: string
}

export const DetailedInfo: React.FC<Props> = (props) => {
    return (
        <div className={props.className}>
            <h2>Detailed info tbd!</h2>
        </div>
    )
}