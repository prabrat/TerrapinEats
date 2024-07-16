import { StyleSheet, Text, View } from "react-native";
import FoodListItem from '../components/FoodListItem';



export default function Index() {
  return (
    <View style={styles.container}>
      {/* Food Item View */}
      <FoodListItem item={{ name: "Eggs", calories: 70, dining: 'South Campus Dining Hall' }}/>
      <FoodListItem item={{ name: "Avacado", calories: 50, dining: 'South Campus Dining Hall' }}/>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: '#fff', 
    justifyContent: 'center',
    padding: 10,
    gap: 5,
  }
})
