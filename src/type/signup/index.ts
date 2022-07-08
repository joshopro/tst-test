import React from "react"

export type ISignupInput = {
    name: string,
    type: string,
    placeholder: string
    hiddenAddon?: boolean,
    onHidePassword?: React.MouseEventHandler<HTMLImageElement>
}
