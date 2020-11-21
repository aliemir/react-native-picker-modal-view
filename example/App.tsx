import 'react-native-gesture-handler';
import React from 'react';
import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view';
import PickerModal from 'react-native-picker-modal-view';

import { View, Text } from 'react-native';

const items = [
  { label: 'Ali', value: 'Ali' },
  { label: 'Emir', value: 'Emir' },
  { label: 'Sen', value: 'Sen' },
  { label: 'Merve', value: 'Merve' },
];

const App = () => {
  const [selected, setSelected] = React.useState<{ label: string; value: string } | undefined>(undefined);

  return (
    <View style={{ padding: 20, paddingVertical: 70 }}>
      <Text style={{ textAlign: 'center' }}>react-native-picker-modal-view</Text>
      <PickerModal items={items} selected={selected} onSelect={(item) => setSelected(item)} />
      <View style={{ marginTop: 20, backgroundColor: 'lightgrey', padding: 20 }}>
        <Text>{JSON.stringify(selected)}</Text>
      </View>
    </View>
  );
};

export default App;
