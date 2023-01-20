var $cL5Cs$parcelplugin = require("@parcel/plugin");
var $cL5Cs$path = require("path");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $d8b85c31abb9d389$export$2e2bcd8739ae039);


var $d8b85c31abb9d389$export$2e2bcd8739ae039 = new (0, $cL5Cs$parcelplugin.Resolver)({
    async resolve ({ specifier: specifier , options: options , dependency: dependency  }) {
        const exists = await options.inputFS.exists(specifier);
        if (!exists && dependency) {
            // split file name
            const a = dependency.resolveFrom.split("/");
            const basepath = a.slice(0, a.length - 1).join("/");
            // resolve path to file with jison extension
            const filePath = (0, ($parcel$interopDefault($cL5Cs$path))).join(basepath, specifier + ".jison");
            const existsJison = await options.inputFS.exists(filePath);
            if (existsJison) return {
                filePath: filePath
            };
        }
        return null;
    }
});


//# sourceMappingURL=JisonResolver.js.map
