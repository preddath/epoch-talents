<script>
import BaseTree from '@base/BaseTree.vue'
import ClassView from '@base/ClassView.vue'
import TalentNode from '@base/TalentNode.vue'
import { arms } from './arms.js'
import { fury } from './fury.js'
import { protection } from './protection.js'

export default {
  name: 'WarriorView',
  computed: {
    arms() {
      return arms
    },
    fury() {
      return fury
    },
    protection() {
      return protection
    },
  },
  components: {
    BaseTree,
    ClassView,
    TalentNode,
  },
  data() {
    return {
      total: 0,
      model: {
        improved_heroic_strike: 0,
        deflection: 0,
        improved_rend: 0,
        improved_charge: 0,
        iron_will: 0,
        improved_thunder_clap: 0,
        improved_overpower: 0,
        anger_management: 0,
        deep_wounds: 0,
        two_handed_weapon_specialization: 0,
        impale: 0,
        improved_slam: 0,
        poleaxe_specialization: 0,
        sweeping_strikes: 0,
        mace_specialization: 0,
        sword_specialization: 0,
        improved_intercept: 0,
        improved_hamstring: 0,
        improved_disciplines: 0,
        blood_frenzy: 0,
        mortal_strike: 0,
        second_wind: 0,
        endless_rage: 0,
        empowered_rend: 0,
        bladestorm: 0,

        cruelty: 0,
        booming_voice: 0,
        improved_demoralizing_shout: 0,
        unbridled_wrath: 0,
        improved_cleave: 0,
        piercing_howl: 0,
        blood_craze: 0,
        commanding_presence: 0,
        dual_wield_specialization: 0,
        enrage: 0,
        improved_execute: 0,
        death_wish: 0,
        weapon_mastery: 0,
        improved_berserker_rage: 0,
        flurry: 0,
        precision: 0,
        bloodlust: 0,
        improved_whirlwind: 0,
        improved_berserker_stance: 0,
        single_minded_fury: 0,

        improved_bloodrage: 0,
        tactical_mastery: 0,
        anticipation: 0,
        shield_specialization: 0,
        toughness: 0,
        last_stand: 0,
        improved_shield_block: 0,
        improved_revenge: 0,
        defiance: 0,
        improved_sunder_armor: 0,
        improved_disarm: 0,
        improved_taunt: 0,
        improved_shieldwall: 0,
        concussion_blow: 0,
        improved_shield_bash: 0,
        shield_mastery: 0,
        one_handed_weapon_specialization: 0,
        improved_defensive_stance: 0,
        shield_slam: 0,
        focused_rage: 0,
        vitality: 0,
        devestate: 0,
      },
    }
  },
  watch: {
    model: {
      handler(n) {
        let temp = 0
        temp = Object.values(n).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)
        this.total = temp
      },
      deep: true,
    },
  },
}
</script>

