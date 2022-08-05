const runChallange06 = <T>(arr: T[]) => {
	let filteredArr: T[] = [];

	for (const value of arr) {
		if (!filteredArr.includes(value)) {
			filteredArr.push(value);
		}
	}

	return filteredArr;
};

export { runChallange06 };
