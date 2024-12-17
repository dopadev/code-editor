import { Box, Stack, Text } from '@chakra-ui/react'
import { Bold, Code, CodeBorder } from './components'
import './Task.css'

export const Task = () => {
	return (
		<Box
			w="50%"
			h="98vh"
			bg="#1E1E1E"
			p={4}
			borderRadius={4}
			border="1px solid #3E3E3E"
		>
			<Stack spacing={3}>
				<Text fontSize="2xl" fontWeight="bold">
					Two Sum
				</Text>
				<Text>
					Given an array of integers <CodeBorder>nums</CodeBorder> and an integer{' '}
					<CodeBorder>target</CodeBorder>, return indices of the two numbers such
					that they add up to <CodeBorder>target</CodeBorder>.
				</Text>
				<Text>
					You may assume that each input would have exactly one solution, and you may
					not use the same element twice.
				</Text>
				<Text>You can return the answer in any order.</Text>
				<Text></Text>
				<Text></Text>
				<Bold>Example 1:</Bold>
				<Code>Input: nums = [2,7,11,15], target = 9</Code>
				<Code>
					Output: [0,1] Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]
				</Code>
				<Bold>Example 2:</Bold>
				<Code>Input: nums = [3,2,4], target = 6</Code>
				<Code>Output: [1,2]</Code>
				<Bold>Example 3:</Bold>
				<Code>Input: nums = [3,3], target = 6</Code>
				<Code>Output: [0,1]</Code>
				<Text></Text>
				<Text></Text>
				<Bold>Constraints:</Bold>
				<CodeBorder>{'2 <= nums.length <= 104'}</CodeBorder>
				<CodeBorder>{'-109 <= nums[i] <= 109'}</CodeBorder>
				<CodeBorder>{'-109 <= target <= 109'}</CodeBorder>
			</Stack>
		</Box>
	)
}
