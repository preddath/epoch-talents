<script>
import BaseTree from '@base/BaseTree.vue'
import ClassView from '@base/ClassView.vue'
import TalentNode from '@base/TalentNode.vue'
import Arrow from '@base/Arrow.vue'
import { arms } from './arms.js'
import { fury } from './fury.js'
import { protection } from './protection.js'
import { pathPart } from '@src/enviroment.js'

export default {
  name: 'WarriorView',
  components: {
    Arrow,
    BaseTree,
    ClassView,
    TalentNode,
  },
  data() {
    return {
      total: 0,
      arms_total: 0,
      fury_total: 0,
      protection_total: 0,
      model: {
        arms: {
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
        },

        fury: {
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
          bloodthirst: 0,
          improved_whirlwind: 0,
          improved_berserker_stance: 0,
          single_minded_fury: 0,
        },

        protection: {
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
      },
    }
  },
  mounted() {
    const url = window.location.href.split('/')
    if (url.length === 6 && url[5] !== '') {
      let trees = url[5].split('a')
      Object.keys(this.model.arms).forEach((item, index) => {
        this.model.arms[item] = parseInt(trees[0][index])
      })
      Object.keys(this.model.fury).forEach((item, index) => {
        this.model.fury[item] = parseInt(trees[0][index])
      })
      Object.keys(this.model.protection).forEach((item, index) => {
        this.model.protection[item] = parseInt(trees[0][index])
      })
    }
  },
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
    shareLink() {
      let str =
        Object.values(this.model.arms).join('') +
        'a' +
        Object.values(this.model.fury).join('') +
        'a' +
        Object.values(this.model.protection).join('')
      return window.location.href + '/' + str
    },
  },
  methods: {
    pathPart,
    resetTree(tree) {
      Object.keys(this.model[tree]).forEach((item) => {
        this.model[tree][item] = 0
      })
    },
    share() {
      navigator.clipboard.writeText(this.shareLink)
    },
  },
  watch: {
    model: {
      handler(n) {
        let arms = Object.values(n.arms).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)
        let fury = Object.values(n.fury).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)
        let protection = Object.values(n.protection).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)

        this.arms_total = arms
        this.fury_total = fury
        this.protection_total = protection
        this.total = arms + fury + protection
      },
      deep: true,
    },
  },
}
</script>

