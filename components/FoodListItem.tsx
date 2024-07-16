import {View, Text, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const FoodListItem = ({ item }) => { 
    return(
      <View style={styles.container}>
          <View style={{ flex: 1, gap: 5 }}>
            <Text style = {{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
            <Text style={{ color: 'dimgray'}}>{item.calories} cal, {item.dining}</Text>
          </View>
          <AntDesign name="pluscircle" size={24} color="black" />
        </View>
    );
  };

  const styles = StyleSheet.create({ 
    container: { 
        backgroundColor: 'gainsboro', 
        padding: 10, 
        borderRadius: 5, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
  })

  export default FoodListItem;
