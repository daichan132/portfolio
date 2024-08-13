export function hexToRGBA(hex: string, alpha: number) {
	const r = Number.parseInt(hex.slice(1, 3), 16);
	const g = Number.parseInt(hex.slice(3, 5), 16);
	const b = Number.parseInt(hex.slice(5, 7), 16);

	if (alpha) {
		return `rgba(${r}, ${g}, ${b}, ${alpha})`;
	}
	return `rgb(${r}, ${g}, ${b})`;
}
