export function getRandomInt(min: number, max: number) {
	return Math.floor(
		Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min),
	); // The maximum is exclusive and the minimum is inclusive
}
