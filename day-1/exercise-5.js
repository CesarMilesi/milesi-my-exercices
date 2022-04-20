export const my_array_alpha = (str) => {
	if (typeof str != "string")
		return [];
	var array = [];
	var count = 0;
	for (const i of str) {
		array[i] = i;
		count++;
	}
	return array;
}
