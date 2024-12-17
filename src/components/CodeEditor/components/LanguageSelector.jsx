import {
	Box,
	Button,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
} from '@chakra-ui/react'
import { LANGUAGE_VERSIONS } from '../../../constants'

const languages = Object.entries(LANGUAGE_VERSIONS)
const ACTIVE_COLOR = '#f5f5f5'
const ACTIVE_BG = '#2E2E2E'

export const LanguageSelector = ({ currentLanguage, onSelect }) => {
	return (
		<Box mb={2}>
			<Menu isLazy>
				<MenuButton as={Button}>{currentLanguage}</MenuButton>
				<MenuList bg="#1E1E1E">
					{languages.map(([lang, ver]) => (
						<MenuItem
							key={lang}
							onClick={() => onSelect(lang)}
							color={lang === currentLanguage ? ACTIVE_COLOR : '#c5c5c5'}
							bg={lang === currentLanguage ? ACTIVE_BG : 'transparent'}
							_hover={{
								color: ACTIVE_COLOR,
								bg: ACTIVE_BG,
							}}
						>
							{lang}&nbsp;
							<Text as="span" color="#a5a5a5" fontSize="sm">
								{ver}
							</Text>
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</Box>
	)
}
