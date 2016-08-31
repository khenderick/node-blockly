'use strict';

var _ = require('lodash');

var Blockly = require('./lib/blockly_compressed');

Blockly.Msg = _.extend(require('./lib/i18n/en'), Blockly.Msg);
Blockly.Msg = Blockly.Msg();

Blockly.Blocks = _.extend(Blockly.Blocks, require('./lib/blocks_compressed')(Blockly));
Blockly.Lua = require('./lib/lua_compressed')(Blockly);

module.exports = Blockly;
