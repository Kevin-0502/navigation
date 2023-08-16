import { StyleSheet, Text,FlatList,View, Image,Dimensions,BackHandler,Alert,Button} from 'react-native'
import React from 'react'
import data from '../data/data'
import colors from '../data/colors'
import { useNavigation } from '@react-navigation/native';


const {width,height}=Dimensions.get('screen')

const SlideItem = ({item}) =>{
    const navigation = useNavigation();
  //BackHandler.addEventListener("hardwareBackPress",Alert.alert('CERRAR SESIÓN','Desea cerrar sesión?',[{text: 'Cancel',style:'cancel'},{text: 'Ok'}],{cancelable: false}))
    return (
            <View style={styles.container_item}>
                <Text style={styles.content_txt_title1}>{item.title}</Text>
                <Image style={styles.image_item} source={item.image}/>
                <View style={styles.content_item}>
                    <Text style={styles.content_txt_title}>{item.starring}</Text>
                    <Text style={styles.content_txt_description}>{item.summary}</Text>
                    <Text style={styles.content_txt_title}>Creator:{item.creator}</Text>
                    <Button title='Details' onPress={()=>navigation.navigate('Details')} />
                </View>
            </View>
    )
}

export default function Home({navigation}) {

    return (
        <View style={styles.container}>
            <FlatList 
            data={data}
            renderItem={({item})=><SlideItem item={item}/>}
            horizontal
            pagingEnabled
            ShowsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.LightColor,
    },
    container_item:{
        paddingTop: height/15,
        width: width,
        alignItems: 'center',
        backgroundColor:colors.SecondaryColor,
    },
    image_item:{
        width:175,
        height:225,
    },
    content_item:{
        marginTop:10,
        paddingHorizontal:30,
        alignItems: 'center',
        backgroundColor:colors.LightColor,
        width:width,
        height:height,
        borderTopStartRadius:30,
        borderTopEndRadius:30,
    },
    content_txt_title1:{
        textAlign:'center',
        fontSize:42,
        fontWeight: 'bold',
        marginVertical:20,
    },
    content_txt_title:{
        textAlign:'center',
        fontSize:32,
        fontWeight: 'bold',
        marginVertical:20,
    },
    content_txt_description:{
        fontSize:19,
        textAlign:'justify',
    },
    bottom:{
        height: height/15,
    }
})