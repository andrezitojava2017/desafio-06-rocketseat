import React from 'react';
import {NativeBaseProvider, Box, Text, HStack, VStack} from 'native-base';
import InfoPlane from './components/infoPlane';
import InfoPassenger from './components/infoPassanger';
import InfoBoarding from './components/InfoBoarding';

const App = () => {
  return (
    <NativeBaseProvider>
      <Box flex="1" background="#633BBC" justifyContent="center">
        <Box alignItems="center" marginTop="4">
          <Text color="#FFFFFF" fontSize="20" fontWeight="bold">
            Cartão de embarque
          </Text>
        </Box>
        <InfoPlane />
        <InfoPassenger />
        <InfoBoarding />
      </Box>
    </NativeBaseProvider>
  );
};

export default App;
