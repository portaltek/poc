module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',

    clearMocks: true,
    coverageDirectory: 'dist/coverage',
    coveragePathIgnorePatterns: ['<rootDir>/node_modules/(?!@foo)'],

    moduleFileExtensions: ['ts', 'tsx', 'js'],
    moduleNameMapper: {
        '@/(.*)': '<rootDir>/src/$1',
    },

    testRegex: '(/tests/*.spec.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    transform: {
        '^.+\\.(ts|tsx)$': [
            'ts-jest',
            { tsConfigFile: 'tsconfig.json', enableTsDiagnostics: true },
        ],
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/(?!@foo)'],
}
