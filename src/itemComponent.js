import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, Button } from 'react-native';
import Up from './assets/media/arrowup.png';
import Down from './assets/media/arrowdown.png';
import Items from './tables/items';
import styles from './assets/styles/homeStyle';

const ItemComponent = ({ addItemData }) => {
    const [items, setItems] = useState(Items);
    const [itemCode, setItemCode] = useState('Item Code');
    const [itemName, setItemName] = useState('Item Name');
    const [itemQty, setItemQty] = useState('');

    const [isClicked, setIsClicked] = useState(false);
    const [itemData, setItemData] = useState([{
        itemName: '',
        itemQty: ''
    }])

    const handleInputChange = (index, name, value) => {
        const updatedItemData = [...itemData];
        updatedItemData[index][name] = value;
        setItemData(updatedItemData);
    };

    const handleAddItem = () => {
        setItemData([...itemData, { itemName: '', itemQty: '' }]);
    };


    useEffect(() => { 
        // setTotalQuantity(productQty);
        console.log(itemData.itemQty)
    }, [itemData.itemQty])


    const handleSelectedItemCode = (code) => {
        setItemCode(code);
        setIsClicked(false);
        const seletedItemCode = Items.find((e) => e.itemCode === code)
        if (seletedItemCode) {
            // console.log(seletedItemCode.productName); 
            setItemName(seletedItemCode.productName)
        }
    }


    const onSearchItemCode = (txt) => {
        if (txt !== "") {
            let tempData = Items.filter((item) => {
                return item.itemCode.toLowerCase().indexOf(txt.toLowerCase()) > -1;
            });
            // console.log(tempData);
            setItems(tempData);
        } else {
            setItems(Items);
        }
    }


    return (
        <View style={styles.itemDropdownContainer}>

            <View>
                <Text style={{ paddingLeft: 40, marginBottom: 5 }}>Item Code</Text>
                <TouchableOpacity style={styles.ItemDropdownSelector} onPress={() => setIsClicked(!isClicked)}>
                    <Text>{itemCode}</Text>
                    {isClicked ?
                        <Image source={Up} style={styles.icon} />
                        :
                        <Image source={Down} style={styles.icon} />
                    }
                </TouchableOpacity>

                {/* Item code dropdown area */}

                {isClicked ?
                    <View style={styles.dropdownArea}>
                        <TextInput
                            placeholder='Search'
                            style={styles.searchInput}
                            onChangeText={(text) => { onSearchItemCode(text) }}
                        />
                        <FlatList data={items} renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={styles.distributorItem}
                                    onPress={() => {
                                        handleSelectedItemCode(item.itemCode)
                                        onSearchItemCode('');
                                        setIsClicked(false);
                                    }}>
                                    <Text>{item.itemCode}</Text>
                                </TouchableOpacity>
                            )
                        }} />
                    </View>
                    :
                    null
                }
            </View>

            {/* Item Name dropdown */}
            <View>
                <Text style={{ paddingLeft: 40, marginBottom: 5 }}>Item Name</Text>
                <Text style={styles.itemName}>{itemName}</Text>

            </View>

            <View>
                <Text style={{ marginBottom: 5 }}>Quantity</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Quantity"
                    value={itemData.itemQty}
                    onChangeText={(value) => handleInputChange(index, 'itemQty', value)}

                />
                <Button title='add' onPress={handleAddItem} />
            </View>

        </View>
    );
};

export default ItemComponent;
