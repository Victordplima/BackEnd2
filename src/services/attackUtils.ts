import { Character, validateCharacter } from './character';

// Implementação a: Utilizando a função de validação diretamente
export const performAttackA = (attacker: Character, defender: Character): void | string => {
  if (!validateCharacter(attacker) || !validateCharacter(defender)) {
    return "Invalid Character";
  }

  const damage = Math.max(0, attacker.forca - defender.defesa);
  defender.vida -= damage;
};

// Implementação b: Utilizando inversão de dependências
export const performAttackB = (attacker: Character, defender: Character, validator: (character: Character) => boolean): void | string => {
  if (!validator(attacker) || !validator(defender)) {
    return "Invalid Character";
  }

  const damage = Math.max(0, attacker.forca - defender.defesa);
  defender.vida -= damage;
};
