import React from 'react';
import {Box, Text, HStack} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FlightInfo = () => {
  return (
    <Box
      borderBottomStyle="dashed"
      borderBottomColor="#C0C0C0"
      borderBottomWidth="2"
      background="#FFFFFF"
      marginX="8"
      borderRadius="20"
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
      <HStack justifyContent="space-between">
        <Text fontSize="14" color="#696969" fontFamily="Rubik-Bold">
          10:00 <Icon name="flight-takeoff" size={20} color="#633BBC" />
        </Text>
        <Text fontSize="14" color="#696969" fontFamily="Rubik-Bold">
          00:30 <Icon name="flight-land" size={20} color="#633BBC" />
        </Text>
      </HStack>
    </Box>
  );
};
export default FlightInfo;
