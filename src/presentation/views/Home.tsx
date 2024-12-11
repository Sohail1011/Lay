import { View, Text } from 'react-native'
import Button from '../components/Button'
import { colors, styles } from '../../config/StyleTheme';
import { useCalculator } from '../hooks/useCalculator'

export const Home = () => {

    const {
        result, lastResult, buildNumber, clean, toggleSign, deleteOperation, divideOperation, multiplyOperation, subtractOperation, addOperation, calculateOperation
    } = useCalculator();

    return (
        <View style={styles.container}>
            <View style={styles.containerResult}>
                <Text style={styles.result}
                    adjustsFontSizeToFit
                    numberOfLines={1}
                >{result}</Text>
                <Text style={styles.subResult}
                    adjustsFontSizeToFit
                    numberOfLines={1}
                >{lastResult}</Text>
            </View>

            <View style={styles.row}>
                <Button actionButton={clean} label="C" blackText color={colors.ligthGray} />
                <Button actionButton={toggleSign} label="+/-" blackText color={colors.ligthGray} />
                <Button actionButton={deleteOperation} label="del" blackText color={colors.ligthGray} />
                <Button actionButton={divideOperation} label="÷" color={colors.orange} />
            </View>
            <View style={styles.row}>
                <Button actionButton={() => buildNumber("7")} label="7" />
                <Button actionButton={() => buildNumber("8")} label="8" />
                <Button actionButton={() => buildNumber("9")} label="9" />
                <Button actionButton={multiplyOperation} label="x" color={colors.orange} />
            </View>
            <View style={styles.row}>
                <Button actionButton={() => buildNumber("4")} label="4" />
                <Button actionButton={() => buildNumber("5")} label="5" />
                <Button actionButton={() => buildNumber("6")} label="6" />
                <Button actionButton={subtractOperation} label="-" color={colors.orange} />
            </View>
            <View style={styles.row}>
                <Button actionButton={() => buildNumber("1")} label="1" />
                <Button actionButton={() => buildNumber("2")} label="2" />
                <Button actionButton={() => buildNumber("3")} label="3" />
                <Button actionButton={addOperation} label="+" color={colors.orange} />
            </View>
            <View style={styles.row}>
                <Button actionButton={() => buildNumber("0")} label="0" doubleSize />
                <Button actionButton={() => buildNumber(".")} label="." />
                <Button actionButton={calculateOperation} label="=" color={colors.orange} />
            </View>
        </View>
    )
}