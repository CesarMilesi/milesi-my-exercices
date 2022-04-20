import {my_display_alpha} from "./exercise-1.js";

export const my_display_alpha_reverse = () => {
	var alphabet = my_display_alpha();
	var stop = 'a';
	let result = "";
	let count = 0;
	for(let i = 0; stop != 'z'; i++) {
		stop = alphabet[i];
		count++;
	}
	for(let j = count - 1; j >= 0; j--) {
		result += alphabet[j];
	}
	return result;
}
