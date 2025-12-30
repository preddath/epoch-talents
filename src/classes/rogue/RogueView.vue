<script>
import ClassView from '@base/ClassView.vue'
import BaseTree from '@base/BaseTree.vue'
import { assassination } from '@classes/rogue/assassination.js'
import { combat } from '@classes/rogue/combat.js'
import { subtlety } from '@classes/rogue/subtlety.js'
import TalentNode from '@base/TalentNode.vue'
import Arrow from '@base/Arrow.vue'

export default {
  name: 'RogueView',
  components: { Arrow, TalentNode, BaseTree, ClassView },
  data() {
    return {
      total: 0,
      assassination_total: 0,
      combat_total: 0,
      subtlety_total: 0,
      model: {
        assassination: {
          improved_eviscerate: 0,
          remorseless_attacks: 0,
          malice: 0,
          ruthlessness: 0,
          murder: 0,
          puncturing_wounds: 0,
          relentless_strikes: 0,
          improved_expose_armor: 0,
          lethality: 0,
          vile_poisons: 0,
          improved_poisons: 0,
          fleet_footed: 0,
          cold_blooded: 0,
          improved_kidney_shot: 0,
          quick_recovery: 0,
          poisoned_knife: 0,
          seal_fate: 0,
          master_poisoner: 0,
          vigor: 0,
          deadened_nerves: 0,
          find_weakness: 0,
          mutilate: 0,
        },

        combat: {
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
          single_minded_combat: 0,
        },

        subtlety: {
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
    if (url.length === 5) {
      let trees = url[4].split('a')
      Object.keys(this.model.assassination).forEach((item, index) => {
        this.model.assassination[item] = parseInt(trees[0][index])
      })
      Object.keys(this.model.combat).forEach((item, index) => {
        this.model.combat[item] = parseInt(trees[0][index])
      })
      Object.keys(this.model.subtlety).forEach((item, index) => {
        this.model.subtlety[item] = parseInt(trees[0][index])
      })
    }
  },
  computed: {
    assassination() {
      return assassination
    },
    combat() {
      return combat
    },
    subtlety() {
      return subtlety
    },
    shareLink() {
      let str =
        Object.values(this.model.assassination).join('') +
        'a' +
        Object.values(this.model.combat).join('') +
        'a' +
        Object.values(this.model.subtlety).join('')
      return window.location.href + '/' + str
    },
  },
  methods: {
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
        let assassination = Object.values(n.assassination).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)
        let combat = Object.values(n.combat).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)
        let subtlety = Object.values(n.subtlety).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)

        this.assassination_total = assassination
        this.combat_total = combat
        this.subtlety_total = subtlety
        this.total = assassination + combat + subtlety
      },
      deep: true,
    },
  },
}
</script>

