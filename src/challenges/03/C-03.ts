const runChallange03 = <T>(arr: any[]) => {
	let cleanArr: T[] = [];

	cleanArr = arr.filter((value) => !!value);

	return cleanArr;
};

export { runChallange03 };
