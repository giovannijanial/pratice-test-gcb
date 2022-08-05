const runChallenge01 = <T>(size: number, value: T) => {
	let arr: T[] = [];
	for (let i = 0; i < size; i++) {
		arr.push(value);
	}
	return arr;
};

export { runChallenge01 };
