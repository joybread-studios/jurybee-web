'use client';

import {Box, Center, Flex, Heading, Image, Text} from '@chakra-ui/react';
import ColorModeToggle from '@/components/ui/ColorModeToggle'


export default function Header() {
  return (
    <Box py={4} px={6} boxShadow="md">
      <Flex align="center" justify="space-between">
          <Flex align="center" justify="space-between" >
            <Image height="50px" src="Jurybee-logo/logo.png"></Image>

                    <Heading size="xl" mb={4} w='100%' m={1} textAlign="center">
                        JURYBEE
                    </Heading>
          </Flex>
          <ColorModeToggle></ColorModeToggle>
      </Flex>
    </Box>
  );
}