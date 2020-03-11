const test = require('ava');
const canonicalProperties = require('../index.js');

test('unicode-canonical-property-names-ecmascript', t => {
	// Test non-binary properties.
	t.true(canonicalProperties.has('General_Category'));
	t.false(canonicalProperties.has('gc'));
	t.true(canonicalProperties.has('Script'));
	t.false(canonicalProperties.has('sc'));
	t.true(canonicalProperties.has('Script_Extensions'));
	t.false(canonicalProperties.has('scx'));
	// Test binary properties.
	t.true(canonicalProperties.has('ASCII'));
	t.false(canonicalProperties.has('ascii'));
	t.true(canonicalProperties.has('Any'));
	t.false(canonicalProperties.has('any'));
	t.true(canonicalProperties.has('Assigned'));
	t.false(canonicalProperties.has('assigned'));
	t.true(canonicalProperties.has('ID_Start'));
	t.false(canonicalProperties.has('IDS'));
	t.true(canonicalProperties.has('Emoji_Modifier'));
	t.false(canonicalProperties.has('emojimodifier'));
	t.true(canonicalProperties.has('Emoji_Component'));
	t.false(canonicalProperties.has('emojicomponent'));
});