<template>
  <ClassView @share="share()">
    <BaseTree
      name="rogue"
      spec="assassination"
      :total="assassination_total"
      image="/rogue/background-rogue-assassination.avif"
      @reset="resetTree($event)"
    >
      <TalentNode
        v-model="model.assassination.improved_eviscerate"
        v-bind="assassination.improved_eviscerate"
        name="improved_eviscerate"
        :total="assassination_total"
        spec="rogue.assassination"
      />
      <TalentNode
        v-model="model.assassination.remorseless_attacks"
        v-bind="assassination.remorseless_attacks"
        name="remorseless_attacks"
        :total="assassination_total"
        spec="rogue.assassination"
      />
      <TalentNode
        v-model="model.assassination.malice"
        v-bind="assassination.malice"
        name="malice"
        :total="assassination_total"
        spec="rogue.assassination"
      />
      <Arrow from="malice" to="lethality" tree="tree_assassination" />
      <div></div>

      <TalentNode
        v-model="model.assassination.ruthlessness"
        v-bind="assassination.ruthlessness"
        name="ruthlessness"
        :total="assassination_total"
        spec="rogue.assassination"
      />
      <TalentNode
        v-model="model.assassination.murder"
        v-bind="assassination.murder"
        name="murder"
        :total="assassination_total"
        spec="rogue.assassination"
      />
      <div></div>
      <TalentNode
        v-model="model.assassination.puncturing_wounds"
        v-bind="assassination.puncturing_wounds"
        name="puncturing_wounds"
        :total="assassination_total"
        spec="rogue.assassination"
      />

      <TalentNode
        v-model="model.assassination.relentless_strikes"
        v-bind="assassination.relentless_strikes"
        name="relentless_strikes"
        :total="assassination_total"
        spec="rogue.assassination"
      />
      <TalentNode
        v-model="model.assassination.improved_expose_armor"
        v-bind="assassination.improved_expose_armor"
        name="improved_expose_armor"
        :total="assassination_total"
        spec="rogue.assassination"
      />
      <TalentNode
        v-model="model.assassination.lethality"
        v-bind="assassination.lethality"
        name="lethality"
        :total="assassination_total"
        spec="rogue.assassination"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.assassination.vile_poisons"
        v-bind="assassination.vile_poisons"
        name="vile_poisons"
        :total="assassination_total"
        spec="rogue.assassination"
      />
      <TalentNode
        v-model="model.assassination.improved_poisons"
        v-bind="assassination.improved_poisons"
        name="improved_poisons"
        :total="assassination_total"
        spec="rogue.assassination"
      />
      <div></div>

      <TalentNode
        v-model="model.assassination.fleet_footed"
        v-bind="assassination.fleet_footed"
        name="fleet_footed"
        :total="assassination_total"
        spec="rogue.assassination"
      />
      <TalentNode
        v-model="model.assassination.cold_blooded"
        v-bind="assassination.cold_blooded"
        name="cold_blooded"
        :total="assassination_total"
        spec="rogue.assassination"
        ability
      />
      <TalentNode
        v-model="model.assassination.improved_kidney_shot"
        v-bind="assassination.improved_kidney_shot"
        name="improved_kidney_shot"
        :total="assassination_total"
        spec="rogue.assassination"
      />
      <TalentNode
        v-model="model.assassination.quick_recovery"
        v-bind="assassination.quick_recovery"
        name="quick_recovery"
        :total="assassination_total"
        spec="rogue.assassination"
      />

      <TalentNode
        v-model="model.assassination.poisoned_knife"
        v-bind="assassination.poisoned_knife"
        name="poisoned_knife"
        :total="assassination_total"
        spec="rogue.assassination"
      />
      <TalentNode
        v-model="model.assassination.seal_fate"
        v-bind="assassination.seal_fate"
        name="seal_fate"
        :total="assassination_total"
        spec="rogue.assassination"
      />
      <TalentNode
        v-model="model.assassination.master_poisoner"
        v-bind="assassination.master_poisoner"
        name="master_poisoner"
        :total="assassination_total"
        spec="rogue.assassination"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.assassination.vigor"
        v-bind="assassination.vigor"
        name="vigor"
        :total="assassination_total"
        spec="rogue.assassination"
      />
      <Arrow from="vigor" to="mutilate" tree="tree_assassination" />
      <TalentNode
        v-model="model.assassination.deadened_nerves"
        v-bind="assassination.deadened_nerves"
        name="deadened_nerves"
        :total="assassination_total"
        spec="rogue.assassination"
        ability
      />
      <div></div>

      <div></div>
      <div></div>
      <TalentNode
        v-model="model.assassination.find_weakness"
        v-bind="assassination.find_weakness"
        name="find_weakness"
        :total="assassination_total"
        spec="rogue.assassination"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.assassination.mutilate"
        v-bind="assassination.mutilate"
        name="mutilate"
        :total="assassination_total"
        spec="rogue.assassination"
      />
      <div></div>
      <div></div>
    </BaseTree>

    <BaseTree
      name="rogue"
      spec="combat"
      :total="combat_total"
      image="/rogue/background-rogue-combat.avif"
      @reset="resetTree($event)"
    >
    </BaseTree>
    <BaseTree
      name="rogue"
      spec="subtlety"
      :total="subtlety_total"
      image="/rogue/background-rogue-subtlety.avif"
      @reset="resetTree($event)"
    >
    </BaseTree>
  </ClassView>
</template>
