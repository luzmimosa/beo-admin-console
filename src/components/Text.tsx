import React from "react";
import {Text} from "@nextui-org/react";
import {Link} from "react-router-dom";

export const PageTitle = (props: { text: string, hideHome?: boolean }) => {
    return (
        <div id={"page-title"}>
            {!props.hideHome &&
                <Text
                    size="$xl"
                    css={{
                        textGradient: "45deg, $red600 -20%, $purple600 100%",
                    }}
                    weight="bold"
                ><Link to={"/"}>Volver al inicio</Link></Text>
            }
            <Text
                h1
                size={60}
                css={{
                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                }}
                weight="bold"
            >
                {props.text}
            </Text>
        </div>
    )
}