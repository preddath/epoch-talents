export const assassination = {
  improved_eviscerate: {
    max: 3,
    totalRequirement: 0,
    path: 'ability_rogue_eviscerate.webp',
    spellIds: ['14162', '14163', '14164'],
    levels: [[5, 10, 15]],
  },
  remorseless_attacks: {
    max: 2,
    totalRequirement: 0,
    path: 'ability_fiegndead.webp',
    spellIds: ['14144', '14148'],
    levels: [[20, 40]],
  },
  malice: {
    max: 5,
    totalRequirement: 0,
    path: 'ability_racial_bloodrage.webp',
    spellIds: ['14138', '14139', '14140', '14141', '14142'],
    levels: [[1, 2, 3, 4, 5]],
  },

  ruthlessness: {
    max: 3,
    totalRequirement: 5,
    path: 'ability_druid_disembowel.webp',
    spellIds: ['14156', '14160', '14161'],
    levels: [[20, 40, 60]],
  },
  murder: {
    max: 2,
    totalRequirement: 5,
    path: 'spell_shadow_deathscream.webp',
    spellIds: ['14158', '14159'],
    levels: [[1, 2]],
  },
  puncturing_wounds: {
    max: 3,
    totalRequirement: 5,
    path: 'ability_backstab.webp',
    spellIds: ['13733', '13865', '13866'],
    levels: [
      [10, 20, 30],
      [5, 10, 15],
    ],
  },

  relentless_strikes: {
    max: 1,
    totalRequirement: 10,
    path: 'ability_warrior_decisivestrike.webp',
    spellIds: ['14179'],
    levels: [[20]],
  },
  improved_expose_armor: {
    max: 2,
    totalRequirement: 10,
    path: 'ability_warrior_riposte.webp',
    spellIds: ['14168', '14169'],
    levels: [[13, 25]],
  },
  lethality: {
    max: 5,
    totalRequirement: 10,
    path: 'ability_criticalstrike.webp',
    spellIds: ['14128', '14132', '14135', '14136', '14137'],
    levels: [[6, 12, 18, 24, 30]],
  },

  vile_poisons: {
    max: 5,
    totalRequirement: 15,
    path: 'ability_rogue_feigndeath.webp',
    spellIds: ['16513', '16514', '16515', '16719', '16720'],
    levels: [
      [4, 8, 12, 16, 20],
      [8, 16, 24, 32, 40],
    ],
  },
  improved_poisons: {
    max: 5,
    totalRequirement: 15,
    path: 'ability_poisons.webp',
    spellIds: ['14113', '14114', '14115', '14116', '14117'],
    levels: [
      [2, 4, 6, 8, 10],
      [10, 20, 30, 40, 50],
    ],
  },

  fleet_footed: {
    max: 2,
    totalRequirement: 20,
    path: 'ability_rogue_fleetfooted.webp',
    spellIds: ['31208', '31209'],
    levels: [
      [5, 10],
      [8, 15],
    ],
  },
  cold_blooded: {
    max: 1,
    totalRequirement: 20,
    path: 'spell_ice_lament.webp',
    spellIds: ['14177'],
    levels: [[1]],
    ability: {
      castTime: 'Instant',
      cooldown: '1 min',
    },
  },
  improved_kidney_shot: {
    max: 3,
    totalRequirement: 20,
    path: 'ability_rogue_kidneyshot.webp',
    spellIds: ['14174', '14175', '14176'],
    levels: [[3, 6, 9]],
  },
  quick_recovery: {
    max: 2,
    totalRequirement: 20,
    path: 'ability_rogue_quickrecovery.webp',
    spellIds: ['31244', '31245'],
    levels: [
      [10, 20],
      [40, 80],
    ],
  },

  poisoned_knife: {
    max: 2,
    totalRequirement: 25,
    path: 'inv_throwingknife_04.webp',
    spellIds: ['84576', '84577'],
    levels: [[50, 100]],
  },
  seal_fate: {
    max: 5,
    totalRequirement: 25,
    path: 'spell_shadow_chilltouch.webp',
    spellIds: ['14186', '14190', '14193', '14194', '14195'],
    levels: [[20, 40, 60, 80, 100]],
  },
  master_poisoner: {
    max: 2,
    totalRequirement: 25,
    path: 'ability_creature_poison_06.webp',
    spellIds: ['31226', '31227'],
    levels: [
      [5, 10],
      [15, 30],
      [50, 100],
    ],
  },

  vigor: {
    max: 1,
    totalRequirement: 30,
    path: 'spell_nature_earthbindtotem.webp',
    spellIds: ['14983'],
    levels: [[20]],
  },
  deadened_nerves: {
    max: 5,
    totalRequirement: 30,
    path: 'ability_rogue_deadenednerves.webp',
    spellIds: ['31380', '31382', '31383', '31384', '31385'],
    levels: [[1, 2, 3, 4, 5]],
  },

  find_weakness: {
    max: 5,
    totalRequirement: 35,
    path: 'ability_rogue_findweakness.webp',
    spellIds: ['31233', '31239', '31240', '31241', '31242'],
    levels: [[2, 4, 6, 8, 10]],
  },

  mutilate: {
    max: 1,
    totalRequirement: 40,
    path: 'ability_rogue_shadowstrikes.webp',
    spellIds: ['1329'],
    levels: [[1]],
    ability: {
      castTime: 'Instant',
      range: 'Melee Range',
      cost: '60 Energy',
      items: 'Requires Daggers',
    },
  },
}
