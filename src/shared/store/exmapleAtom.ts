import { atom } from 'recoil';

// в папке shared/store будут хранится recoil state которые используются в разных местах всего приложения
// например открытие бургер меню или еще что то типа того
export const exampleAtom = atom({
  key: 'exampleAtom',
  default: 'example string',
});
