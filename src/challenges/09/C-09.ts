const runChallange09 = <T>(arr: T[], size: number) => {
	const newArr: T[][] = [];
	for (let i = 0; i < arr.length; i = i + size) {
		newArr.push(arr.slice(i, i + size));
	}
	return newArr;
};

export { runChallange09 };
