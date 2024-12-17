import { Box, Button, Text, useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { executeCode } from '../../../api'

export const Output = ({ editorRef, currentLanguage }) => {
	const [output, setOutput] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)

	const toast = useToast()

	const runCode = async () => {
		const sourceCode = editorRef.current.getValue()
		if (!sourceCode) return

		try {
			setIsLoading(true)
			const { run } = await executeCode(currentLanguage, sourceCode)
			setOutput(run.output.split('\n'))
			run.stderr ? setIsError(true) : setIsError(false)
		} catch (err) {
			console.error('Error running code:', err)
			toast({
				title: 'Error running code',
				description: err.message || 'Unknown error',
				status: 'error',
				duration: 4000,
				isClosable: true,
			})
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		setOutput('')
		setIsError(false)
	}, [currentLanguage])

	return (
		<Box>
			<Button
				variant="outline"
				colorScheme="green"
				mb={2}
				onClick={runCode}
				isLoading={isLoading}
			>
				Run
			</Button>
			<Box
				height="43vh"
				p={4}
				borderRadius={4}
				color={isError ? 'red.400' : ''}
				bg="#1E1E1E"
			>
				{output
					? output.map((line, index) => <Text key={index}>{line}</Text>)
					: 'Click "Run" to see the output'}
			</Box>
		</Box>
	)
}
