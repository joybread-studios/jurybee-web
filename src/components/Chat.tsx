'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  VStack,
  HStack,
  Text,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi! I'm JURYBEE. Upload a contract or ask me a question." },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { sender: 'user', text: input }]);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: 'bot', text: `You asked: ${input}. Here's what I found...` },
        ]);
      }, 500);
      setInput('');
    }
  };

  const userBubbleColor = useColorModeValue('blue.100', 'blue.700');
  const botBubbleColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <Container height="100vh" maxW="container.md" py={6} display="flex" flexDirection="column" flex={1}>
      <Flex direction="column"  height="70vh" flex={1}>
        <VStack spacing={3} align="stretch" flex={1} overflowY="auto" maxH="70vh" mb={4}>
          {messages.map(({ sender, text }, i) => (
            <Box
              key={i}
              alignSelf={sender === 'user' ? 'flex-end' : 'flex-start'}
              maxW="80%"
            >
              <Box
                bg={sender === 'user' ? userBubbleColor : botBubbleColor}
                px={4}
                py={2}
                borderRadius="lg"
              >
                <Text>{text}</Text>
              </Box>
            </Box>
          ))}
        </VStack>
        <HStack>
          <Input
            placeholder="Ask a question or paste contract text..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            flex={1}
          />
          <Button onClick={sendMessage} colorScheme="blue">
            Send
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
}
