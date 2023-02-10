import React from 'react';
import {Box, Text, HStack} from 'native-base';

const InfoPassenger = () => {
  return (
    <Box
      background="#FFFFFF"
      marginX="8"
      borderRadius="12"
      paddingX="8"
      paddingY="6">
      <HStack display="flex" justifyContent="space-between">
        <Text color="#696969" fontFamily="Rubik-Regular">
          Passageiro
        </Text>
        <Text color="#696969" fontFamily="Rubik-Regular">
          Assento
        </Text>
      </HStack>

      <HStack display="flex" justifyContent="space-between">
        <Text fontFamily="Rubik-Bold">Jederson Andre S. Santana</Text>
        <Text fontFamily="Rubik-Bold">229</Text>
      </HStack>
    </Box>
  );
};
export default InfoPassenger;
