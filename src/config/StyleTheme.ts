import { StyleSheet } from 'react-native'

export const colors = {
    darkGray: '#2D2D2D',
    ligthGray: '#9B9B9B',
    orange: '#FF9427',
    blackColor: 'black',
    resultColor: '#FFFFFF'
}

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.blackColor,
        color: colors.resultColor
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    result: {
        color: colors.resultColor,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '400'
    },
    subResult: {
        color: colors.ligthGray,
        fontSize: 30,
        textAlign: 'right',
        fontWeight: '400'
    },
    controler: {
        backgroundColor: colors.darkGray,
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
    },
    textController: {
        color: colors.resultColor,
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginBottom: 10
    },
    containerResult: {
        paddingHorizontal: 20,
        paddingBottom: 20
    }
})