import React from 'react';
import { ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import PasswordGenerator from './components/PasswordGenerater';


function App() {
  return (
    <ScrollView 
      keyboardShouldPersistTaps='handled' 
      contentContainerStyle={styles.scrollContainer}
    >
      <SafeAreaView style={styles.appContainer}>
        <PasswordGenerator />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#082F50',
  },
  appContainer: {
    flex: 1,
    paddingVertical: 20,
  },
});

export default App;