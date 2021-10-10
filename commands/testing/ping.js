"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: 'Testing',
    description: 'Replies with pong',
    slash: 'both',
    testOnly: true,
    callback: function (_a) {
        var message = _a.message, interaction = _a.interaction;
        return ':ping_pong: Pong!';
    },
};
// !ping
// /ping
