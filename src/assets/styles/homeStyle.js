import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainText: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 25,
        color: 'black',
        fontWeight: '500',
        marginBottom: 25,
    },
    label1A: {
        paddingleft: 30,
        marginBottom: 5,
    },
    distributorName: {
        width: "50%",
        marginRight: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: "flex-end",
        alignSelf: 'flex-end',
        color: 'black'
    },
    itemName: {
        width: "50%",
        marginLeft: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        // alignItems: "center",
        // alignSelf: 'center',
        color: 'black'
    },
    addMore: {
        marginLeft:40,
        height:30,
        width:85,
        paddingTop:5,
        paddingLeft:7,
        borderRadius:6,
        fontSize:14,
        fontWeight:'bold',
        color:'white',
        backgroundColor:'#1F91EE'
    },
    dropdownContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingLeft: 12,
        paddingRight: 22
    },
    itemDropdownContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingLeft: 1,
        paddingRight: 35
    },
    ItemDropdownSelector: {
        width: '55%',
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 6,
        paddingLeft: 8,
        paddingRight: 8,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center'
    },
    dropdownSelector: {
        width: '64%',
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 6,
        paddingLeft: 8,
        paddingRight: 8,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center'
    },
    icon: {
        height: 15,
        width: 15
    },
    dropdownArea: {
        height: 200,
        width: '64%',
        zIndex: 1,
        borderWidth: 0.5,
        borderRadius: 10,
        marginLeft: 45,
        backgroundColor: 'white',
        elevation: 5,
        marginBottom: 10
    },
    searchInput: {
        height: 40,
        width: "85%",
        paddingLeft: 10,
        marginTop: 10,
        alignSelf: 'center',
        borderWidth: 0.5,
        borderRadius: 6
    },
    distributorItem: {
        width: '85%',
        // paddingLeft:10,
        height: 50,
        borderBottomWidth: 0.2,
        borderBottomColor: '#8e8e8e',
        alignSelf: 'center',
        // color:'black',
        justifyContent: 'center',
        // alignItems:'center'
    },


    // container: {
    //     justifyContent: 'center',
    //     paddingLeft: 50,
    //     marginTop: 75,
    //     position: 'absolute',
    // },
    container: {
        width: '90%',
        justifyContent: 'center',
        paddingLeft: 30,
        marginTop: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '100%'
    },
    totalText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 5
    },
})

export default styles;