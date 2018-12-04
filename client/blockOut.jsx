module.exports = blockOut = (char) => {
  
  const physical = {
    Strength: char.Strength,
    Dexterity: char.Dexterity,
    Stamina: char.Stamina,
  };

  const social = {
    Charisma: char.Charisma,
    Manipulation: char.Manipulation,
    Appearance: char.Appearance,
  };

  const mental = {
    Perception: char.Perception,
    Wits: char.Wits,
    Intelligence: char.Intelligence,
  };

  const info = {
    name: char.name,
    caste: char.caste,
    concept: char.concept,
    supernal: char.supernal,
  };

  const abilities = {
    Archery: char.Archery,
    Athletics: char.Athletics,
    Awareness: char.Awareness,
    Brawl: char.Brawl,
    Bureaucracy: char.Bureaucracy,
    Craft: char.Craft,
    Dodge: char.Dodge,
    Integrity: char.Integrity,
    Investigation: char.Investigation,
    Larceny: char.Larceny,
    Linguistics: char.Linguistics,
    Lore: char.Lore,
    'Martial Arts': char['Martial Arts'],
    Medicine: char.Medicine,
    Melee: char.Melee,
    Occult: char.Occult,
    Performance: char.Performance,
    Presence: char.Presence,
    Resistance: char.Resistance,
    Ride: char.Ride,
    Socialize: char.Socialize,
    Stealth: char.Stealth,
    Survival: char.Survival,
    Thrown: char.Thrown,
    War: char.War,
  };

  const health = {
    '-0': 1,
    '-1': 2,
    '-2': 2,
    '-4': 1,
    incap: 1,
  };

  return { physical, mental, social, abilities, info, health };
}
