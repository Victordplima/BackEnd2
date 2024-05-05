import { Character } from '../src/services/character';
import { performAttackA, performAttackB } from '../src/services/attackUtils';

// Testes para implementação a
test("Should return 'Invalid Character' if either attacker or defender is invalid (implementation a)", () => {
  const attacker: Character = {
    nome: "Attacker",
    vida: 1500,
    defesa: 100,
    forca: 200
  };
  const invalidDefender: Character = {
    nome: "",
    vida: 1500,
    defesa: 100,
    forca: 200
  };
  
  const result = performAttackA(attacker, invalidDefender);
  expect(result).toBe("Invalid Character");
});

test("Should subtract attacker's strength minus defender's defense from defender's life (implementation a)", () => {
  const attacker: Character = {
    nome: "Attacker",
    vida: 1500,
    defesa: 100,
    forca: 200
  };
  const defender: Character = {
    nome: "Defender",
    vida: 1500,
    defesa: 50, // Defender's defense is lower
    forca: 100
  };
  
  performAttackA(attacker, defender);
  expect(defender.vida).toBe(1300); // 1500 - (200 - 50) = 1300
});

// Testes para implementação b
test("Should return 'Invalid Character' if either attacker or defender is invalid (implementation b)", () => {
  const attacker: Character = {
    nome: "Attacker",
    vida: 1500,
    defesa: 100,
    forca: 200
  };
  const invalidDefender: Character = {
    nome: "",
    vida: 1500,
    defesa: 100,
    forca: 200
  };
  
  const validator = jest.fn().mockReturnValue(false); // Mocking validator function
  const result = performAttackB(attacker, invalidDefender, validator);
  expect(result).toBe("Invalid Character");
});

test("Should subtract attacker's strength minus defender's defense from defender's life (implementation b)", () => {
  const attacker: Character = {
    nome: "Attacker",
    vida: 1500,
    defesa: 100,
    forca: 200
  };
  const defender: Character = {
    nome: "Defender",
    vida: 1500,
    defesa: 50, // Defender's defense is lower
    forca: 100
  };
  
  const validator = jest.fn().mockReturnValue(true); // Mocking validator function
  performAttackB(attacker, defender, validator);
  expect(defender.vida).toBe(1300); // 1500 - (200 - 50) = 1300
});
