// LICENSE : MIT
"use strict";
export function isComment(string, commentFormatRegExp) {
    return commentFormatRegExp.test(string);
}

/**
 * get comment value from html comment tag
 * @param {string} commentValue <!-- comment -->
 * @returns {string[]}
 */
export function getValuesFromComment(commentValue, commentFormatRegExp) {
    const results = [];
    commentValue.replace(commentFormatRegExp, function(all, comment){
        results.push(comment);
    });
    return results;
}
/**
 * Parses a config of values separated by comma.
 * @param {string} string The string to parse.
 * @returns {Object} Result map of values and true values
 */
export function parseListConfig(string) {
    const items = {};

    // Collapse whitespace around ,
    string = string.replace(/\s*,\s*/g, ",");
    string.split(/,+/).forEach(function (name) {
        name = name.trim();
        if (!name) {
            return;
        }
        items[name] = true;
    });
    return items;
}

/**
 * parse "textlint-enable aRule, bRule" and return ["aRule", "bRule"]
 * @param {string} string
 * @returns {string[]}
 */
export function parseRuleIds(string) {
    return Object.keys(parseListConfig(string));
}
