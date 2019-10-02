export class ElementHelper {
    static addStyles(e, styleRules) {
        Object.keys(styleRules).forEach(styleRule => {
            if (typeof styleRules[styleRule] !== 'undefined') e.style[styleRule] = styleRules[styleRule];
        });
        return e;
    }
}