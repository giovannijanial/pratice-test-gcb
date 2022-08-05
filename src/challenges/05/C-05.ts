const runChallange05 = <T>(arr: T[], arrFilter: T[]) => {
	let filteredArr: T[] = [];

	filteredArr = arr.filter((value) => !arrFilter.includes(value));

	return filteredArr;
};

export { runChallange05 };
