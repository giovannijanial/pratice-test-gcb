const runChallange07 = <T>(arrA: T[], arrB: T[]) => {
	const jsonArrA = JSON.stringify(arrA);
	const jsonArrB = JSON.stringify(arrB);

	return jsonArrA === jsonArrB;
};

export { runChallange07 };
