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

  const attributes = {
    Perception: char.Perception,
    Wits: char.Wits,
    Intelligence: char.Intelligence,
    Strength: char.Strength,
    Dexterity: char.Dexterity,
    Stamina: char.Stamina,
    Charisma: char.Charisma,
    Manipulation: char.Manipulation,
    Appearance: char.Appearance,
  };

  const info = {
    name: char.name,
    caste: char.caste,
    concept: char.concept,
    supernal: char.supernal,
  };

  const defense = {
      dex: char.Dexterity,
      sta: char.Stamina,
      man: char.Manipulation,
      wits: char.Wits,
      dodge: char.Dodge,
      brawl: char.Brawl,
      martial: char['Martial Arts'],
      melee: char.Melee,
      integrity: char.Integrity,
      socialize: char.Socialize,
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

  return { physical, mental, social, attributes, abilities, info, health, defense };
}
