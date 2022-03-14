import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';




const App = () => {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const DatosConsulta = async () => {
      const {data}: any = await axios.get(
        'https://reqres.in/api/users',
      );
      setUsuarios(data);
    };
    DatosConsulta();
  }, []);
  

  return (
   <View>
     <TouchableOpacity>
     <Text>Passa</Text>
     </TouchableOpacity>
   </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
