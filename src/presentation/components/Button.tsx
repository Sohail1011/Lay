import { Pressable, Text } from "react-native";
import { colors } from "../../config/StyleTheme";

interface Props {
    label: string;
    color?: string;
    doubleSize?: boolean;
    actionButton?: () => void;
    blackText?: boolean;
}

export default function Button({ label,
    color = colors.darkGray,
    doubleSize = false,
    actionButton,
    blackText = false
}: Props) {
    return (
        <Pressable >
            <Text>{label}</Text>
        </Pressable>
    )
}