<script>
import ClassView from '@base/ClassView.vue'
import BaseTree from '@base/BaseTree.vue'
import { assassination } from '@classes/rogue/assassination.js'
import { combat } from '@classes/rogue/combat.js'
import { subtlety } from '@classes/rogue/subtlety.js'
import TalentNode from '@base/TalentNode.vue'
import Arrow from '@base/Arrow.vue'
import RightArrow from '@base/RightArrow.vue'
import { pathPart } from '@src/enviroment.js'

export default {
  name: 'RogueView',
  components: { HorizontalArrow: RightArrow, Arrow, TalentNode, BaseTree, ClassView },
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
          improved_gouge: 0,
          improved_sinister_strike: 0,
          lightning_reflexes: 0,
          improvend_slice_and_dice: 0,
          deflection: 0,
          precision: 0,
          endurance: 0,
          riposte: 0,
          improved_sprint: 0,
          improved_kick: 0,
          dagger_specialization: 0,
          dual_wield_specialization: 0,
          axe_specialization: 0,
          mace_specialization: 0,
          blade_flurry: 0,
          sword_specialization: 0,
          fist_weapon_specialization: 0,
          blade_twisting: 0,
          weapon_expertise: 0,
          aggression: 0,
          vitality: 0,
          adrenaline_rush: 0,
          nerves_of_steel: 0,
          combat_potency: 0,
          surprise_attacks: 0,
        },

        subtlety: {
          master_of_deception: 0,
          opportunity: 0,
          sleight_of_hand: 0,
          dirty_tricks: 0,
          camouflage: 0,
          initiative: 0,
          ghostly_strike: 0,
          improved_ambush: 0,
          setup: 0,
          elusiveness: 0,
          serrated_blades: 0,
          heightened_senses: 0,
          preparation: 0,
          dirty_deeds: 0,
          hemorrhage: 0,
          master_of_subtlety: 0,
          deadliness: 0,
          enveloping_shadows: 0,
          premeditation: 0,
          cheat_death: 0,
          sinister_calling: 0,
          shadowstep: 0,
        },
      },
    }
  },
  mounted() {
    const url = window.location.href.split('/')
    let trees = false
    if (url.length === 6 && url[5] !== '') {
      trees = url[5].split('a')
      Object.keys(this.model.assassination).forEach((item, index) => {
        this.model.assassination[item] = parseInt(trees[0][index])
      })
      Object.keys(this.model.combat).forEach((item, index) => {
        this.model.combat[item] = parseInt(trees[1][index])
      })
      Object.keys(this.model.subtlety).forEach((item, index) => {
        this.model.subtlety[item] = parseInt(trees[2][index])
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
      return window.location.href + str
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
      :image="pathPart() + 'rogue/background-rogue-assassination.avif'"
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
      :image="pathPart() + 'rogue/background-rogue-combat.avif'"
      @reset="resetTree($event)"
    >
      <TalentNode
        v-model="model.combat.improved_gouge"
        v-bind="combat.improved_gouge"
        name="improved_gouge"
        :total="combat_total"
        spec="rogue.combat"
      />
      <TalentNode
        v-model="model.combat.improved_sinister_strike"
        v-bind="combat.improved_sinister_strike"
        name="improved_sinister_strike"
        :total="combat_total"
        spec="rogue.combat"
      />
      <TalentNode
        v-model="model.combat.lightning_reflexes"
        v-bind="combat.lightning_reflexes"
        name="lightning_reflexes"
        :total="combat_total"
        spec="rogue.combat"
      />
      <div></div>

      <TalentNode
        v-model="model.combat.improvend_slice_and_dice"
        v-bind="combat.improvend_slice_and_dice"
        name="improvend_slice_and_dice"
        :total="combat_total"
        spec="rogue.combat"
      />
      <TalentNode
        v-model="model.combat.deflection"
        v-bind="combat.deflection"
        name="deflection"
        :total="combat_total"
        spec="rogue.combat"
      />
      <TalentNode
        v-model="model.combat.precision"
        v-bind="combat.precision"
        name="precision"
        :total="combat_total"
        spec="rogue.combat"
      />
      <Arrow from="precision" to="dual_wield_specialization" tree="tree_combat" />
      <div></div>

      <TalentNode
        v-model="model.combat.endurance"
        v-bind="combat.endurance"
        name="endurance"
        :total="combat_total"
        spec="rogue.combat"
      />
      <TalentNode
        v-model="model.combat.riposte"
        v-bind="combat.riposte"
        name="riposte"
        :total="combat_total"
        spec="rogue.combat"
      />
      <div></div>
      <TalentNode
        v-model="model.combat.improved_sprint"
        v-bind="combat.improved_sprint"
        name="improved_sprint"
        :total="combat_total"
        spec="rogue.combat"
      />

      <TalentNode
        v-model="model.combat.improved_kick"
        v-bind="combat.improved_kick"
        name="improved_kick"
        :total="combat_total"
        spec="rogue.combat"
      />
      <TalentNode
        v-model="model.combat.dagger_specialization"
        v-bind="combat.dagger_specialization"
        name="dagger_specialization"
        :total="combat_total"
        spec="rogue.combat"
      />
      <TalentNode
        v-model="model.combat.dual_wield_specialization"
        v-bind="combat.dual_wield_specialization"
        name="dual_wield_specialization"
        :total="combat_total"
        spec="rogue.combat"
      />
      <TalentNode
        v-model="model.combat.axe_specialization"
        v-bind="combat.axe_specialization"
        name="axe_specialization"
        :total="combat_total"
        spec="rogue.combat"
      />

      <TalentNode
        v-model="model.combat.mace_specialization"
        v-bind="combat.mace_specialization"
        name="mace_specialization"
        :total="combat_total"
        spec="rogue.combat"
      />
      <TalentNode
        v-model="model.combat.blade_flurry"
        v-bind="combat.blade_flurry"
        name="blade_flurry"
        :total="combat_total"
        spec="rogue.combat"
      />
      <TalentNode
        v-model="model.combat.sword_specialization"
        v-bind="combat.sword_specialization"
        name="sword_specialization"
        :total="combat_total"
        spec="rogue.combat"
      />
      <TalentNode
        v-model="model.combat.fist_weapon_specialization"
        v-bind="combat.fist_weapon_specialization"
        name="fist_weapon_specialization"
        :total="combat_total"
        spec="rogue.combat"
      />

      <TalentNode
        v-model="model.combat.blade_twisting"
        v-bind="combat.blade_twisting"
        name="blade_twisting"
        :total="combat_total"
        spec="rogue.combat"
      />
      <TalentNode
        v-model="model.combat.weapon_expertise"
        v-bind="combat.weapon_expertise"
        name="weapon_expertise"
        :total="combat_total"
        spec="rogue.combat"
      />
      <TalentNode
        v-model="model.combat.aggression"
        v-bind="combat.aggression"
        name="aggression"
        :total="combat_total"
        spec="rogue.combat"
      />
      <div></div>

      <TalentNode
        v-model="model.combat.vitality"
        v-bind="combat.vitality"
        name="vitality"
        :total="combat_total"
        spec="rogue.combat"
      />
      <TalentNode
        v-model="model.combat.adrenaline_rush"
        v-bind="combat.adrenaline_rush"
        name="adrenaline_rush"
        :total="combat_total"
        spec="rogue.combat"
      />
      <Arrow from="adrenaline_rush" to="surprise_attacks" tree="tree_combat" />
      <TalentNode
        v-model="model.combat.nerves_of_steel"
        v-bind="combat.nerves_of_steel"
        name="nerves_of_steel"
        :total="combat_total"
        spec="rogue.combat"
      />
      <div></div>

      <div></div>
      <div></div>
      <TalentNode
        v-model="model.combat.combat_potency"
        v-bind="combat.combat_potency"
        name="combat_potency"
        :total="combat_total"
        spec="rogue.combat"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.combat.surprise_attacks"
        v-bind="combat.surprise_attacks"
        name="surprise_attacks"
        :total="combat_total"
        spec="rogue.combat"
      />
      <div></div>
      <div></div>
    </BaseTree>
    <BaseTree
      name="rogue"
      spec="subtlety"
      :total="subtlety_total"
      :image="pathPart() + 'rogue/background-rogue-subtlety.avif'"
      @reset="resetTree($event)"
    >
      <div></div>
      <TalentNode
        v-model="model.subtlety.master_of_deception"
        v-bind="subtlety.master_of_deception"
        name="master_of_deception"
        :total="subtlety_total"
        spec="rogue.subtlety"
      />
      <TalentNode
        v-model="model.subtlety.opportunity"
        v-bind="subtlety.opportunity"
        name="opportunity"
        :total="subtlety_total"
        spec="rogue.subtlety"
      />
      <div></div>

      <TalentNode
        v-model="model.subtlety.sleight_of_hand"
        v-bind="subtlety.sleight_of_hand"
        name="sleight_of_hand"
        :total="subtlety_total"
        spec="rogue.subtlety"
      />
      <TalentNode
        v-model="model.subtlety.dirty_tricks"
        v-bind="subtlety.dirty_tricks"
        name="dirty_tricks"
        :total="subtlety_total"
        spec="rogue.subtlety"
      />
      <TalentNode
        v-model="model.subtlety.camouflage"
        v-bind="subtlety.camouflage"
        name="camouflage"
        :total="subtlety_total"
        spec="rogue.subtlety"
      />
      <div></div>

      <TalentNode
        v-model="model.subtlety.initiative"
        v-bind="subtlety.initiative"
        name="initiative"
        :total="subtlety_total"
        spec="rogue.subtlety"
      />
      <TalentNode
        v-model="model.subtlety.ghostly_strike"
        v-bind="subtlety.ghostly_strike"
        name="ghostly_strike"
        :total="subtlety_total"
        spec="rogue.subtlety"
      />
      <TalentNode
        v-model="model.subtlety.improved_ambush"
        v-bind="subtlety.improved_ambush"
        name="improved_ambush"
        :total="subtlety_total"
        spec="rogue.subtlety"
      />
      <div></div>

      <TalentNode
        v-model="model.subtlety.setup"
        v-bind="subtlety.setup"
        name="setup"
        :total="subtlety_total"
        spec="rogue.subtlety"
      />
      <TalentNode
        v-model="model.subtlety.elusiveness"
        v-bind="subtlety.elusiveness"
        name="elusiveness"
        :total="subtlety_total"
        spec="rogue.subtlety"
      />
      <TalentNode
        v-model="model.subtlety.serrated_blades"
        v-bind="subtlety.serrated_blades"
        name="serrated_blades"
        :total="subtlety_total"
        spec="rogue.subtlety"
      />
      <HorizontalArrow
        from="serrated_blades"
        to="placeholder_rge_sub"
        tree="tree_subtlety"
        headless
      />
      <div id="placeholder_rge_sub"></div>
      <Arrow from="placeholder_rge_sub" to="hemorrhage" tree="tree_subtlety" />

      <TalentNode
        v-model="model.subtlety.heightened_senses"
        v-bind="subtlety.heightened_senses"
        name="heightened_senses"
        :total="subtlety_total"
        spec="rogue.subtlety"
      />
      <TalentNode
        v-model="model.subtlety.preparation"
        v-bind="subtlety.preparation"
        name="preparation"
        :total="subtlety_total"
        spec="rogue.subtlety"
      />
      <Arrow from="preparation" to="premeditation" tree="tree_subtlety" />
      <TalentNode
        v-model="model.subtlety.dirty_deeds"
        v-bind="subtlety.dirty_deeds"
        name="dirty_deeds"
        :total="subtlety_total"
        spec="rogue.subtlety"
      />
      <TalentNode
        v-model="model.subtlety.hemorrhage"
        v-bind="subtlety.hemorrhage"
        name="hemorrhage"
        :total="subtlety_total"
        spec="rogue.subtlety"
      />

      <TalentNode
        v-model="model.subtlety.master_of_subtlety"
        v-bind="subtlety.master_of_subtlety"
        name="master_of_subtlety"
        :total="subtlety_total"
        spec="rogue.subtlety"
      />
      <div></div>
      <TalentNode
        v-model="model.subtlety.deadliness"
        v-bind="subtlety.deadliness"
        name="deadliness"
        :total="subtlety_total"
        spec="rogue.subtlety"
      />
      <div></div>

      <TalentNode
        v-model="model.subtlety.enveloping_shadows"
        v-bind="subtlety.enveloping_shadows"
        name="enveloping_shadows"
        :total="subtlety_total"
        spec="rogue.subtlety"
      />
      <TalentNode
        v-model="model.subtlety.premeditation"
        v-bind="subtlety.premeditation"
        name="premeditation"
        :total="subtlety_total"
        spec="rogue.subtlety"
      />
      <Arrow from="premeditation" to="sinister_calling" tree="tree_subtlety" />
      <TalentNode
        v-model="model.subtlety.cheat_death"
        v-bind="subtlety.cheat_death"
        name="cheat_death"
        :total="subtlety_total"
        spec="rogue.subtlety"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.subtlety.sinister_calling"
        v-bind="subtlety.sinister_calling"
        name="sinister_calling"
        :total="subtlety_total"
        spec="rogue.subtlety"
      />
      <div></div>
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.subtlety.shadowstep"
        v-bind="subtlety.shadowstep"
        name="shadowstep"
        :total="subtlety_total"
        spec="rogue.subtlety"
      />
      <div></div>
      <div></div>
    </BaseTree>
  </ClassView>
</template>
