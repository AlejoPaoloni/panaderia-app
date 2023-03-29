import React, { useEffect } from 'react'
import { filterBreads, selectBread } from '../store/actions/bread.action'
import { useDispatch, useSelector } from 'react-redux'

import BreadItem from '../components/BreadItem'
import { FlatList } from 'react-native'

const CategoryBreadScreen = ({ navigation, route }) => {

    const categoryBreads = useSelector(state => state.breads.filteredBreads)
    const dispatch = useDispatch()
    const category = useSelector(state => state.categories.selected)

    useEffect(() => {
        dispatch(filterBreads(category.id))
    }, [])

    const onHandleSelectedBread = (item) => {
        dispatch(selectBread(item.id))
        navigation.navigate('Detail', {
            name: item.title,
        })
    }

    const renderItemBread = ({ item }) => (
        <BreadItem item={item} onSelected={onHandleSelectedBread} />
    )

    return (
        <FlatList
            data={categoryBreads}
            renderItem={renderItemBread}
        />
    )
}

export default CategoryBreadScreen
