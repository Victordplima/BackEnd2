import { Character, validateCharacter } from '../src/services/character';

test("Should return false for empty name", () => {
    const character: Character = {
        nome: "",
        vida: 1500,
        defesa: 100,
        forca: 200
    };
    const result = validateCharacter(character);
    expect(result).toBe(false);
});

test("Should return false for life 0", () => {
    const character: Character = {
        nome: "Teste",
        vida: 0,
        defesa: 100,
        forca: 200
    };
    const result = validateCharacter(character);
    expect(result).toBe(false);
});

test("Should return false for strength 0", () => {
    const character: Character = {
        nome: "Teste",
        vida: 1500,
        defesa: 100,
        forca: 0
    };
    const result = validateCharacter(character);
    expect(result).toBe(false);
});

test("Should return false for defense 0", () => {
    const character: Character = {
        nome: "Teste",
        vida: 1500,
        defesa: 0,
        forca: 200
    };
    const result = validateCharacter(character);
    expect(result).toBe(false);
});

test("Should return false for negative life/strength/defense", () => {
    const character: Character = {
        nome: "Teste",
        vida: -100,
        defesa: 100,
        forca: 200
    };
    const result = validateCharacter(character);
    expect(result).toBe(false);
});

test("Should return true for valid character information", () => {
    const character: Character = {
        nome: "Teste",
        vida: 1500,
        defesa: 100,
        forca: 200
    };
    const result = validateCharacter(character);
    expect(result).toBe(true);
});
