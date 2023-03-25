import { atom } from 'jotai';

interface modalState {
  modalVariant: '' | 'transition' | 'open';
}

export const modalAtom = atom<modalState>({
  modalVariant: '',
});
