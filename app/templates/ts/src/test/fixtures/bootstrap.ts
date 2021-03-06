import * as pify from 'aws-lambda-pify';<% if (dependencies['bragg-route-invoke']) { %>
import * as invoke from 'bragg-route-invoke';<% } %>
import {loadEnv} from './env';

loadEnv();

const cwd = process.cwd();

export function bootstrap(test: any, method: string, path: string) {
	process.chdir(cwd);

	const options = {
		'http-method': method,
		'resource-path': path,
		identity: {},
		body: {},
		params: {},
		query: {}
	};

	test.before(() => {
		// Run setup script
	});

	test.after(() => {
		// Clean up resources
	});

	test.beforeEach(t => {
		t.context.fn = args => {
			const index = require('../..'); // tslint:disable-line:no-require-imports
			return pify(index.handler)({...options, ...args});
		};
	});
}
