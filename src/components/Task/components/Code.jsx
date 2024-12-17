import { Text } from '@chakra-ui/react'

export const Code = ({ children }) => (
	<Text as="span" fontFamily="monospace" pl={4}>
		{children}
	</Text>
)
