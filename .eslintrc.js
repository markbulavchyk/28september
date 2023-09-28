module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	// 'extends': 'eslint:recommended', // отвечает за то что если переменная не использывается 
	//                                  // после объявления то она указана как ошибка
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'rules': {
		'indent': [
			'warn',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
        'no-unused-vars': [
            'warn'
        ]
	}
};
