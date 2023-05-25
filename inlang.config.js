/**
 * See https://inlang.com
 */
export async function defineConfig(env) {
	const { default: pluginJson } = await env.$import(
		'https://cdn.jsdelivr.net/gh/inlang/plugin-i18next@1/dist/index.js'
	);

	const { default: standardLintRules } = await env.$import(
		'https://cdn.jsdelivr.net/gh/inlang/standard-lint-rules@2/dist/index.js'
	);
	
	return {
		referenceLanguage: 'en',
		plugins: [pluginJson({ 
			pathPattern: 'packages/app-project/public/locales/{language}/*.json',
		}), standardLintRules()]
	};
}
