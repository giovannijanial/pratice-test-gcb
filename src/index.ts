import { runChallenge01 } from "./challenges/01/C-01";
import { runChallenge02 } from "./challenges/02/C-02";
import { runChallenge03 } from "./challenges/03/C-03";
import { runChallenge04 } from "./challenges/04/C-04";
import { runChallenge05 } from "./challenges/05/C-05";
import { runChallenge06 } from "./challenges/06/C-06";
import { runChallenge07 } from "./challenges/07/C-07";
import { runChallenge08 } from "./challenges/08/C-08";
import { runChallenge09 } from "./challenges/09/C-09";
import { runChallenge10 } from "./challenges/10/C-10";

console.log("Welcome to the GCB challenge!!!");
console.log();

console.log("Challenge 01: ");
console.log(runChallenge01(2, "i"));
console.log();

console.log("Challenge 02: ");
console.log(runChallenge02([1, 2, 3, 4]));
console.log();

console.log("Challenge 03: ");
console.log(runChallenge03([1, "", undefined, 0, 4, "ola", false, null, true]));
console.log();

console.log("Challenge 04: ");
console.log(
	runChallenge04([
		["c", 2],
		["d", 4],
	])
);
console.log();

console.log("Challenge 05: ");
console.log(runChallenge05([5, 4, 3, 2, 5], [5, 3]));
console.log();

console.log("Challenge 06: ");
console.log(runChallenge06([1, 2, 3, 3, 2, 4, 5, 4, 7, 3]));
console.log();

console.log("Challenge 07: ");
console.log(runChallenge07([1, 2, 3, 4], [1, 2, 3, 4]));
console.log();

console.log("Challenge 08: ");
console.log(runChallenge08([1, 2, [3], [4, 5]]));
console.log();

console.log("Challenge 09: ");
console.log(runChallenge09([1, 2, 3, 4, 5], 2));
console.log();

console.log("Challenge 10: ");
console.log(runChallenge10([6, 8, 10], [8, 9, 11, 10]));
console.log();
