/* Reverse order of a number. */

function reverse_number(n) {
	n = n + "";
	return n.split("").reverse().join("");
}

console.log(Number(reverse_number()));
