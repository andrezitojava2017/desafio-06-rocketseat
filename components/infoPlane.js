import React from 'react';
import {Box, Text, HStack} from 'native-base';

const FlightInfo = () => {
  return (
    <Box
      borderStyle="dashed"
      borderColor="#C0C0C0"
      borderWidth="0.5"
      background="#FFFFFF"
      marginX="8"
      borderRadius="15"
      paddingX="4"
      paddingY="6">
      <HStack display="flex" justifyContent="space-between">
        <Text color="#696969" fontSize="14" fontFamily="Rubik-Regular">
          Voo
        </Text>
        <Text color="#696969" fontSize="14" fontFamily="Rubik-Regular">
          Data
        </Text>
      </HStack>

      <HStack display="flex" justifyContent="space-between">
        <Text fontFamily="Rubik-Bold" fontSize="lg">
          MT66
        </Text>

        <Text fontFamily="Rubik-Bold" fontSize="lg">
          08/02/2023
        </Text>
      </HStack>

      <HStack display="flex" justifyContent="space-between" paddingTop="6">
        <Text color="#696969" fontSize="12" fontFamily="Rubik-Regular">
          São J. Xingu, BR
        </Text>

        <Text fontSize="12" color="#696969" fontFamily="Rubik-Regular">
          São J. Rio Preto, BR
        </Text>
      </HStack>

      <HStack display="flex" justifyContent="space-between">
        <Text fontSize="32" fontFamily="Rubik-Bold">
          SJX
        </Text>
        <Text fontSize="32" fontFamily="Rubik-Bold">
          SJRP
        </Text>
      </HStack>
    </Box>
  );
};
export default FlightInfo;
