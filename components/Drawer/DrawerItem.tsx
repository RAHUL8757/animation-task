import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from '../../styles/DrawerExample.styles';

interface DrawerItemProps {
  item: { id: string; title: string };
  selectedItem: string;
  onSelect: (itemId: string) => void;
}

const DrawerItem = ({ item, selectedItem, onSelect }: DrawerItemProps) => (
  <TouchableOpacity
    style={[
      styles.listItem,
      selectedItem === item.id && styles.selectedItem,
    ]}
    onPress={() => onSelect(item.id)}
  >
    <Text style={[styles.listItemText, { color: selectedItem !== item.id ? '#fff' : '#db3a12' }]}>
      {item.title}
    </Text>
    {selectedItem === item.id && <View style={styles.divider} />}
  </TouchableOpacity>
);

export { DrawerItem };
