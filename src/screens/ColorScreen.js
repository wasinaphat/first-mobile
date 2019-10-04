import React,{useState} from 'react';
import { View, Button, StyleSheet,FlatList ,Text} from 'react-native';

const ColorScreen = () => {
    var [color,setColor]=useState([]);
    console.log(color,setColor);
    return (
         <View>
                    <Button
                    title="Add Color"
                onPress={()=>{
                    setColor([...color,randomRGB()]);
                }}
                    />
 
     <FlatList
        keyExtractor={item=> item}
         data={color}
         renderItem={({item})=>{
             
                return <View style={{height:100,width:100, backgroundColor: item}}></View>;
         }}
        
     />

     
        </View>
    );
};

const randomRGB = () =>{
const red =Math.floor(Math.random()*256);
const green =Math.floor(Math.random()*256);
const blue =Math.floor(Math.random()*256);
return `rgb(${red},${green},${blue})`;
};
export default ColorScreen;