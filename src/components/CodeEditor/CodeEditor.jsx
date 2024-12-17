import { Box, Stack } from '@chakra-ui/react'
import { Editor } from '@monaco-editor/react'
import { useRef, useState } from 'react'
import { CODE_SNIPPETS, LANGUAGES } from '../../constants'
import { LanguageSelector, Output } from './components'

export const CodeEditor = () => {
	const [value, setValue] = useState('')
	const [currentLanguage, setCurrentLanguage] = useState(LANGUAGES.JS)
	const editorRef = useRef(null)

	const onSelect = language => {
		setCurrentLanguage(language)
		setValue(CODE_SNIPPETS[language])
	}

	const onMount = editor => {
		editorRef.current = editor
		editor.focus()
	}

	return (
		<Box w="50%" h="98vh">
			<Stack spacing={2}>
				<Box>
					<LanguageSelector currentLanguage={currentLanguage} onSelect={onSelect} />
					<Editor
						height="43vh"
						theme="vs-dark"
						defaultValue={CODE_SNIPPETS[currentLanguage]}
						language={currentLanguage}
						value={value}
						onChange={value => setValue(value)}
						onMount={onMount}
						options={{
							minimap: {
								enabled: false,
							},
							scrollBeyondLastLine: false,
						}}
					/>
				</Box>
				<Output editorRef={editorRef} currentLanguage={currentLanguage} />
			</Stack>
		</Box>
	)
}
