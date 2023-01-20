import {Resolver} from '@parcel/plugin';
import path from 'path';

export default new Resolver({
  async resolve({specifier, options, dependency}) {
    const exists = await options.inputFS.exists(specifier)

    if (!exists && dependency) {
      // split file name
      const a = dependency.resolveFrom.split('/');
      const basepath = a.slice(0, a.length - 1).join('/');

      // resolve path to file with jison extension
      const filePath = path.join(basepath, specifier + '.jison');

      const existsJison = await options.inputFS.exists(filePath);
      if (existsJison) {
        return {
          filePath,
        }
      }
    }
    return null;
  }
});