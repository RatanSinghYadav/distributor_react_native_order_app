import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    mainBox: {
        // marginTop: 200,
    },
    loginText:{
        marginTop: 180,
        marginBottom:25,
        textAlign:'center',
        fontSize:25,
        color:'black',
        fontWeight:'500',
    },
    textBox: {
        marginTop: 1,
        marginLeft: 50,
        marginBottom: 15,
        borderWidth: 1,
        height: 40,
        width: 300,
        borderColor: 'grey',
        borderRadius: 6,
        fontSize: 15,
        paddingLeft: 10,
    },
    submitButton: {
        backgroundColor: 'rgb(223,29,43)',
        borderRadius: 6,
        marginTop: 1,
        marginLeft: 50,
        marginBottom: 15,
        padding: 10,
        height: 40,
        width: 300,
        fontWeight:'500'
    },
    signupButton:{
        backgroundColor: 'rgb(223,29,43)',
        borderRadius: 6,
        marginTop: 1,
        marginLeft: 50,
        marginBottom: 15,
        padding: 10,
        height: 40,
        width: 300,
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center',
        // fontWeight:'bold',
        fontSize:16,
    },
    forgotPass: {
        alignSelf: 'flex-end',
        paddingRight: 58,
        marginBottom: 20,
        fontSize: 14
    }

})

export default Styles;