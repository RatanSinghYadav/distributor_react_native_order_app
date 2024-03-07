import { View, Text, Button, TextInput, Alert, SafeAreaView, StatusBar, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './assets/styles/homeStyle';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Up from './assets/media/arrowup.png';
import Down from './assets/media/arrowdown.png';
import { url } from './utils/constant';
import Customers from './tables/cutomer';
import Items from './tables/items';
import ItemComponent from './itemComponent';


function Home() {
    const [customers, setCustomer] = useState(Customers);
    const [items, setItems] = useState(Items);
    const [orderId, setOrderId] = useState('');
    const [productQty, setProductQty] = useState('');
    const [totalQuantity, setTotalQuantity] = useState('');

    const [distCode, setDistCode] = useState('Distributor Code');
    const [distName, setDistName] = useState('Distributor Code');
    const [itemCode, setItemCode] = useState('Item Code');
    const [itemName, setItemName] = useState('Item Name');

    const [isClickedCode, setIsClickedCode] = useState(false);
    const [isClickedName, setIsClickedName] = useState(false);

    const [itemCom, setItemCom] = useState([])

    const addItemData = () => {
        setItemCom(prevData => [...prevData, { itemCode, itemName, productQty }]);
    }

    const addMore = () => {
        setItemCom((preData) =>
            [...preData, itemCom]
        )
    }

    const deleteItem = (id) => {
        const finalData = itemCom.filter((Id) => Id !== id)
        setItemCom(finalData);
    }

    useEffect(() => {
        function generateRandomCode(length) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let orderId = '';
            let year = 2024;

            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                orderId += characters.charAt(randomIndex);
            }

            return "DIST" + year + orderId;
        }
        const orderId = generateRandomCode(5)
        setOrderId(orderId)
    }, [])

    const placeOrder = async () => {


        console.log(distName, orderId, itemName, totalQuantity);
        console.log(productQty);

        // try {
        //     const response = await fetch(`${url}/api/v1/order`, {
        //         method: 'POST',
        //         headers: {
        //             Accept: 'application/json',
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             customerName: customerName,
        //             orderId: orderId,
        //             // orderItems: [{ productName: productName, productQty: parseInt(productQty) }],
        //             orderItem: [{
        //                 productName: productName,
        //                 productQty: parseInt(productQty)
        //             }],
        //             totalQuantity: parseInt(productQty)
        //         })
        //     });
        //     if (!response.ok) {
        //         console.log("send faild");
        //         throw new Error(`HTTP error! Status: ${response.status}`);
        //     }

        //     const data = await response.json();
        //     console.log(data);

        // } catch (error) {
        //     console.error('Error placing order:', error);
        // }
    };

    const handleSelectdistributorCode = (code) => {
        setDistCode(code);
        setIsClickedCode(false);
        const seletedCustomer = Customers.find((e) => e.customerCode === code)
        if (seletedCustomer) {
            setDistName(seletedCustomer.Name)
        }
    };

    const handleSelectedItemCode = (code) => {
        setItemCode(code);
        setIsClickedName(false);
        const seletedItemCode = Items.find((e) => e.itemCode === code)
        if (seletedItemCode) {
            setItemName(seletedItemCode.productName)
        }
    }


    const onSearch = (txt) => {
        if (txt !== "") {
            let tempData = Customers.filter((item) => {
                return item.customerCode.toLowerCase().indexOf(txt.toLowerCase()) > -1;
            });
            setCustomer(tempData);
        } else {
            setCustomer(Customers);
        }
    }

    const onSearchItemCode = (txt) => {
        if (txt !== "") {
            let tempData = Items.filter((item) => {
                return item.itemCode.toLowerCase().indexOf(txt.toLowerCase()) > -1;
            });
            setItems(tempData);
        } else {
            setItems(Items);
        }
    }




    return (
        <View>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <Text style={styles.mainText}>Distributor Order Form</Text>

            <View style={styles.dropdownContainer}>

                {/* distributor code dropdown */}
                <View>
                    <Text style={{ paddingLeft: 40, marginBottom: 5 }}>Distributor Code</Text>
                    {/* distributor dropdown */}
                    <TouchableOpacity style={styles.dropdownSelector} onPress={() => setIsClickedCode(!isClickedCode)}>
                        <Text>{distCode}</Text>
                        {isClickedCode ?
                            <Image source={Up} style={styles.icon} />
                            :
                            <Image source={Down} style={styles.icon} />
                        }
                    </TouchableOpacity>

                    {/* distributor code dropdown area */}
                    {isClickedCode ?
                        <View style={styles.dropdownArea}>
                            <TextInput
                                placeholder='Search'
                                style={styles.searchInput}
                                onChangeText={(text) => { onSearch(text) }}
                            />
                            <FlatList data={customers} renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity style={styles.distributorItem}
                                        onPress={() => {
                                            handleSelectdistributorCode(item.customerCode)
                                            onSearch('');
                                            setIsClickedCode(false);
                                        }}>
                                        <Text>{item.customerCode}</Text>
                                    </TouchableOpacity>
                                )
                            }} />
                        </View>
                        :
                        null
                    }
                </View>

                {/* distributor Name dropdown */}
                <View>
                    <Text style={{ paddingLeft: 40, marginBottom: 5 }}>Distributor Name</Text>
                    {/* distributor dropdown */}

                    <Text style={styles.distributorName}>{distName}</Text>
                </View>


            </View>



            {/* item code   */}

            <View style={styles.itemDropdownContainer}>

                <View>
                    <Text style={{ paddingLeft: 40, marginBottom: 5 }}>Item Code</Text>
                    <TouchableOpacity style={styles.ItemDropdownSelector} onPress={() => setIsClickedName(!isClickedName)}>
                        <Text>{itemCode}</Text>
                        {isClickedName ?
                            <Image source={Up} style={styles.icon} />
                            :
                            <Image source={Down} style={styles.icon} />
                        }
                    </TouchableOpacity>

                    {/* Item code dropdown area */}

                    {isClickedName ?
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
                                            setIsClickedName(false);
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
                        value={productQty}
                        onChangeText={text => setProductQty(text)}
                    />
                    {/* <Button title='add'  /> */}
                </View>


            </View>


            <View>
                {itemCom.map((e, index) => {
                    return (
                        <View key={index}>
                            <TouchableOpacity onPress={() => deleteItem(e)}>
                                <Text style={{ textAlign: 'right', fontWeight: '900', marginRight: 40, color: 'red' }}>Delete</Text>
                            </TouchableOpacity>
                            {/* item component */}
                              <ItemComponent/> 
                            {/* end here */}
                        </View>
                    )
                })}
            </View>



            {/* item code end */}
            <TouchableOpacity onPress={addMore}>
                <Text style={styles.addMore}>add more +</Text>
            </TouchableOpacity>






            <View style={styles.container}>
                <View style={styles.totalText}>
                    <View>
                        <Text style={{ color: 'black' }}>Order Id:</Text>
                        <Text style={{ color: 'black' }}>Total Item</Text>
                    </View>
                    <View>
                        <Text style={{ color: 'black' }}>{orderId}</Text>
                        <Text style={{ color: 'black' }}>400</Text>

                    </View>
                </View>
                <Button title="Place Order" onPress={placeOrder} />
            </View>

        </View>

    )
}

