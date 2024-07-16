import { StyleSheet, Text, View, FlatList } from "react-native";
import FoodListItem from '../components/FoodListItem';

const foodItems = [
  { name: "Over East Eggs", calories: 70, dining: 'South Campus Dining Hall' }, 
  { name: "Avacado", calories: 50, dining: 'South Campus Dining Hall' }, 
  { name: "Multi-Grain Bread", calories: 110, dining: 'South Campus Dining Hall' }
]

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Food Item View */}
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
  }
})
