import { View, Text } from 'react-native'
import Button from '../components/Button'
import { styles } from '../../config/StyleTheme';
import { useCalculator } from '../hooks/useCalculator'

export const Home = () => {

    const {
        result, lastResult, buildNumber, clean, toggleSign, deleteOperation, divideOperation, multiplyOperation, subtractOperation, addOperation, calculateOperation
    } = useCalculator();

    return (
        <View style={styles.container}>
            <Button label='1' />
            <Button label='2' />
        </View>
    )
}