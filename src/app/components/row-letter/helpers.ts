import { ILetter } from '../../interfaces/letter.interface';

export const changeLettersState = (letters: ILetter[], secretWord: string) => {
  const counter: Record<string, number> = {};

  for (let i = 0; i < secretWord.length; i++) {
    if (counter[secretWord[i]]) counter[secretWord[i]]++;
    else counter[secretWord[i]] = 1;

    if (secretWord[i] === letters[i].value) {
      letters[i].state = 'success';
      counter[secretWord[i]]--;
    }
  }

  for (let i = 0; i < secretWord.length; i++) {
    if (secretWord[i] === letters[i].value) continue;

    if (counter[letters[i].value] > 0) {
      counter[letters[i].value]--;
      letters[i].state = 'miss-place';
    } else letters[i].state = 'not-belong';
  }

  return letters;
};
