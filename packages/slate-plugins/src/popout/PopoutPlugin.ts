import { SlatePlugin } from '../types';
import { onKeyDownPopout } from './onKeyDownPopout';

export const PopoutPlugin = (types: string[]): SlatePlugin => ({
  onKeyDown: onKeyDownPopout(types),
});
