type letterState = 'empty' | 'non-empty' | 'miss-place' | 'not-belong' | 'success';

export interface ILetter {
  value: string;
  state: letterState;
};
