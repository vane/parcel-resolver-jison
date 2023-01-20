var $gNHHt$parcelplugin = require("@parcel/plugin");
var $gNHHt$fs = require("fs");
var $gNHHt$jison = require("jison");

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

$parcel$export(module.exports, "default", () => $74e0c2ec41985d41$export$2e2bcd8739ae039);



var $74e0c2ec41985d41$export$2e2bcd8739ae039 = new (0, $gNHHt$parcelplugin.Resolver)({
    async resolve ({ specifier: specifier  }) {
        console.log(specifier);
        if ((0, ($parcel$interopDefault($gNHHt$fs))).existsSync(specifier)) {
            const source = await (0, ($parcel$interopDefault($gNHHt$fs))).readFile(specifier);
            const parser = new (0, ($parcel$interopDefault($gNHHt$jison))).Jison.Parser(source);
            return {
                filePath: specifier,
                code: parser.generate()
            };
        }
        return null;
    }
});


//# sourceMappingURL=JisonResolver.js.map