<template>
  <ClassView>
    <BaseTree name="Arms" image="/warrior/background-warrior-arms.avif">
      <TalentNode
        name="improved_heroic_strike"
        v-bind="arms.improved_heroic_strike"
        :total="total"
        v-model="model.improved_heroic_strike"
        spec="warrior.arms"
      />
      <TalentNode
        name="deflection"
        v-bind="arms.deflection"
        :total="total"
        v-model="model.deflection"
        spec="warrior.arms"
      />
      <TalentNode
        name="improved_rend"
        v-bind="arms.improved_rend"
        :total="total"
        v-model="model.improved_rend"
        spec="warrior.arms"
      />
      <div></div>

      <TalentNode
        name="improved_charge"
        v-bind="arms.improved_charge"
        :total="total"
        v-model="model.improved_charge"
        spec="warrior.arms"
      />
      <TalentNode
        name="iron_will"
        v-bind="arms.iron_will"
        :total="total"
        v-model="model.iron_will"
        spec="warrior.arms"
      />
      <TalentNode
        name="improved_thunder_clap"
        v-bind="arms.improved_thunder_clap"
        :total="total"
        v-model="model.improved_thunder_clap"
        spec="warrior.arms"
      />
      <div></div>

      <TalentNode
        name="improved_overpower"
        v-bind="arms.improved_overpower"
        :total="total"
        v-model="model.improved_overpower"
        spec="warrior.arms"
      />
      <TalentNode
        name="anger_management"
        v-bind="arms.anger_management"
        :total="total"
        v-model="model.anger_management"
        spec="warrior.arms"
      />
      <TalentNode
        name="deep_wounds"
        v-bind="arms.deep_wounds"
        :total="total"
        v-model="model.deep_wounds"
        spec="warrior.arms"
      />
      <div></div>

      <div></div>
      <TalentNode
        name="two_handed_weapon_specialization"
        v-bind="arms.two_handed_weapon_specialization"
        :total="total"
        v-model="model.two_handed_weapon_specialization"
        spec="warrior.arms"
      />
      <TalentNode
        name="impale"
        v-bind="arms.impale"
        :total="total"
        v-model="model.impale"
        spec="warrior.arms"
      />
      <TalentNode
        name="improved_slam"
        v-bind="arms.improved_slam"
        :total="total"
        v-model="model.improved_slam"
        spec="warrior.arms"
      />

      <TalentNode
        name="poleaxe_specialization"
        v-bind="arms.poleaxe_specialization"
        :total="total"
        v-model="model.poleaxe_specialization"
        spec="warrior.arms"
      />
      <TalentNode
        name="sweeping_strikes"
        v-bind="arms.sweeping_strikes"
        :total="total"
        v-model="model.sweeping_strikes"
        spec="warrior.arms"
        ability
      />
      <TalentNode
        name="mace_specialization"
        v-bind="arms.mace_specialization"
        :total="total"
        v-model="model.mace_specialization"
        spec="warrior.arms"
      />
      <TalentNode
        name="sword_specialization"
        v-bind="arms.sword_specialization"
        :total="total"
        v-model="model.sword_specialization"
        spec="warrior.arms"
      />

      <TalentNode
        name="improved_intercept"
        v-bind="arms.improved_intercept"
        :total="total"
        v-model="model.improved_intercept"
        spec="warrior.arms"
      />
      <div></div>
      <TalentNode
        name="improved_hamstring"
        v-bind="arms.improved_hamstring"
        :total="total"
        v-model="model.improved_hamstring"
        spec="warrior.arms"
      />
      <TalentNode
        name="improved_disciplines"
        v-bind="arms.improved_disciplines"
        :total="total"
        v-model="model.improved_disciplines"
        spec="warrior.arms"
      />

      <TalentNode
        name="blood_frenzy"
        v-bind="arms.blood_frenzy"
        :total="total"
        v-model="model.blood_frenzy"
        spec="warrior.arms"
      />
      <TalentNode
        name="mortal_strike"
        v-bind="arms.mortal_strike"
        :total="total"
        v-model="model.mortal_strike"
        spec="warrior.arms"
        ability
      />
      <TalentNode
        name="second_wind"
        v-bind="arms.second_wind"
        :total="total"
        v-model="model.second_wind"
        spec="warrior.arms"
      />
      <div></div>

      <div></div>
      <TalentNode
        name="endless_rage"
        v-bind="arms.endless_rage"
        :total="total"
        v-model="model.endless_rage"
        spec="warrior.arms"
      />
      <TalentNode
        name="empowered_rend"
        v-bind="arms.empowered_rend"
        :total="total"
        v-model="model.empowered_rend"
        spec="warrior.arms"
      />
      <div></div>

      <div></div>
      <TalentNode
        name="bladestorm"
        v-bind="arms.bladestorm"
        :total="total"
        v-model="model.bladestorm"
        spec="warrior.arms"
      />
      <div></div>
      <div></div>
    </BaseTree>
    <BaseTree name="Fury" image="/warrior/background-warrior-fury.avif">
      <div></div>
      <TalentNode
        name="cruelty"
        v-bind="fury.cruelty"
        :total="total"
        v-model="model.cruelty"
        spec="warrior.fury"
      />
      <TalentNode
        name="booming_voice"
        v-bind="fury.booming_voice"
        :total="total"
        v-model="model.booming_voice"
        spec="warrior.fury"
      />
      <div></div>

      <div></div>
      <TalentNode
        name="improved_demoralizing_shout"
        v-bind="fury.improved_demoralizing_shout"
        :total="total"
        v-model="model.improved_demoralizing_shout"
        spec="warrior.fury"
      />
      <TalentNode
        name="unbridled_wrath"
        v-bind="fury.unbridled_wrath"
        :total="total"
        v-model="model.unbridled_wrath"
        spec="warrior.fury"
      />
      <div></div>

      <TalentNode
        name="improved_cleave"
        v-bind="fury.improved_cleave"
        :total="total"
        v-model="model.improved_cleave"
        spec="warrior.fury"
      />
      <TalentNode
        name="piercing_howl"
        v-bind="fury.piercing_howl"
        :total="total"
        v-model="model.piercing_howl"
        spec="warrior.fury"
      />
      <TalentNode
        name="blood_craze"
        v-bind="fury.blood_craze"
        :total="total"
        v-model="model.blood_craze"
        spec="warrior.fury"
      />
      <TalentNode
        name="commanding_presence"
        v-bind="fury.commanding_presence"
        :total="total"
        v-model="model.commanding_presence"
        spec="warrior.fury"
      />

      <div></div>
      <TalentNode
        name="dual_wield_specialization"
        v-bind="fury.dual_wield_specialization"
        :total="total"
        v-model="model.dual_wield_specialization"
        spec="warrior.fury"
      />
      <TalentNode
        name="enrage"
        v-bind="fury.enrage"
        :total="total"
        v-model="model.enrage"
        spec="warrior.fury"
      />
      <div></div>

      <TalentNode
        name="improved_execute"
        v-bind="fury.improved_execute"
        :total="total"
        v-model="model.improved_execute"
        spec="warrior.fury"
      />
      <TalentNode
        name="death_wish"
        v-bind="fury.death_wish"
        :total="total"
        v-model="model.death_wish"
        spec="warrior.fury"
      />
      <div></div>
      <TalentNode
        name="weapon_mastery"
        v-bind="fury.weapon_mastery"
        :total="total"
        v-model="model.weapon_mastery"
        spec="warrior.fury"
      />

      <TalentNode
        name="improved_berserker_rage"
        v-bind="fury.improved_berserker_rage"
        :total="total"
        v-model="model.improved_berserker_rage"
        spec="warrior.fury"
      />
      <div></div>
      <TalentNode
        name="flurry"
        v-bind="fury.flurry"
        :total="total"
        v-model="model.flurry"
        spec="warrior.fury"
      />
      <div></div>

      <TalentNode
        name="precision"
        v-bind="fury.precision"
        :total="total"
        v-model="model.precision"
        spec="warrior.fury"
      />
      <TalentNode
        name="bloodlust"
        v-bind="fury.bloodlust"
        :total="total"
        v-model="model.bloodlust"
        spec="warrior.fury"
      />
      <TalentNode
        name="improved_whirlwind"
        v-bind="fury.improved_whirlwind"
        :total="total"
        v-model="model.improved_whirlwind"
        spec="warrior.fury"
      />
      <div></div>

      <div></div>
      <div></div>
      <TalentNode
        name="improved_berserker_stance"
        v-bind="fury.improved_berserker_stance"
        :total="total"
        v-model="model.improved_berserker_stance"
        spec="warrior.fury"
      />
      <div></div>

      <div></div>
      <TalentNode
        name="single_minded_fury"
        v-bind="fury.single_minded_fury"
        :total="total"
        v-model="model.single_minded_fury"
        spec="warrior.fury"
      />
      <div></div>
      <div></div>
    </BaseTree>
    <BaseTree name="Protection" image="/warrior/background-warrior-protection.avif">
      <TalentNode
        name="improved_bloodrage"
        v-bind="protection.improved_bloodrage"
        :total="total"
        v-model="model.improved_bloodrage"
        spec="warrior.protection"
      />
      <TalentNode
        name="tactical_mastery"
        v-bind="protection.tactical_mastery"
        :total="total"
        v-model="model.tactical_mastery"
        spec="warrior.protection"
      />
      <TalentNode
        name="anticipation"
        v-bind="protection.anticipation"
        :total="total"
        v-model="model.anticipation"
        spec="warrior.protection"
      />
      <div></div>

      <div></div>
      <TalentNode
        name="shield_specialization"
        v-bind="protection.shield_specialization"
        :total="total"
        v-model="model.shield_specialization"
        spec="warrior.protection"
      />
      <TalentNode
        name="toughness"
        v-bind="protection.toughness"
        :total="total"
        v-model="model.toughness"
        spec="warrior.protection"
      />
      <div></div>

      <TalentNode
        name="last_stand"
        v-bind="protection.last_stand"
        :total="total"
        v-model="model.last_stand"
        spec="warrior.protection"
        ability
      />
      <TalentNode
        name="improved_shield_block"
        v-bind="protection.improved_shield_block"
        :total="total"
        v-model="model.improved_shield_block"
        spec="warrior.protection"
      />
      <TalentNode
        name="improved_revenge"
        v-bind="protection.improved_revenge"
        :total="total"
        v-model="model.improved_revenge"
        spec="warrior.protection"
      />
      <TalentNode
        name="defiance"
        v-bind="protection.defiance"
        :total="total"
        v-model="model.defiance"
        spec="warrior.protection"
      />

      <TalentNode
        name="improved_sunder_armor"
        v-bind="protection.improved_sunder_armor"
        :total="total"
        v-model="model.improved_sunder_armor"
        spec="warrior.protection"
      />
      <TalentNode
        name="improved_disarm"
        v-bind="protection.improved_disarm"
        :total="total"
        v-model="model.improved_disarm"
        spec="warrior.protection"
      />
      <TalentNode
        name="improved_taunt"
        v-bind="protection.improved_taunt"
        :total="total"
        v-model="model.improved_taunt"
        spec="warrior.protection"
      />
      <div></div>

      <TalentNode
        name="improved_shieldwall"
        v-bind="protection.improved_shieldwall"
        :total="total"
        v-model="model.improved_shieldwall"
        spec="warrior.protection"
      />
      <TalentNode
        name="concussion_blow"
        v-bind="protection.concussion_blow"
        :total="total"
        v-model="model.concussion_blow"
        spec="warrior.protection"
      />
      <TalentNode
        name="improved_shield_bash"
        v-bind="protection.improved_shield_bash"
        :total="total"
        v-model="model.improved_shield_bash"
        spec="warrior.protection"
      />
      <div></div>

      <TalentNode
        name="shield_mastery"
        v-bind="protection.shield_mastery"
        :total="total"
        v-model="model.shield_mastery"
        spec="warrior.protection"
      />
      <div></div>
      <TalentNode
        name="one_handed_weapon_specialization"
        v-bind="protection.one_handed_weapon_specialization"
        :total="total"
        v-model="model.one_handed_weapon_specialization"
        spec="warrior.protection"
      />
      <div></div>

      <TalentNode
        name="improved_defensive_stance"
        v-bind="protection.improved_defensive_stance"
        :total="total"
        v-model="model.improved_defensive_stance"
        spec="warrior.protection"
      />
      <TalentNode
        name="shield_slam"
        v-bind="protection.shield_slam"
        :total="total"
        v-model="model.shield_slam"
        spec="warrior.protection"
        ability
      />
      <TalentNode
        name="focused_rage"
        v-bind="protection.focused_rage"
        :total="total"
        v-model="model.focused_rage"
        spec="warrior.protection"
      />
      <div></div>

      <div></div>
      <TalentNode
        name="vitality"
        v-bind="protection.vitality"
        :total="total"
        v-model="model.vitality"
        spec="warrior.protection"
      />
      <div></div>
      <div></div>

      <div></div>
      <TalentNode
        name="devestate"
        v-bind="protection.devestate"
        :total="total"
        v-model="model.devestate"
        spec="warrior.protection"
        ability
      />
      <div></div>
      <div></div>
    </BaseTree>
  </ClassView>
</template>
