import * as React from "react";
import { Whisky } from "../types/types"

interface Props {
    whiskies?: Whisky[],
    className?: string
}

export const WhiskyList: React.FC<Props> = (props) => {
    return (
        <div className={props.className}>
            <h2>This will be a WhiskyList!</h2>
        </div>
    )
}