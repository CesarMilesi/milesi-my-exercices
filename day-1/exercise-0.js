export const my_sum = (a, b) => {
	if (a == null || b == null || typeof a != "number" || typeof b != "number")
		return 0;
	return a + b;
}
