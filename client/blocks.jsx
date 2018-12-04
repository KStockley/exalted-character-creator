const blank = require('./blank.jsx');

const physical = {
  Strength: blank.Strength,
  Dexterity: blank.Dexterity,
  Stamina: blank.Stamina,
};

const social = {
  Charisma: blank.Charisma,
  Manipulation: blank.Manipulation,
  Appearance: blank.Appearance,
};

const mental = {
  Perception: blank.Perception,
  Wits: blank.Wits,
  Intelligence: blank.Intelligence,
};

const info = {
  name: blank.name,
  caste: blank.caste,
  concept: blank.concept,
  supernal: blank.supernal,
};

const abilities = {
  Archery: blank.Archery,
  Athletics: blank.Athletics,
  Awareness: blank.Awareness,
  Brawl: blank.Brawl,
  Bureaucracy: blank.Bureaucracy,
  Craft: blank.Craft,
  Dodge: blank.Dodge,
  Integrity: blank.Integrity,
  Investigation: blank.Investigation,
  Larceny: blank.Larceny,
  Linguistics: blank.Linguistics,
  Lore: blank.Lore,
  'Martial Arts': blank['Martial Arts'],
  Medicine: blank.Medicine,
  Melee: blank.Melee,
  Occult: blank.Occult,
  Performance: blank.Performance,
  Presence: blank.Presence,
  Resistance: blank.Resistance,
  Ride: blank.Ride,
  Socialize: blank.Socialize,
  Stealth: blank.Stealth,
  Survival: blank.Survival,
  Thrown: blank.Thrown,
  War: blank.War,
};

const health = {
  '-0': 1,
  '-1': 2,
  '-2': 2,
  '-4': 1,
  incap: 1,
};

module.exports = { physical, mental, social, abilities, info, health };
