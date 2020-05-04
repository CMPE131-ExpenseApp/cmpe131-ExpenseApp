import React from 'react';
import{StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Expense extends React.Component{
     
    render(){
        let expenses = this.state.expenseList.map((val, key) => {
            return <Expense key={key} keyVal={key} val={val}
                deleteMethod={ ()=> this.deleteExpense(key)}
                addMethod={() => this.addExpense(key)} />
        });

        return(
            <View key={this.props.keyVal} style={styles.expense}>
                <Text style={styles.expenseText}>{this.props.val.name}</Text>
                <Text style={styles.expenseText}>{this.props.val.date}</Text>
                <Text style={styles.expenseText}>{this.props.val.cost}</Text>
                <TouchableOpacity onPress={this.props.deleteExpense} 
                style={styles.deleteEx}>
                    <Text style={styles.deleteText}>Done</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    expense:{
        position: 'relative',
        padding:20,
        paddingRight:100,
        borderBottomWidth: 2,
        borderBottomColor:'blue'
    },

    expenseText:{
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: 'blue'
    },
    deleteEx:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#E0E0E0',
        padding:10,
        top: 10,
        bottom: 10,
        right: 10
    },
    deleteText:{
        color:'white',
    }
}); 
