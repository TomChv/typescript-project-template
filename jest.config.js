module.exports = {
	roots: ['<rootDir>'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	testMatch: ['**/tests/**/*.ts?()'],
	moduleFileExtensions: ['ts', 'js'],
};
