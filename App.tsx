import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import FlatCards from './components/FlatCards';
import EvaluatedCard from './components/EvaluatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
function App() {
  return (
    <SafeAreaView style = {{paddingVertical : 35}} >
      <ScrollView>
        <FlatCards />
        <EvaluatedCard />
        <FancyCard />
        <ContactList />
        <ActionCard/> 
      </ScrollView>
    </SafeAreaView>
      
  )
  
}

export default App;