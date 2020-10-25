import 'react-native-gesture-handler';
import React from 'react';
import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view';
import PickerModal from 'react-native-picker-modal-view';

import { View, Text } from 'react-native';

const items = [
  { Id: 0, Name: 'Ali', Value: 'Ali' },
  { Id: 1, Name: 'Emir', Value: 'Emir' },
  { Id: 2, Name: 'Sen', Value: 'Sen' },
  { Id: 3, Name: 'Merve', Value: 'Merve' },
];

const App = () => {
  const [selected, setSelected] = React.useState(undefined);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={{ padding: 20 }}>
          <Text style={{ textAlign: 'center' }}>react-native-picker-modal-view</Text>
          <PickerModal items={items} selected={selected} onSelected={(item) => setSelected(item)} />
          <View style={{ marginTop: 20, backgroundColor: 'lightgrey', padding: 20 }}>
            <Text>{JSON.stringify(selected)}</Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
