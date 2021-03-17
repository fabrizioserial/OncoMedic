import React,{useState,useEffect}  from 'react'
import {SafeAreaView,Text,Image,StyleSheet,Dimensions,ScrollView,View} from 'react-native'
import {ItemRegister} from '../Item/ItemRegister.js'
import {ItemRegisterInput} from '../Item/ItemRegisterInput.js'
import {ItemRegisterRadio} from '../Item/ItemRegisterRadio.js'



const {width} = Dimensions.get("window")

export const RegisterElementsMore = ({type,handlePress}) => {
    const [typeRegister,setType] = useState(type)
    const smoke_q = ["¿Cantidad por dia?","¿Tiempo fumado?"]
    const dbt_q = ["Insulina","Medicamento 2", "Medicamento 3"]
    const [image,setImage] = useState("")
    //const [med, setMed] = useState([hip:{state:false,title:"Hipertension"},epoc:{state:false,title:"EPOC"},
      //                              acv:{state:false,title:"ACV"},inf:{state:false,title:"Infarto"}])
       

    useEffect(() => {
        typeRegister == "smoke" ? setImage(require("../../img/ic_smoke.png")) :
        setImage(require("../../img/ic_diabetic.png"))

    }, [typeRegister])

    const handleSelectItem = (value) =>{
        handlePress(value.item)
    }

    const handleMed = (checked,key) =>{
        const newmed = setMed()
        handlePress(value)
    }

    return (
        <SafeAreaView style={RegisterElementMoreStyle.regelem_const_back}>
            <ScrollView style={RegisterElementMoreStyle.regelem_scroll}>
                <View style={RegisterElementMoreStyle.regelem_cont}>
                    <View style={RegisterElementMoreStyle.regelem_cont_top}>
                        <Image style={RegisterElementMoreStyle.reglem_img} source={image}/>
                    </View>
                    <Image style={RegisterElementMoreStyle.regelem_deco_top} source={require("../../img/register_deco.png")}/>
                </View>
                <View style={RegisterElementMoreStyle.regelem_itemcont}> 
                    {
                        typeRegister == "smoke" ? smoke_q.map((element)=><ItemRegisterInput item={element} handlePress={handlePress} />) : typeRegister == "diabetic" ? dbt_q.map((element)=> <ItemRegister item={element} handlePress={handleSelectItem}/>) : 
                        med.map((item,key)=><ItemRegisterRadio title={item.title} handlePress={handleMed} key={key}/>)
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const RegisterElementMoreStyle = StyleSheet.create({
    reglem_img:{
        width:40,
        height:35
    },
    regelem_itemcont:{
        flex: 5,
        width,
        minHeight: 500,
        justifyContent: 'center',
        alignItems: 'center',
    },
    regelem_const_back:{
    
        width,
        height:"100%",
        backgroundColor: "white",
    },
    regelem_scroll:{
        width,
        flexGrow: 1,
        minHeight: "100%",    
        flexDirection: 'column',
    },
    regelem_cont:{
        alignItems: 'center',
        flex:1,
    },
    regelem_cont_top:{
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "#B189F8",
        width,
        alignItems: 'center',
    },
    regelem_deco_top:{
        width,
    },
    regelem_cont_top_text:{
        maxWidth: 190,
        marginTop:25,
        fontSize: 25,
        color:"white",
        fontWeight: 'bold',
        textAlign:"center"
    }
})
