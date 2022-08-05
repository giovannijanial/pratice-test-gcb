const runChallange02 = <T>(arr: T[]) => {
	const invertedArr: T[] = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		invertedArr.push(arr[i]);
	}
	return invertedArr;
};

export { runChallange02 };
