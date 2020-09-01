import * as React from "react";
import { Whisky } from "../types/types"

interface Props {
    favourites?: Whisky[],
    className?: string
}

export const FavouritesList: React.FC<Props> = (props) => {
    return (
        <div className={props.className}>
            <h2>This will be a Favourites!</h2>
        </div>
    )
}