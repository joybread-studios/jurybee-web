'use client';

import { Box, Text, useColorModeValue } from '@chakra-ui/react';

export default function Footer() {
  const bg = useColorModeValue('gray.50', 'gray.800');
  return (
    <Box bg={bg} w="100%" py={4} px={6} mt={8} textAlign="center">
      <Text fontSize="sm">© 2025 JURYBEE. All rights reserved.</Text>
    </Box>
  );
}