<template>
  <ClassView @share="share()">
    <BaseTree
      name="warrior"
      spec="arms"
      :total="arms_total"
      :image="pathPart() + 'warrior/background-warrior-arms.avif'"
      @reset="resetTree($event)"
    >
      <TalentNode
        name="improved_heroic_strike"
        v-bind="arms.improved_heroic_strike"
        :total="arms_total"
        v-model="model.arms.improved_heroic_strike"
        spec="warrior.arms"
      />
      <TalentNode
        name="deflection"
        v-bind="arms.deflection"
        :total="arms_total"
        v-model="model.arms.deflection"
        spec="warrior.arms"
      />
      <TalentNode
        name="improved_rend"
        v-bind="arms.improved_rend"
        :total="arms_total"
        v-model="model.arms.improved_rend"
        spec="warrior.arms"
      />
      <div></div>

      <TalentNode
        name="improved_charge"
        v-bind="arms.improved_charge"
        :total="arms_total"
        v-model="model.arms.improved_charge"
        spec="warrior.arms"
      />
      <TalentNode
        name="iron_will"
        v-bind="arms.iron_will"
        :total="arms_total"
        v-model="model.arms.iron_will"
        spec="warrior.arms"
      />
      <TalentNode
        name="improved_thunder_clap"
        v-bind="arms.improved_thunder_clap"
        :total="arms_total"
        v-model="model.arms.improved_thunder_clap"
        spec="warrior.arms"
      />
      <div></div>

      <TalentNode
        name="improved_overpower"
        v-bind="arms.improved_overpower"
        :total="arms_total"
        v-model="model.arms.improved_overpower"
        spec="warrior.arms"
      />
      <TalentNode
        name="anger_management"
        v-bind="arms.anger_management"
        :total="arms_total"
        v-model="model.arms.anger_management"
        spec="warrior.arms"
      />
      <TalentNode
        name="deep_wounds"
        v-bind="arms.deep_wounds"
        :total="arms_total"
        v-model="model.arms.deep_wounds"
        spec="warrior.arms"
      />
      <Arrow to="impale" from="deep_wounds" tree="tree_arms" />
      <div></div>

      <div></div>
      <TalentNode
        name="two_handed_weapon_specialization"
        v-bind="arms.two_handed_weapon_specialization"
        :total="arms_total"
        v-model="model.arms.two_handed_weapon_specialization"
        spec="warrior.arms"
      />
      <TalentNode
        name="impale"
        v-bind="arms.impale"
        :total="arms_total"
        v-model="model.arms.impale"
        spec="warrior.arms"
      />
      <TalentNode
        name="improved_slam"
        v-bind="arms.improved_slam"
        :total="arms_total"
        v-model="model.arms.improved_slam"
        spec="warrior.arms"
      />

      <TalentNode
        name="poleaxe_specialization"
        v-bind="arms.poleaxe_specialization"
        :total="arms_total"
        v-model="model.arms.poleaxe_specialization"
        spec="warrior.arms"
      />
      <TalentNode
        name="sweeping_strikes"
        v-bind="arms.sweeping_strikes"
        :total="arms_total"
        v-model="model.arms.sweeping_strikes"
        spec="warrior.arms"
        ability
      />
      <Arrow to="mortal_strike" from="sweeping_strikes" tree="tree_arms" />
      <TalentNode
        name="mace_specialization"
        v-bind="arms.mace_specialization"
        :total="arms_total"
        v-model="model.arms.mace_specialization"
        spec="warrior.arms"
      />
      <TalentNode
        name="sword_specialization"
        v-bind="arms.sword_specialization"
        :total="arms_total"
        v-model="model.arms.sword_specialization"
        spec="warrior.arms"
      />

      <TalentNode
        name="improved_intercept"
        v-bind="arms.improved_intercept"
        :total="arms_total"
        v-model="model.arms.improved_intercept"
        spec="warrior.arms"
      />
      <div></div>
      <TalentNode
        name="improved_hamstring"
        v-bind="arms.improved_hamstring"
        :total="arms_total"
        v-model="model.arms.improved_hamstring"
        spec="warrior.arms"
      />
      <TalentNode
        name="improved_disciplines"
        v-bind="arms.improved_disciplines"
        :total="arms_total"
        v-model="model.arms.improved_disciplines"
        spec="warrior.arms"
      />

      <TalentNode
        name="blood_frenzy"
        v-bind="arms.blood_frenzy"
        :total="arms_total"
        v-model="model.arms.blood_frenzy"
        spec="warrior.arms"
      />
      <TalentNode
        name="mortal_strike"
        v-bind="arms.mortal_strike"
        :total="arms_total"
        v-model="model.arms.mortal_strike"
        spec="warrior.arms"
        ability
      />
      <TalentNode
        name="second_wind"
        v-bind="arms.second_wind"
        :total="arms_total"
        v-model="model.arms.second_wind"
        spec="warrior.arms"
      />
      <div></div>

      <div></div>
      <TalentNode
        name="endless_rage"
        v-bind="arms.endless_rage"
        :total="arms_total"
        v-model="model.arms.endless_rage"
        spec="warrior.arms"
      />
      <TalentNode
        name="empowered_rend"
        v-bind="arms.empowered_rend"
        :total="arms_total"
        v-model="model.arms.empowered_rend"
        spec="warrior.arms"
      />
      <div></div>

      <div></div>
      <TalentNode
        name="bladestorm"
        v-bind="arms.bladestorm"
        :total="arms_total"
        v-model="model.arms.bladestorm"
        spec="warrior.arms"
      />
      <div></div>
      <div></div>
    </BaseTree>
    <BaseTree
      name="warrior"
      spec="fury"
      :total="fury_total"
      :image="pathPart() + 'warrior/background-warrior-fury.avif'"
      @reset="resetTree($event)"
    >
      <div></div>
      <TalentNode
        name="cruelty"
        v-bind="fury.cruelty"
        :total="fury_total"
        v-model="model.fury.cruelty"
        spec="warrior.fury"
      />
      <TalentNode
        name="booming_voice"
        v-bind="fury.booming_voice"
        :total="fury_total"
        v-model="model.fury.booming_voice"
        spec="warrior.fury"
      />
      <div></div>

      <div></div>
      <TalentNode
        name="improved_demoralizing_shout"
        v-bind="fury.improved_demoralizing_shout"
        :total="fury_total"
        v-model="model.fury.improved_demoralizing_shout"
        spec="warrior.fury"
      />
      <TalentNode
        name="unbridled_wrath"
        v-bind="fury.unbridled_wrath"
        :total="fury_total"
        v-model="model.fury.unbridled_wrath"
        spec="warrior.fury"
      />
      <div></div>

      <TalentNode
        name="improved_cleave"
        v-bind="fury.improved_cleave"
        :total="fury_total"
        v-model="model.fury.improved_cleave"
        spec="warrior.fury"
      />
      <TalentNode
        name="piercing_howl"
        v-bind="fury.piercing_howl"
        :total="fury_total"
        v-model="model.fury.piercing_howl"
        spec="warrior.fury"
      />
      <TalentNode
        name="blood_craze"
        v-bind="fury.blood_craze"
        :total="fury_total"
        v-model="model.fury.blood_craze"
        spec="warrior.fury"
      />
      <TalentNode
        name="commanding_presence"
        v-bind="fury.commanding_presence"
        :total="fury_total"
        v-model="model.fury.commanding_presence"
        spec="warrior.fury"
      />

      <div></div>
      <TalentNode
        name="dual_wield_specialization"
        v-bind="fury.dual_wield_specialization"
        :total="fury_total"
        v-model="model.fury.dual_wield_specialization"
        spec="warrior.fury"
      />
      <TalentNode
        name="enrage"
        v-bind="fury.enrage"
        :total="fury_total"
        v-model="model.fury.enrage"
        spec="warrior.fury"
      />
      <Arrow to="flurry" from="enrage" tree="tree_fury" />
      <div></div>

      <TalentNode
        name="improved_execute"
        v-bind="fury.improved_execute"
        :total="fury_total"
        v-model="model.fury.improved_execute"
        spec="warrior.fury"
      />
      <TalentNode
        name="death_wish"
        v-bind="fury.death_wish"
        :total="fury_total"
        v-model="model.fury.death_wish"
        spec="warrior.fury"
      />
      <Arrow to="bloodthirst" from="death_wish" tree="tree_fury" />
      <div></div>
      <TalentNode
        name="weapon_mastery"
        v-bind="fury.weapon_mastery"
        :total="fury_total"
        v-model="model.fury.weapon_mastery"
        spec="warrior.fury"
      />

      <TalentNode
        name="improved_berserker_rage"
        v-bind="fury.improved_berserker_rage"
        :total="fury_total"
        v-model="model.fury.improved_berserker_rage"
        spec="warrior.fury"
      />
      <div></div>
      <TalentNode
        name="flurry"
        v-bind="fury.flurry"
        :total="fury_total"
        v-model="model.fury.flurry"
        spec="warrior.fury"
      />
      <div></div>

      <TalentNode
        name="precision"
        v-bind="fury.precision"
        :total="fury_total"
        v-model="model.fury.precision"
        spec="warrior.fury"
      />
      <TalentNode
        name="bloodthirst"
        v-bind="fury.bloodthirst"
        :total="fury_total"
        v-model="model.fury.bloodthirst"
        spec="warrior.fury"
      />
      <Arrow to="single_minded_fury" from="bloodthirst" tree="tree_fury" />
      <TalentNode
        name="improved_whirlwind"
        v-bind="fury.improved_whirlwind"
        :total="fury_total"
        v-model="model.fury.improved_whirlwind"
        spec="warrior.fury"
      />
      <div></div>

      <div></div>
      <div></div>
      <TalentNode
        name="improved_berserker_stance"
        v-bind="fury.improved_berserker_stance"
        :total="fury_total"
        v-model="model.fury.improved_berserker_stance"
        spec="warrior.fury"
      />
      <div></div>

      <div></div>
      <TalentNode
        name="single_minded_fury"
        v-bind="fury.single_minded_fury"
        :total="fury_total"
        v-model="model.fury.single_minded_fury"
        spec="warrior.fury"
      />
      <div></div>
      <div></div>
    </BaseTree>
    <BaseTree
      name="warrior"
      spec="protection"
      :total="protection_total"
      :image="pathPart() + 'warrior/background-warrior-protection.avif'"
      @reset="resetTree($event)"
    >
      <TalentNode
        name="improved_bloodrage"
        v-bind="protection.improved_bloodrage"
        :total="protection_total"
        v-model="model.protection.improved_bloodrage"
        spec="warrior.protection"
      />
      <TalentNode
        name="tactical_mastery"
        v-bind="protection.tactical_mastery"
        :total="protection_total"
        v-model="model.protection.tactical_mastery"
        spec="warrior.protection"
      />
      <TalentNode
        name="anticipation"
        v-bind="protection.anticipation"
        :total="protection_total"
        v-model="model.protection.anticipation"
        spec="warrior.protection"
      />
      <div></div>

      <div></div>
      <TalentNode
        name="shield_specialization"
        v-bind="protection.shield_specialization"
        :total="protection_total"
        v-model="model.protection.shield_specialization"
        spec="warrior.protection"
      />
      <Arrow to="improved_shield_block" from="shield_specialization" tree="tree_protection" />
      <TalentNode
        name="toughness"
        v-bind="protection.toughness"
        :total="protection_total"
        v-model="model.protection.toughness"
        spec="warrior.protection"
      />
      <div></div>

      <TalentNode
        name="last_stand"
        v-bind="protection.last_stand"
        :total="protection_total"
        v-model="model.protection.last_stand"
        spec="warrior.protection"
        ability
      />
      <TalentNode
        name="improved_shield_block"
        v-bind="protection.improved_shield_block"
        :total="protection_total"
        v-model="model.protection.improved_shield_block"
        spec="warrior.protection"
      />
      <TalentNode
        name="improved_revenge"
        v-bind="protection.improved_revenge"
        :total="protection_total"
        v-model="model.protection.improved_revenge"
        spec="warrior.protection"
      />
      <TalentNode
        name="defiance"
        v-bind="protection.defiance"
        :total="protection_total"
        v-model="model.protection.defiance"
        spec="warrior.protection"
      />

      <TalentNode
        name="improved_sunder_armor"
        v-bind="protection.improved_sunder_armor"
        :total="protection_total"
        v-model="model.protection.improved_sunder_armor"
        spec="warrior.protection"
      />
      <TalentNode
        name="improved_disarm"
        v-bind="protection.improved_disarm"
        :total="protection_total"
        v-model="model.protection.improved_disarm"
        spec="warrior.protection"
      />
      <TalentNode
        name="improved_taunt"
        v-bind="protection.improved_taunt"
        :total="protection_total"
        v-model="model.protection.improved_taunt"
        spec="warrior.protection"
      />
      <div></div>

      <TalentNode
        name="improved_shieldwall"
        v-bind="protection.improved_shieldwall"
        :total="protection_total"
        v-model="model.protection.improved_shieldwall"
        spec="warrior.protection"
      />
      <TalentNode
        name="concussion_blow"
        v-bind="protection.concussion_blow"
        :total="protection_total"
        v-model="model.protection.concussion_blow"
        spec="warrior.protection"
      />
      <Arrow to="shield_slam" from="concussion_blow" tree="tree_protection" />
      <TalentNode
        name="improved_shield_bash"
        v-bind="protection.improved_shield_bash"
        :total="protection_total"
        v-model="model.protection.improved_shield_bash"
        spec="warrior.protection"
      />
      <div></div>

      <TalentNode
        name="shield_mastery"
        v-bind="protection.shield_mastery"
        :total="protection_total"
        v-model="model.protection.shield_mastery"
        spec="warrior.protection"
      />
      <div></div>
      <TalentNode
        name="one_handed_weapon_specialization"
        v-bind="protection.one_handed_weapon_specialization"
        :total="protection_total"
        v-model="model.protection.one_handed_weapon_specialization"
        spec="warrior.protection"
      />
      <div></div>

      <TalentNode
        name="improved_defensive_stance"
        v-bind="protection.improved_defensive_stance"
        :total="protection_total"
        v-model="model.protection.improved_defensive_stance"
        spec="warrior.protection"
      />
      <TalentNode
        name="shield_slam"
        v-bind="protection.shield_slam"
        :total="protection_total"
        v-model="model.protection.shield_slam"
        spec="warrior.protection"
        ability
      />
      <TalentNode
        name="focused_rage"
        v-bind="protection.focused_rage"
        :total="protection_total"
        v-model="model.protection.focused_rage"
        spec="warrior.protection"
      />
      <div></div>

      <div></div>
      <TalentNode
        name="vitality"
        v-bind="protection.vitality"
        :total="protection_total"
        v-model="model.protection.vitality"
        spec="warrior.protection"
      />
      <div></div>
      <div></div>

      <div></div>
      <TalentNode
        name="devestate"
        v-bind="protection.devestate"
        :total="protection_total"
        v-model="model.protection.devestate"
        spec="warrior.protection"
        ability
      />
      <div></div>
      <div></div>
    </BaseTree>
  </ClassView>
</template>
