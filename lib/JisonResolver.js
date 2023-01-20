var $cL5Cs$parcelplugin = require("@parcel/plugin");
var $cL5Cs$path = require("path");
var $cL5Cs$jison = require("jison");

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
            const a = dependency.resolveFrom.split("/");
            const basepath = a.slice(0, a.length - 1).join("/");
            const specpath = specifier + ".jison";
            const fpath = (0, ($parcel$interopDefault($cL5Cs$path))).join(basepath, specpath);
            const existsJison = await options.inputFS.exists(fpath);
            if (existsJison) {
                const source = await options.inputFS.readFile(fpath);
                const sourceString = source.toString();
                const parser = new (0, ($parcel$interopDefault($cL5Cs$jison))).Jison.Parser(sourceString);
                return {
                    filePath: fpath,
                    code: parser.generate()
                };
            }
        }
        return null;
    }
});


//# sourceMappingURL=JisonResolver.js.map
