import { StyleSheet, Text, View, FlatList, TextInput, Button } from "react-native";
import FoodListItem from '../components/FoodListItem';
import { useState } from "react";

const foodItems = [
  { name: "Over East Eggs", calories: 70, dining: 'South Campus Dining Hall' }, 
  { name: "Avacado", calories: 50, dining: 'South Campus Dining Hall' }, 
  { name: "Multi-Grain Bread", calories: 110, dining: 'South Campus Dining Hall' }
]

export default function Index() {

  const[search, setSearch] = useState(''); 

  const performSearch = () => { 
    console.warn('Searching for: ', search);

    setSearch('');
  }

  return (
    <View style={styles.container}>
      {/* Food Item View */}

      <TextInput 
        value={search} 
        onChangeText={setSearch} 
        placeholder="Search for a food" 
        style={styles.input} 
      />

      {search && <Button title="Search" onPress={performSearch} />} 

      <FlatList 
        data={foodItems}
        renderItem={({ item }) => <FoodListItem item={item} />}
        contentContainerStyle={{ gap: 5 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: '#fff', 
    padding: 10,
    gap: 10,
  }, 
  input: { 
    backgroundColor: '#f2f2f2',
    padding: 10, 
    borderRadius: 20,
  }
})
