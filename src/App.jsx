import { Box, HStack } from '@chakra-ui/react'
import { CodeEditor, Task } from './components'

const App = () => {
	return (
		<Box minH="100vh" bg="#1A1A1A" color="#F5F5F5" p={2}>
			<HStack spacing={2}>
				<Task />
				<CodeEditor />
			</HStack>
		</Box>
	)
}

export default App
