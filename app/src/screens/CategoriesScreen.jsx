import { useDispatch, useSelector } from 'react-redux'

import { FlatList } from 'react-native'
import GridItem from '../components/GridItem'
import React from 'react'
import { selectCategory } from '../store/actions/category.action'

const CategoriesScreen = ({ navigation }) => {

    const categories = useSelector(state => state.categories.categories)
    const dispatch = useDispatch()

    const onHandleSelectedCategory = (item) => {
        dispatch(selectCategory(item.id))
        navigation.push("Breads", { name: item.title })

    }

    const renderGridItem = ({ item }) => {
        return (
            <GridItem item={item} onSelected={onHandleSelectedCategory} />
        )
    }

    return (
        <FlatList
            data={categories}
            renderItem={renderGridItem}
            keyExtractor={item => item.id}
            numColumns={2}
        />
    )
}

export default CategoriesScreen
