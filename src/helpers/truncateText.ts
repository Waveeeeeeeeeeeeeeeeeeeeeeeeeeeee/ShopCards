export function truncateText(
	text: string,
	maxLength: number = 150,
): [string, []] | [string[], string[]] {
	const splitedText = text.split("");

	if (splitedText.length <= maxLength) {
		return [text, []];
	}

	const truncatedText: string[] = [];

	for (let i = maxLength; i < splitedText.length; i++) {
		truncatedText.push(splitedText[i]);
	}

	splitedText.length = 150;

	return [splitedText, truncatedText];
}
