import React, {useState} from 'react'
import { View,StyleSheet,Image,Text } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

export const SymptomRegister = () => {

    const [symptom,setSymptom] = useState({value:null,description:null,gravity:null})
    const [grade,setGrade]= useState(null)
    const [currentGrades,setCurrentGrades]=useState([])

    const symptoms=[{label: 'Fiebre', value:'Fiebre',descripcion: 'Calor intenso corporal',gravity:[{label:'<36',value:'0'},{label:'>36',value:'1'}]},
    {label: 'Paro cardiaco', value:'Paro cardiaco',descripcion: 'Cmamut',gravity:[{label:'No me muero',value:'0'},{label:'Me',value:'1'}]},
    {label: 'Convulsion', value:'Convulsion',descripcion: 'Convulsionaste capo',gravity:[{label:'Sin vomitos',value:'0'},{label:'Con vomitos',value:'1'}]}]


    const generateDropPicker=(datas,data,dataSet,placeHolderText,color,isGrade)=>{
        return(
            <DropDownPicker
                items={datas}
                defaultValue={data}
                style={data!=null?{...SymptomStyle.symptom_dropDownPicker,backgroundColor: '#fafafa'}:{...SymptomStyle.symptom_dropDownPicker, backgroundColor: "#E3E3E3",padding:0}}

                itemStyle={{ justifyContent: 'flex-start'}}
                containerStyle={{borderRadius:10}}
                dropDownStyle={{backgroundColor: 'white'}}
                onChangeItem={item =>{
                    dataSet({value:item.value,description:item.descripcion,gravity:item.gravity})
                    if(!isGrade){
                        getCurrentGrade()
                    }
                }}
                placeholderStyle={data==null?{color:color,fontSize:17}:{color:'black',fontSize:17}}
                zIndex={10000}
                searchable={true}
                searchablePlaceholder={placeHolderText}
                searchablePlaceholderTextColor='#AAAAAA'
                searchableError={()=><Text>Not Found</Text>}
                >
            </DropDownPicker> 
        ) 
    }

    const getCurrentGrade=()=>{
        //TODO gets grades from simptoms
        /*
        symptoms.map((symptom)=>{
            const grav= [{label:symptom.gravity.label,value:symptom.gravity.value}]
            console.log(grav)
            console.log(currentGrades.concat(grav))
            setCurrentGrades(currentGrades.concat(grav))
            console.log(currentGrades)
        })
        */
    }

    return (
        <View style={SymptomStyle.symptom_generalView}>
            {console.log('entro')}
            <View style={SymptomStyle.symptom_topView} zIndex={50}>
                <Text style={SymptomStyle.symptom_text_title}>Sintomas</Text>
                <View zIndex={5000} style={SymptomStyle.symptom_dropDownPickerView}>
                    {generateDropPicker(symptoms,symptom.value,setSymptom,'Seleccione su sintoma','#B189F9',false)}
                </View>
                <View>{symptom==null?
                <Text style={SymptomStyle.symptom_descriptionText}>Descripcion de sintoma</Text>:
                <Text style={SymptomStyle.symptom_descriptionText}>{symptom.description}</Text>}</View>
            </View>
            <Image resizeMode={'stretch'} style={SymptomStyle.symptom_imgBack}source={require('../../img/register_deco.png')}/>
            <View style={SymptomStyle.symptom_bottomView}>
                <Text style={SymptomStyle.symptom_text_title_bottom}>Grado</Text>
                <View zIndex={4000} style={SymptomStyle.symptom_dropDownPickerView}>
                    {//currentGrades.length!=0?generateDropPicker(currentGrades,grade,setSymptom,'Que grado de sintoma siente?','#B189F9',true):<Text style={{color:'#AAAAAA'}}>Seleccione sintoma</Text>
                    }
                </View>
            </View>
        </View>
    )
}

const SymptomStyle=StyleSheet.create({

    symptom_text_title_bottom:{
        marginTop: 0,
        fontSize: 25,
        color:'#AAAAAA',
        textAlign:'center'
    },

    symptom_descriptionText:{
        marginTop:20,
        color:'white',
        height:100
    },

    symptom_dropDownPickerView:{
        height: 50,
    },

    symptom_dropDownPicker:{
        justifyContent:'center',
        width:300,
        padding:0,
        borderTopLeftRadius:10,
        borderTopRightRadius:10, 
        borderBottomLeftRadius:10, 
        borderBottomRightRadius:10,
        height:80,
    },

    symptom_text_title:{
        marginTop: 60,
        fontSize: 25,
        fontWeight: 'bold',
        color:'white',
        textAlign:'center'
    },

    symptom_generalView:{
        flex:1,
        backgroundColor:'white',
    },

    symptom_topView:{
        backgroundColor: "#B189F8",
        flex:5,
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'column',
        
    },
    
    symptom_bottomView:{
        justifyContent:'center',
        alignContent:'center',
        backgroundColor: 'white',
        alignItems:'center',
        flex: 4
    },

    symptom_imgBack:{
        height:50

    }
})
