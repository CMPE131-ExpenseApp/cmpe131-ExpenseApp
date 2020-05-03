App.js
import React from 'react';
import Main from './components/Main';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
export default function App() {
return (
<Main />
<NavigationContainer>
<MyTabs />
</NavigationContainer>
)
}
class HistoryPage extends React.Component{
render(){
return(
<View>
<Text>History</Text>
</View>
)
}
}
class ChartPage extends React.Component{
render(){
return(
<View>
<Text>Chart</Text>
</View>
)
}
}
class CategoriesPage extends React.Component{
render(){
return(
<View>
<Text>Categories</Text>
</View>
)
}
}
const TabNavigation = createMaterialBottomTabNavigator(
{
History:{
screen: HistoryPage
},
Chart:{
screen: ChartPage
},
Categories:{
screen: CategoriesPage
}
},
{
initialRouteName: 'History',
activeColor: 'black',
inactiveColor: '#e3e3e3',
barStyle: {backgroundColor: '#e3e3e3'},
}
)
function MyTabs(){
return(
<Tab.Navigator>
<Tab.Screen name="History" component={History} />
<Tab.Screen name="Chart" component={Chart} />
<Tab.Screen name="Categories" component={Categories} />
</Tab.Navigator>
)
}
---------------------------------------------------------------------------------------------------------------------
Main.js
import React from 'react';
import {StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity,
TouchableWithoutFeedbackComponent,} from 'react-native';
export default class Main extends React.Component{
render(){
return(
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.headerText}>Expense Explorer</Text>
</View>
<TouchableOpacity style={styles.addButton}>
<Text style={styles.addButtonText}> + </Text>
</TouchableOpacity>
<NavigationContainer style={styles.tabLayout}>
<MyTabs />
</NavigationContainer>
</View>
)
}
}
const styles = StyleSheet.create({
container:{
flex:1,
},
tabLayout: {
padding: 30,
backgroundColor: '#cacaca',
},
header:{
backgroundColor: '#26CA2D',
borderBottomWidth: 5,
borderBottomColor: '#ddd',
alignItems: 'center',
justifyContent: 'center',
},
headerText:{
color: 'white',
fontSize: 24,
fontWeight: 'bold',
padding: 50,
},
addButton:{
position: 'absolute',
zIndex: 11,
right: 20,
bottom: 10,
borderColor: '#5a5a5a',
backgroundColor: '#e3e3e3',
width: 90,
height: 90,
borderRadius: 50,
alignItems: 'center',
justifyContent: 'center',
elevation: 8,
},
addButtonText:{
color: '#5a5a5a',
fontSize: 24,
},
})
