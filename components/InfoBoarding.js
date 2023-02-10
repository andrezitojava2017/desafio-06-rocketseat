import React from 'react';
import {Box, Text, HStack, VStack} from 'native-base';
import QRCode from 'react-native-qrcode-svg';

const InfoBoarding = () => {
  return (
    <Box
      borderStyle="dashed"
      borderColor="#C0C0C0"
      borderWidth="0.5"
      background="#FFFFFF"
      marginX="8"
      borderRadius="15"
      paddingX="4"
      paddingY="4">
      <HStack display="flex" justifyContent="space-between">
        <VStack>
          <Text color="#696969" fontFamily="Rubik-Regular">
            Embarque
          </Text>
          <Box
            background="#996DFF"
            borderRadius="lg"
            alignItems="center"
            marginBottom="2">
            <Text color="#FFFFFF" fontFamily="Rubik-Bold">
              19:50
            </Text>
          </Box>
          <Box marginBottom="2">
            <Text color="#696969" fontFamily="Rubik-Regular">
              Terminal
            </Text>
            <Text fontFamily="Rubik-Bold">23</Text>
          </Box>
          <Box>
            <Text color="#696969" fontFamily="Rubik-Regular">
              Portao
            </Text>
            <Text fontFamily="Rubik-Bold">8</Text>
          </Box>
        </VStack>
        <Box alignItems="center">
          <QRCode value="https://github.com/andrezitojava2017/desafio-06-rocketseat" />
          <Text fontSize="10">Grupo de embarque 22</Text>
        </Box>
      </HStack>
      <Box alignItems="center" marginTop="2">
        <Text fontFamily="Rubik-Bold">Atenção: o portão fecha as 10:00</Text>
      </Box>
    </Box>
  );
};
export default InfoBoarding;
