const runChallenge03 = <T>(arr: any[]) => {
	let cleanArr: T[] = [];

	cleanArr = arr.filter((value) => !!value);

	return cleanArr;
};

export { runChallenge03 };
