import { Text } from '@chakra-ui/react'

export const CodeBorder = ({ children }) => (
	<Text
		as="span"
		fontFamily="monospace"
		border="1px solid #3E3E3E"
		borderRadius="4px"
		p={1}
		w="fit-content"
	>
		{children}
	</Text>
)
