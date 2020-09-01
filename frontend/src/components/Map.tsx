import * as React from "react";

interface Props {
    className?: string
}

export const Map: React.FC<Props> = (props) => {
    return (
        <div className={props.className}>
            <h2>This will be a map!</h2>
        </div>
    )
}