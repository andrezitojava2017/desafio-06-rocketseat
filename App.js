import React from 'react';
import {NativeBaseProvider, Box, Text, HStack, VStack} from 'native-base';
import QRCode from 'react-native-qrcode-svg';

const App = () => {
  return (
    <NativeBaseProvider>
      <Box flex="1" background="#996DFF">
        <Box alignItems="center" marginY="8">
          <Text color="#FFFFFF" fontSize="20" fontWeight="bold">
            Cartão de embarque
          </Text>
        </Box>
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
            <Box>
              <QRCode value="https://github.com/andrezitojava2017/" />
            </Box>
          </HStack>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default App;
