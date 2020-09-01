import * as React from "react";
import { Whisky } from "../types/types"

interface Props {
    favourite?: Whisky,
    className?: string
}

export const FavouriteListItem: React.FC<Props> = (props) => {
    return (
        <div className={props.className}>
            <h2>This will be a favourite!</h2>
        </div>
    )
}