export function formatBytes(bytes) {
	const mg = bytes / (1024 * 1024);
	return mg.toFixed(2);
}
