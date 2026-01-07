export const protection = {
  improved_bloodrage: {
    max: 2,
    totalRequirement: 0,
    path: 'ability_racial_bloodrage.webp',
    spellIds: ['12301', '12818'],
    levels: [[3, 6]],
  },
  tactical_mastery: {
    max: 3,
    totalRequirement: 0,
    path: 'spell_nature_enchantarmor.webp',
    spellIds: ['12295', '12676', '12677'],
    levels: [[5, 10, 15]],
  },
  anticipation: {
    max: 5,
    totalRequirement: 0,
    path: 'spell_nature_mirrorimage.webp',
    spellIds: ['12297', '12750', '12751', '12752', '12753'],
    levels: [[4, 8, 12, 16, 20]],
  },

  shield_specialization: {
    max: 5,
    totalRequirement: 5,
    path: 'inv_shield_06.webp',
    spellIds: ['12298', '12724', '12725', '12726', '12727'],
    levels: [
      [1, 2, 3, 4, 5],
      [20, 40, 60, 80, 100],
    ],
  },
  toughness: {
    max: 5,
    totalRequirement: 5,
    path: 'spell_holy_devotion.webp',
    spellIds: ['12299', '12761', '12762', '12763', '12764'],
    levels: [[2, 4, 6, 8, 10]],
  },

  last_stand: {
    max: 1,
    totalRequirement: 10,
    path: 'spell_holy_ashestoashes.webp',
    spellIds: ['12975'],
    levels: [[1]],
    ability: {
      castTime: 'Instant',
      cooldown: '8 min',
    },
  },
  improved_shield_block: {
    max: 1,
    totalRequirement: 10,
    path: 'ability_defend.webp',
    spellIds: ['12945'],
    levels: [[1]],
    requires: 'shield_specialization',
  },
  improved_revenge: {
    max: 3,
    totalRequirement: 10,
    path: 'ability_warrior_revenge.webp',
    spellIds: ['12797', '12799', '12800'],
    levels: [[15, 30, 45]],
  },
  defiance: {
    max: 3,
    totalRequirement: 10,
    path: 'ability_warrior_innerrage.webp',
    spellIds: ['12303', '12788', '12789'],
    levels: [
      [5, 10, 15],
      [0.5, 1, 1.5],
    ],
  },

  improved_sunder_armor: {
    max: 3,
    totalRequirement: 15,
    path: 'ability_warrior_sunder.webp',
    spellIds: ['12308', '12810', '12811'],
    levels: [[1, 2, 3]],
  },
  improved_disarm: {
    max: 3,
    totalRequirement: 15,
    path: 'ability_warrior_disarm.webp',
    spellIds: ['12313', '12804', '12807'],
    levels: [[1, 2, 3]],
  },
  improved_taunt: {
    max: 2,
    totalRequirement: 15,
    path: 'spell_nature_reincarnation.webp',
    spellIds: ['12302', '12765'],
    levels: [
      [1, 2],
      [7, 15],
    ],
  },

  improved_shieldwall: {
    max: 2,
    totalRequirement: 20,
    path: 'ability_warrior_shieldwall.webp',
    spellIds: ['12312', '12803'],
    levels: [[3, 5]],
  },
  concussion_blow: {
    max: 1,
    totalRequirement: 20,
    path: 'ability_thunderbolt.webp',
    spellIds: ['12809'],
    levels: [[5]],
    ability: {
      castTime: 'Instant',
      cooldown: '45 sec',
      cost: '15 Rage',
      range: 'Melee Range',
      items: 'Requires Melee Weapon',
    },
  },
  improved_shield_bash: {
    max: 2,
    totalRequirement: 20,
    path: 'ability_warrior_shieldbash.webp',
    spellIds: ['12311', '12958'],
    levels: [[50, 100]],
  },

  shield_mastery: {
    max: 3,
    totalRequirement: 25,
    path: 'ability_warrior_shieldmastery.webp',
    spellIds: ['29598', '29599', '29600'],
    levels: [[10, 20, 30]],
  },
  one_handed_weapon_specialization: {
    max: 5,
    totalRequirement: 25,
    path: 'inv_sword_20.webp',
    spellIds: ['16538', '16539', '16540', '16541', '16542'],
    levels: [[2, 4, 6, 8, 10]],
  },

  improved_defensive_stance: {
    max: 3,
    totalRequirement: 30,
    path: 'ability_warrior_defensivestance.webp',
    spellIds: ['29593', '29594', '29595'],
    levels: [[2, 4, 6]],
  },
  shield_slam: {
    max: 1,
    totalRequirement: 30,
    path: 'inv_shield_05.webp',
    spellIds: ['23922'],
    levels: [[1]],
    ability: {
      castTime: 'Instant',
      cooldown: '6 sec',
      cost: '20 Rage',
      range: 'Melee Range',
      items: 'Requires Shield',
    },
    requires: 'concussion_blow',
  },
  focused_rage: {
    max: 3,
    totalRequirement: 30,
    path: 'ability_warrior_focusedrage.webp',
    spellIds: ['29787', '29790', '29792'],
    levels: [[1, 2, 3]],
  },

  vitality: {
    max: 5,
    totalRequirement: 35,
    path: 'inv_helmet_21.webp',
    spellIds: ['29140', '29143', '29144', '29145', '29146'],
    levels: [
      [1, 2, 3, 4, 5],
      [2, 4, 6, 8, 10],
    ],
  },

  devestate: {
    max: 1,
    totalRequirement: 40,
    path: 'inv_sword_11.webp',
    spellIds: ['20243'],
    levels: [[1]],
    ability: {
      castTime: 'Instant',
      cost: '15 Rage',
      range: 'Melee Range',
      items: 'Requires One-Handed Melee Weapon',
    },
  },
}
