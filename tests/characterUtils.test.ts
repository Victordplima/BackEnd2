import { validateCharacter } from '../src/services/character';
import { performAttackA } from '../src/services/attackUtils';

test("Test with valid characters, where the defender loses 200 health points", () => {
  const mockValidateCharacter = jest.fn().mockReturnValue(true);

  const attacker = { nome: "Atacante", vida: 1500, defesa: 100, forca: 200 };
  const defender = { nome: "Defensor", vida: 1500, defesa: 50, forca: 100 };

  performAttackA(attacker, defender);

  expect(defender.vida).toBe(1300);
  expect(mockValidateCharacter).toHaveBeenCalledTimes(2);
  expect(mockValidateCharacter).toHaveBeenCalledWith(attacker);
  expect(mockValidateCharacter).toHaveBeenCalledWith(defender);
  expect(mockValidateCharacter.mock.results[0].value).toBe(true);
  expect(mockValidateCharacter.mock.results[1].value).toBe(true);
});

test("Test with invalid character information", () => {
  const mockValidateCharacter = jest.fn().mockReturnValue(false);
  
  const attacker = { nome: "", vida: 1500, defesa: 100, forca: 200 };
  const defender = { nome: "Defensor", vida: 1500, defesa: 50, forca: 100 };

  const resultA = performAttackA(attacker, defender);

  expect(resultA).toBe("Invalid Character");
  expect(mockValidateCharacter).toHaveBeenCalledTimes(2);
  expect(mockValidateCharacter).toHaveBeenCalledWith(attacker);
  expect(mockValidateCharacter).toHaveBeenCalledWith(defender);
  expect(mockValidateCharacter.mock.results[0].value).toBe(false);
  expect(mockValidateCharacter.mock.results[1].value).toBe(true);
});
