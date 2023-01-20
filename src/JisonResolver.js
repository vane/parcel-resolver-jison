import {Resolver} from '@parcel/plugin';
import path from 'path';
import jison from 'jison';

export default new Resolver({
  async resolve({specifier, options, dependency}) {
    const exists = await options.inputFS.exists(specifier)
    if (!exists && dependency) {
      const a = dependency.resolveFrom.split('/');
      const basepath = a.slice(0, a.length - 1).join('/');
      const specpath = specifier + '.jison'
      const fpath = path.join(basepath, specpath);
      const existsJison = await options.inputFS.exists(fpath);
      if (existsJison) {
        const source = await options.inputFS.readFile(fpath);
        const sourceString = source.toString();
        const parser = new jison.Jison.Parser(sourceString);
        return {
          filePath: fpath,
          code: parser.generate()
        }
      }
    }
    return null;
  }
});