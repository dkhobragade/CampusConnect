import { Text } from "@mantine/core"
import { FONT_FAMILY_PLAYFAIR } from "../constants/fonts";

interface PrimaryTextProps
{
    text: string
    className?: string
    size?: "xs" | "sm" | "md" | "lg" | "xl";
}


const PrimaryText = ( props: PrimaryTextProps ) =>
{
    return (
        <Text style={ { fontFamily: FONT_FAMILY_PLAYFAIR } } className={ props.className } size={ props.size || "md" } >{ props.text }</Text>
    )
}

export default PrimaryText