export default Home;
















{/* <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Distributor Name"
                    value={customerName}
                    onChangeText={text => setCustomerName(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Product Name"
                    value={productName}
                    onChangeText={text => setProductName(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Product Quantity"
                    value={productQty}
                    onChangeText={text => setProductQty(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Product Name"
                    value={productName}
                    onChangeText={text => setProductName(text)}
                />
                <View style={styles.totalText}>
                    <View><Text style={{ color: 'black' }}>Total Item :</Text></View>
                    <View><Text style={{ color: 'black' }}>{productQty ? productQty : '0'}</Text></View>
                </View>
                <Button title="Place Order" onPress={placeOrder} />
            </View> */}


{/* <TextInput placeholder='Search' style={styles.searchInput} /> */ }
{/* <TouchableOpacity style={styles.dropdownSelector} onPress={() => setIsClickedName(!isClickedName)}>
                        <Text>{distName}</Text>
                        {isClickedName ?
                            <Image source={Up} style={styles.icon} />
                            :
                            <Image source={Down} style={styles.icon} />
                        }
                    </TouchableOpacity> */}

{/* distributor code dropdown area */ }

{/* {isClickedName ?
                        <View style={styles.dropdownArea}>
                            <TextInput
                                placeholder='Search'
                                style={styles.searchInput}
                                onChangeText={(text) => { onSearch(text) }}
                            />
                            <FlatList data={data} renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity style={styles.distributorItem}
                                        onPress={() => {
                                            handleSelectdistributorName(item.distributor)
                                            onSearch('');
                                            setIsClickedName(false);
                                        }}>
                                        <Text>{item.distributor}</Text>
                                    </TouchableOpacity>
                                )
                            }} />
                        </View>
                        :
                        null
                    } */}