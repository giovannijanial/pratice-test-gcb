const runChallange10 = <T>(arrA: T[], arrB: T[]) => {
	const equalsArr: T[] = [];
	arrA.map((value) => (arrB.includes(value) ? equalsArr.push(value) : null));

	return equalsArr;
};

export { runChallange10 };
