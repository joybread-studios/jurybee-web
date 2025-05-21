import { Container } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface BodyProps {
	children: ReactNode
}

const Body = ({ children }: BodyProps) => {
	return (
		<Container
			as="main"
			maxW="container.xl"
			minH="calc(100vh - 160px)" // Adjust this value based on your header/footer heights
			px={{ base: 4, md: 8 }}
			py={8}
		>
			{children}
		</Container>
	)
}

export default Body