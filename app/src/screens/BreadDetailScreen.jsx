import { Button, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import React from 'react'
import { addItem } from '../store/actions/cart.action'

//import { BREADS } from '../data/products'




const BreadDetailScreen = () => {
    const bread = useSelector(state => state.breads.selected)
    const dispatch = useDispatch();

    const onHandleAddToCart = () => {
        console.log('ADD TO CART', bread);
        dispatch(addItem({ ...bread, quantity: 1 }))
    }
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>{bread.name}</Text>
                <Text>{bread.description}</Text>
                <Text>${bread.price}</Text>
                <Text>{bread.weight}</Text>
            </View>
            <Button style={styles.button} title='Agregar al carrito' onPress={() => {
                onHandleAddToCart()
            }} />
        </>
    )
}

export default BreadDetailScreen

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
    },

    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    title: {
        fontSize: 20,
        fontFamily: 'OpenSans_700Bold',
        marginBottom: 10
    }
})