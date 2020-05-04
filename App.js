import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Expense from './Expense';
import { TextInput } from 'react-native-paper';

function HistoryPage(){
  return(
    <View style={{flex:1}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Expense Explorer</Text>
      </View>
      <TextInput style={styles.textinput}>

      </TextInput>
      <ScrollView  style={styles.ScrollView}>

      </ScrollView>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <Text>History</Text>
    </View>

  );
}

function CategoriesPage(){
  return(
    <View style={{flex:1}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Expense Explorer</Text>
      </View>
      <TextInput style={styles.textinput}>

      </TextInput>
      <ScrollView  style={styles.ScrollView}>

      </ScrollView>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <Text>Categories</Text>
    </View>

  );
}

function ChartPage(){
  return(
    <View style={{flex:1}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Expense Explorer</Text>
      </View>
      <TextInput style={styles.textinput}>

      </TextInput>
      <ScrollView  style={styles.ScrollView}>

      </ScrollView>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <Text>Chart</Text>
    </View>

  );
}

/*
function SettingsPage(){
  return(
    <View style={{flex:1}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Expense Explorer</Text>
      </View>
      <TextInput style={styles.textinput}>

      </TextInput>
      <ScrollView  style={styles.ScrollView}>

      </ScrollView>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <Text>Settings</Text>
    </View>

  );
}
*/



const Tab = createBottomTabNavigator();

function MyTabs(){
  return(
    <Tab.Navigator
      initialRouteName="History"
      labelStyle={{ fontSize: 12 }}
    >
       <Tab.Screen
        name="History"
        component={HistoryPage}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="history" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesPage}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-list" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Chart"
        component={ChartPage}
        options={{
          tabBarLabel: 'Chart',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-bar" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}


export default class App extends React.Component{
  constructor(props){
      super(props);
      this.state={
          expenseList:[],
          expenseName: '',
          expenseCategory: ''
      };
  }

  render(){
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
  }

}


const styles = StyleSheet.create({
  textinput:{
    height:50,
    borderColor:'#ddd',
  },
  header:{
    borderBottomColor: '#ddd',
    borderBottomWidth: 2,
    backgroundColor: 'green',
    justifyContent:'center',
    alignItems:'center',
    padding: 40,
  },
  headerText:{
    fontSize:26,
    color: 'white',
  },
  addButton:{
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 10,
    borderColor: '#5a5a5a',
    backgroundColor: '#e3e3e3',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText:{
    color: '#5a5a5a',
    fontSize: 24,

  }
});
