const mongoose = require('mongoose');

const charSchema = new mongoose.Schema({
  name: String,
  caste: String,
  concept: String,
  supernal: String,
  physical: {
    strength: Number,
    dexterity: Number,
    stamina: Number,
  },
  social: {
    charisma: Number,
    manipulation: Number,
    appearance: Number,
  },
  mental: {
    perception: Number,
    wits: Number,
    intelligence: Number,
  },
  abilities: {
    archery: Number,
    athletics: Number,
    awareness: Number,
    brawl: Number,
    buereacracy: Number,
    craft: Number,
    dodge: Number,
    integrity: Number,
    investigation: Number,
    larceny: Number,
    linguistics: Number,
    lore: Number,
    martial: Number,
    medicine: Number,
    melee: Number,
    occult: Number,
    performance: Number,
    presence: Number,
    resistance: Number,
    ride: Number,
    socialize: Number,
    stealth: Number,
    survival: Number,
    thrown: Number,
    war: Number,
  },
  willpower: Number,
  essence: {
    rating: Number,
    personal: Number,
    peripheral: Number,
  },
  parry: Number,
  evasion: Number,
  soak: Number,
  resolve: Number,
  guile: Number,
  health: {
    '-0': Number,
    '-1': Number,
    '-2': Number,
    '-4': Number,
    incap: Number,
  },
});

module.exports.schema = charSchema;
