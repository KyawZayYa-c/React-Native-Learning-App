import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import FlatCards from './components/FlatCards';
import EvaluatedCard from './components/EvaluatedCard';
import FancyCard from './components/FancyCard';
function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <EvaluatedCard />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
      
  )
  
}

export default App;