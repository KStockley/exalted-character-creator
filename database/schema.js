const mongoose = require('mongoose');

const charSchema = new mongoose.Schema({
  info: {
    name: String,
    caste: String,
    concept: String,
    supernal: String,
  },
  physical: {
    Strength: Number,
    Dexterity: Number,
    Stamina: Number,
  },
  social: {
    Charisma: Number,
    Manipulation: Number,
    Appearance: Number,
  },
  mental: {
    Perception: Number,
    Wits: Number,
    Intelligence: Number,
  },
  abilities: {
    Archery: Number,
    Athletics: Number,
    Awareness: Number,
    Brawl: Number,
    Buereacracy: Number,
    Craft: Number,
    Dodge: Number,
    Integrity: Number,
    Investigation: Number,
    Larceny: Number,
    Linguistics: Number,
    Lore: Number,
    'Martial Arts': Number,
    Medicine: Number,
    Melee: Number,
    Occult: Number,
    Performance: Number,
    Presence: Number,
    Resistance: Number,
    Ride: Number,
    Socialize: Number,
    Stealth: Number,
    Survival: Number,
    Thrown: Number,
    War: Number,
  },
  willpower: Number,
  essence: Number,
  health: {
    '-0': Number,
    '-Number': Number,
    '-2': Number,
    '-4': Number,
    incap: Number,
  },
});

module.exports.schema = charSchema;
