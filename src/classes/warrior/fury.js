export const fury = {
  cruelty: {
    max: 5,
    totalRequirement: 0,
    path: 'ability_rogue_eviscerate.webp',
    spellIds: ['12321', '12835', '12836', '12837', '12838'],
    levels: [[1, 2, 3, 4, 5]],
  },
  booming_voice: {
    max: 5,
    totalRequirement: 0,
    path: 'spell_nature_purge.webp',
    spellIds: ['12320', '12852', '12853', '12855', '12856'],
    levels: [[10, 20, 30, 40, 50]],
  },

  improved_demoralizing_shout: {
    max: 5,
    totalRequirement: 5,
    path: 'ability_warrior_warcry.webp',
    spellIds: ['12324', '12876', '12877', '12878', '12879'],
    levels: [[8, 16, 24, 32, 40]],
  },
  unbridled_wrath: {
    max: 5,
    totalRequirement: 5,
    path: 'spell_nature_stoneclawtotem.webp',
    spellIds: ['12322', '12999', '13000', '13001', '13002'],
    levels: [[0, 1, 2, 3, 4]],
  },

  improved_cleave: {
    max: 3,
    totalRequirement: 10,
    path: 'ability_warrior_cleave.webp',
    spellIds: ['12329', '12950', '20496'],
    levels: [[40, 80, 120]],
  },
  piercing_howl: {
    max: 1,
    totalRequirement: 10,
    path: 'spell_shadow_deathscream.webp',
    spellIds: ['12323'],
    levels: [[1]],
    ability: {
      cost: '10 Rage',
      castTime: 'Instant',
    },
  },
  blood_craze: {
    max: 3,
    totalRequirement: 10,
    path: 'spell_shadow_summonimp.webp',
    spellIds: ['16487', '16489', '16492'],
    levels: [[1, 2, 3]],
  },
  commanding_presence: {
    max: 5,
    totalRequirement: 10,
    path: 'spell_nature_focusedmind.webp',
    spellIds: ['12318', '12857', '12858', '12860', '12861'],
    levels: [[3, 6, 9, 12, 15]],
  },

  dual_wield_specialization: {
    max: 5,
    totalRequirement: 15,
    path: 'ability_dualwield.webp',
    spellIds: ['23584', '23585', '23586', '23587', '23588'],
    levels: [[5, 10, 15, 20, 25]],
  },
  enrage: {
    max: 5,
    totalRequirement: 15,
    path: 'spell_shadow_unholyfrenzy.webp',
    spellIds: ['12317', '13045', '13046', '13047', '13048'],
    levels: [[5, 10, 15, 20, 25]],
  },

  improved_execute: {
    max: 5,
    totalRequirement: 20,
    path: 'inv_sword_48.webp',
    spellIds: ['20502', '20503'],
    levels: [[2, 5]],
  },
  death_wish: {
    max: 5,
    totalRequirement: 20,
    path: 'spell_shadow_deathpact.webp',
    spellIds: ['12292'],
    levels: [[1]],
    ability: {
      cost: '10 Rage',
      castTime: 'Instant',
      cooldown: '3 min',
    },
  },
  weapon_mastery: {
    max: 5,
    totalRequirement: 20,
    path: 'ability_warrior_weaponmastery.webp',
    spellIds: ['20504', '20505'],
    levels: [
      [1, 2],
      [25, 50],
    ],
  },

  improved_berserker_rage: {
    max: 2,
    totalRequirement: 25,
    path: 'spell_nature_ancestralguardian.webp',
    spellIds: ['20500', '20501'],
    levels: [[10, 20]],
  },
  flurry: {
    max: 5,
    totalRequirement: 25,
    path: 'ability_ghoulfrenzy.webp',
    spellIds: ['12319', '12971', '12972', '12973', '12974'],
    levels: [[5, 10, 15, 20, 25]],
    requires: 'enrage',
  },

  precision: {
    max: 3,
    totalRequirement: 30,
    path: 'ability_marksmanship.webp',
    spellIds: ['29590', '29591', '29592'],
    levels: [[1, 2, 3]],
  },
  bloodthirst: {
    max: 1,
    totalRequirement: 30,
    path: 'spell_nature_bloodlust.webp',
    spellIds: ['23881'],
    levels: [[1]],
    ability: {
      cost: '30 Rage',
      castTime: 'Instant',
      range: 'Melee Range',
      cooldown: '6 sec',
    },
    requires: 'death_wish',
  },
  improved_whirlwind: {
    max: 2,
    totalRequirement: 30,
    path: 'ability_whirlwind.webp',
    spellIds: ['29721', '29776'],
    levels: [[1, 2]],
  },

  improved_berserker_stance: {
    max: 5,
    totalRequirement: 35,
    path: 'ability_racial_avatar.webp',
    spellIds: ['29759', '29760', '29761', '29762', '29763'],
    levels: [[2, 4, 6, 8, 10]],
  },

  single_minded_fury: {
    max: 1,
    totalRequirement: 40,
    path: 'ability_warrior_incite.jpg',
    levels: [[1]],
    spellIds: ['150068'],
    requires: 'bloodthirst',
  },
}
