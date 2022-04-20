export const my_is_posi_neg = (nbr) => {
	if (nbr == 0)
		return "NEUTRAL";
	if (nbr < 0)
		return "NEGATIF";
	else
		return "POSITIF";
}
