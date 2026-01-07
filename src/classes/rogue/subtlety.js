export const subtlety = {
  master_of_deception: {
    max: 5,
    totalRequirement: 0,
    path: 'spell_shadow_charm.webp',
    spellIds: ['13958', '13970', '13971', '13972', '13973'],
    levels: [[0, 1, 2, 3, 4]],
  },
  opportunity: {
    max: 5,
    totalRequirement: 0,
    path: 'ability_warrior_warcry.webp',
    spellIds: ['14057', '14072', '14073', '14074', '14075'],
    levels: [[4, 8, 12, 16, 20]],
  },

  sleight_of_hand: {
    max: 2,
    totalRequirement: 5,
    path: 'ability_rogue_feint.webp',
    spellIds: ['30892', '30893'],
    levels: [
      [1, 2],
      [10, 20],
    ],
  },
  dirty_tricks: {
    max: 2,
    totalRequirement: 5,
    path: 'ability_sap.webp',
    spellIds: ['14076', '14094'],
    levels: [
      [2, 5],
      [25, 50],
    ],
  },
  camouflage: {
    max: 5,
    totalRequirement: 5,
    path: 'ability_stealth.webp',
    spellIds: ['13975', '14062', '14063', '14064', '14065'],
    levels: [
      [3, 6, 9, 12, 15],
      [1, 2, 3, 4, 5],
    ],
  },

  initiative: {
    max: 3,
    totalRequirement: 10,
    path: 'spell_shadow_fumble.webp',
    spellIds: ['13976', '13979', '13980'],
    levels: [[25, 50, 75]],
  },
  ghostly_strike: {
    max: 1,
    totalRequirement: 10,
    path: 'spell_shadow_curse.webp',
    spellIds: ['14278'],
    levels: [[1]],
    ability: {
      cost: '40 Energy',
      range: 'Melee Range',
      case: 'Instant',
      items: 'Requires Melee Weapon',
    },
  },
  improved_ambush: {
    max: 3,
    totalRequirement: 10,
    path: 'ability_rogue_ambush.webp',
    spellIds: ['14079', '14080', '14081'],
    levels: [[15, 30, 45]],
  },

  setup: {
    max: 3,
    totalRequirement: 15,
    path: 'spell_nature_mirrorimage.webp',
    spellIds: ['13983', '14070', '14071'],
    levels: [[15, 30, 45]],
  },
  elusiveness: {
    max: 2,
    totalRequirement: 15,
    path: 'spell_magic_lesserinvisibilty.webp',
    spellIds: ['13981', '14066'],
    levels: [[45, 90]],
  },
  serrated_blades: {
    max: 3,
    totalRequirement: 15,
    path: 'inv_sword_17.webp',
    spellIds: ['14171', '14172', '14173'],
    levels: [
      [160, 320, 480],
      [10, 20, 30],
    ],
  },

  heightened_senses: {
    max: 2,
    totalRequirement: 20,
    path: 'ability_ambush.webp',
    spellIds: ['30894', '30895'],
    levels: [[2, 4]],
  },
  preparation: {
    max: 1,
    totalRequirement: 20,
    path: 'spell_shadow_antishadow.webp',
    spellIds: ['14185'],
    levels: [[1]],
    ability: {
      castTime: 'Instant',
      cooldown: '10 min',
    },
  },
  dirty_deeds: {
    max: 2,
    totalRequirement: 20,
    path: 'spell_shadow_summonsuccubus.webp',
    spellIds: ['14082', '14083'],
    levels: [[10, 20]],
  },
  hemorrhage: {
    max: 1,
    totalRequirement: 20,
    path: 'spell_shadow_lifedrain.webp',
    spellIds: ['16511'],
    levels: [[1]],
    ability: {
      castTime: 'Instant',
      cost: '35 Energy',
      range: 'Melee Range',
      items: 'Requires Melee Weapon',
    },
  },

  master_of_subtlety: {
    max: 3,
    totalRequirement: 25,
    path: 'ability_rogue_masterofsubtlety.webp',
    spellIds: ['31221', '31222', '31223'],
    levels: [[4, 7, 10]],
  },
  deadliness: {
    max: 5,
    totalRequirement: 25,
    path: 'inv_weapon_crossbow_11.webp',
    spellIds: ['30902', '30903', '30904', '30905', '30906'],
    levels: [[2, 4, 6, 8, 10]],
  },

  enveloping_shadows: {
    max: 3,
    totalRequirement: 30,
    path: 'ability_rogue_envelopingshadows.webp',
    spellIds: ['31211', '31212', '31213'],
    levels: [[5, 10, 15]],
  },
  premeditation: {
    max: 1,
    totalRequirement: 30,
    path: 'spell_shadow_possession.webp',
    spellIds: ['14183'],
    levels: [[1]],
    ability: {
      castTime: 'Instant',
      cooldown: '30 sec',
      items: 'Requires Stealth',
    },
  },
  cheat_death: {
    max: 3,
    totalRequirement: 30,
    path: 'ability_rogue_cheatdeath.webp',
    spellIds: ['31228', '31229', '31230'],
    levels: [[33, 66, 100]],
  },

  sinister_calling: {
    max: 5,
    totalRequirement: 35,
    path: 'ability_rogue_sinistercalling.webp',
    spellIds: ['31216', '31217', '31218', '31219', '31220'],
    levels: [
      [3, 6, 9, 12, 15],
      [1, 2, 3, 4, 5],
    ],
  },

  shadowstep: {
    max: 1,
    totalRequirement: 40,
    path: 'ability_rogue_shadowstep.webp',
    spellIds: ['36554'],
    levels: [[1]],
    ability: {
      castTime: 'Instant',
      cooldown: '30 sec',
    },
  },
}
