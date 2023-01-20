import {Resolver} from '@parcel/plugin';
import fs from 'fs';
import jison from 'jison';

export default new Resolver({
  async resolve({specifier}) {
    console.log(specifier);
    if(fs.existsSync(specifier)) {
      const source = await fs.readFile(specifier)
      const parser = new jison.Jison.Parser(source);
      return {
        filePath: specifier,
        code: parser.generate()
      };
    }
    return null;
  }
});