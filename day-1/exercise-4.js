export const my_size_alpha = (str) => {
	if (typeof str != "string")
		return 0;
	var count = 0;
	for (const i of str) {
		count++;
	}
	return count;
}
