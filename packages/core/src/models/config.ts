import { DiagramLayoutType } from '../types';
import { Record } from 'immutable';
import { ThemeType, defaultTheme } from '../configs/theme';

type ConfigRecordType = {
  readOnly?: boolean;
  layoutDir?: DiagramLayoutType;
  theme?: ThemeType;
};

const defaultConfigRecord: ConfigRecordType = {
  readOnly: false,
  layoutDir: DiagramLayoutType.LEFT_AND_RIGHT,
  theme: defaultTheme
};

export class Config extends Record(defaultConfigRecord) {
  get layoutDir(): DiagramLayoutType {
    return this.get('layoutDir');
  }

  get readOnly(): boolean {
    return this.get('readOnly');
  }

  get theme(): ThemeType {
    return this.get('theme');
  }

  static fromJSON(obj) {
    return new Config(obj);
  }
}
