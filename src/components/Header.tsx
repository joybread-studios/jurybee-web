'use client';

import {Box, Flex, Heading, Image} from '@chakra-ui/react';
import ColorModeToggle from '@/components/ui/ColorModeToggle'


export default function Header() {
  return (
    <Box py={4} px={6} boxShadow="md">
      <Flex align="center" justify="space-between">
          <Image height="50px" src="Jurybee-logo/cover.png"></Image>

          <ColorModeToggle></ColorModeToggle>
      </Flex>
    </Box>
  );
}