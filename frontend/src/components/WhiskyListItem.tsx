import * as React from "react";
import { Whisky } from "../types/types"

interface Props {
    whisky?: Whisky[],
    className?: string
}

export const Whisky: React.FC<Props> = (props) => {
    return (
        <div className={props.className}>
            <h2>This will be a Whisky!</h2>
        </div>
    )
}