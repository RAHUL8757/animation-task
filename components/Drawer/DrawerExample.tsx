import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, Easing } from 'react-native-reanimated';
import Feather from '@expo/vector-icons/Feather';
import { DrawerItem } from './DrawerItem';
import { styles } from '../../styles/DrawerExample.styles';
import { toggleDrawerAnimation, drawer2Animation } from '../../utils/animations';

const DrawerExample = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>('1');
  const animatedDrawer1Style = useAnimatedStyle(() => toggleDrawerAnimation(isDrawerOpen));
  const animatedDrawer2Style = useAnimatedStyle(() => drawer2Animation(isDrawerOpen));

  const items = [
    { id: '1', title: 'Start' },
    { id: '2', title: 'Your Cart' },
    { id: '3', title: 'Favourites' },
    { id: '4', title: 'Your Orders' },
  ];

  const handleSelectItem = (itemId: string) => {
    setSelectedItem(itemId);
  };

  const renderItem = ({ item }: any) => (
    <DrawerItem item={item} selectedItem={selectedItem} onSelect={handleSelectItem} />
  );

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.secondDrawer, animatedDrawer2Style]}>
        <View style={{ paddingTop: 30 }}>
          <Text style={styles.drawerHeaderText}>Beka</Text>
        </View>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <TouchableOpacity style={styles.listItem}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.firstDrawer, animatedDrawer1Style]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
          <TouchableOpacity onPress={toggleDrawer}>
            <Feather name="menu" size={25} color="#d9d9d9" />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, color: '#d9d9d9' }}>START</Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default DrawerExample;
