import { LANGUAGES } from './languages'

export const CODE_SNIPPETS = {
	[LANGUAGES.JS]: `function greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("World");\n`,
	[LANGUAGES.PY]: `def greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("World")\n`,
}
