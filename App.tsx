import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import FlatCards from './components/FlatCards';
import EvaluatedCard from './components/EvaluatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
function App() {
  return (
    <SafeAreaView style = {{paddingVertical : 35}} >
      <ScrollView>
        <FlatCards />
        <EvaluatedCard />
        <FancyCard />
        <ActionCard/> 
      </ScrollView>
    </SafeAreaView>
      
  )
  
}

export default App;