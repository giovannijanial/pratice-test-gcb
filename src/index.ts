import { runChallange01 } from "./challenges/01/C-01";
import { runChallange02 } from "./challenges/02/C-02";
import { runChallange03 } from "./challenges/03/C-03";
import { runChallange04 } from "./challenges/04/C-04";
import { runChallange05 } from "./challenges/05/C-05";
import { runChallange06 } from "./challenges/06/C-06";
import { runChallange07 } from "./challenges/07/C-07";
import { runChallange08 } from "./challenges/08/C-08";
import { runChallange09 } from "./challenges/09/C-09";
import { runChallange10 } from "./challenges/10/C-10";

console.log("Welcome to the GCB challenge!!!");
console.log();

console.log("Challange 01: ");
console.log(runChallange01(2, "i"));
console.log();

console.log("Challange 02: ");
console.log(runChallange02([1, 2, 3, 4]));
console.log();

console.log("Challange 03: ");
console.log(runChallange03([1, "", undefined, 0, 4, "ola", false, null, true]));
console.log();

console.log("Challange 04: ");
console.log(
	runChallange04([
		["c", 2],
		["d", 4],
	])
);
console.log();

console.log("Challange 05: ");
console.log(runChallange05([5, 4, 3, 2, 5], [5, 3]));
console.log();

console.log("Challange 06: ");
console.log(runChallange06([1, 2, 3, 3, 2, 4, 5, 4, 7, 3]));
console.log();

console.log("Challange 07: ");
console.log(runChallange07([1, 2, 3, 4], [1, 2, 3, 4]));
console.log();

console.log("Challange 08: ");
console.log(runChallange08([1, 2, [3], [4, 5]]));
console.log();

console.log("Challange 09: ");
console.log(runChallange09([1, 2, 3, 4, 5], 2));
console.log();

console.log("Challange 10: ");
console.log(runChallange10([6, 8, 10], [8, 9, 11, 10]));
console.log();
