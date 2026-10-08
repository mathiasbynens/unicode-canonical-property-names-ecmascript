import assert from 'node:assert/strict';
import { test } from 'node:test';
import canonicalProperties from '../index.mjs';

test('unicode-canonical-property-names-ecmascript', () => {
	// Test non-binary properties.
	assert.ok(canonicalProperties.has('General_Category'));
	assert.ok(!canonicalProperties.has('gc'));
	assert.ok(canonicalProperties.has('Script'));
	assert.ok(!canonicalProperties.has('sc'));
	assert.ok(canonicalProperties.has('Script_Extensions'));
	assert.ok(!canonicalProperties.has('scx'));
	// Test binary properties.
	assert.ok(canonicalProperties.has('ASCII'));
	assert.ok(!canonicalProperties.has('ascii'));
	assert.ok(canonicalProperties.has('Any'));
	assert.ok(!canonicalProperties.has('any'));
	assert.ok(canonicalProperties.has('Assigned'));
	assert.ok(!canonicalProperties.has('assigned'));
	assert.ok(canonicalProperties.has('ID_Start'));
	assert.ok(!canonicalProperties.has('IDS'));
	assert.ok(canonicalProperties.has('Emoji_Modifier'));
	assert.ok(!canonicalProperties.has('emojimodifier'));
	assert.ok(canonicalProperties.has('Emoji_Component'));
	assert.ok(!canonicalProperties.has('emojicomponent'));
});
