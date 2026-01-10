<script>
import ClassView from '@base/ClassView.vue'
import { useCurrentStore } from '@src/stores/current.js'
import { resetTotal, resetTree, share } from '@src/ClassModule.js'
import { pathPart } from '@src/enviroment.js'
import { balance } from '@classes/druid/balance.js'
import { feral } from '@classes/druid/feral.js'
import { restoration } from '@classes/druid/restoration.js'
import BaseTree from '@base/BaseTree.vue'
import TalentNode from '@base/TalentNode.vue'
import Arrow from '@base/Arrow.vue'
import RightArrow from '@base/RightArrow.vue'

export default {
  name: 'DruidView',
  components: { RightArrow, Arrow, TalentNode, BaseTree, ClassView },

  data() {
    return {
      total: 0,
      balance_total: 0,
      feral_total: 0,
      restoration_total: 0,
      model: {
        balance: {
          starlight_wrath: 0,
          natures_grasp: 0,
          improved_natures_grasp: 0,
          control_of_nature: 0,
          focused_starlight: 0,
          improved_moonfire: 0,
          brambles: 0,
          insect_swarm: 0,
          natures_reach: 0,
          vengeance: 0,
          celestial_starlight: 0,
          lunar_guidance: 0,
          natures_grace: 0,
          zenith: 0,
          moonglow: 0,
          moonfury: 0,
          balance_of_power: 0,
          dreamstate: 0,
          moonkin_form: 0,
          improved_faerie_fire: 0,
          wrath_of_cenarius: 0,
          force_of_nature: 0,
        },
        feral: {
          ferocity: 0,
          feral_aggression: 0,
          feral_instinct: 0,
          brutal_impact: 0,
          thick_hide: 0,
          feral_swiftness: 0,
          feral_charge: 0,
          sharpened_claws: 0,
          shredding_attacks: 0,
          predatory_strikes: 0,
          primal_fury: 0,
          savage_fury: 0,
          faerie_fire_feral: 0,
          nurturing_instinct: 0,
          heart_of_the_wild: 0,
          survival_of_the_fittest: 0,
          primal_tenacity: 0,
          leader_of_the_pack: 0,
          improved_leader_of_the_pack: 0,
          predatory_instincts: 0,
          mangle: 0,
        },
        restoration: {
          improved_mark_of_the_wild: 0,
          furor: 0,
          naturalist: 0,
          natures_focus: 0,
          natural_shapeshifter: 0,
          intensity: 0,
          subtlety: 0,
          omen_of_clarity: 0,
          overgrowth: 0,
          tranquil_spirit: 0,
          improved_rejuvenation: 0,
          natures_swiftness: 0,
          gift_of_nature: 0,
          improved_tranquility: 0,
          empowered_touch: 0,
          improved_regrowth: 0,
          living_spirit: 0,
          swiftmend: 0,
          natural_perfection: 0,
          empowered_rejuvenation: 0,
          tree_of_life: 0,
        },
      },
    }
  },

  mounted() {
    const url = window.location.href.split('/')
    let trees = false
    if (url.length === 6 && url[5] !== '') {
      trees = url[5].split('a')
      Object.keys(this.model.balance).forEach((item, index) => {
        this.model.balance[item] = parseInt(trees[0][index])
      })
      Object.keys(this.model.feral).forEach((item, index) => {
        this.model.feral[item] = parseInt(trees[1][index])
      })
      Object.keys(this.model.restoration).forEach((item, index) => {
        this.model.restoration[item] = parseInt(trees[2][index])
      })
    }
  },
  computed: {
    balance() {
      return balance
    },
    feral() {
      return feral
    },
    restoration() {
      return restoration
    },
    currentStore() {
      return useCurrentStore()
    },
    shareLink() {
      let str =
        Object.values(this.model.balance).join('') +
        'a' +
        Object.values(this.model.feral).join('') +
        'a' +
        Object.values(this.model.restoration).join('')
      return window.location.href + (window.location.href.endsWith('/') ? '' : '/') + str
    },
  },
  methods: {
    resetTree,
    resetTotal,
    share,
    pathPart,
  },

  watch: {
    model: {
      handler(n) {
        let balance = Object.values(n.balance).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)

        let feral = Object.values(n.feral).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)

        let restoration = Object.values(n.restoration).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)

        this.balance_total = balance
        this.feral_total = feral
        this.restoration_total = restoration
        this.total = balance + feral + restoration
        this.currentStore.total = this.total
      },
      deep: true,
    },
  },
}
</script>

<template>
  <ClassView @share="share()" @reset="resetTotal()">
    <BaseTree
      name="druid"
      spec="balance"
      :total="balance_total"
      :image="pathPart() + 'druid/background-druid-balance.avif'"
      :icon="pathPart() + 'spell_nature_starfall.webp'"
      @reset="resetTree($event)"
    >
      <TalentNode
        v-model="model.balance.starlight_wrath"
        v-bind="balance.starlight_wrath"
        name="starlight_wrath"
        spec="druid.balance"
      />
      <TalentNode
        v-model="model.balance.natures_grasp"
        v-bind="balance.natures_grasp"
        name="natures_grasp"
        spec="druid.balance"
      />
      <RightArrow tree="tree_balance" to="improved_natures_grasp" from="natures_grasp" />
      <TalentNode
        v-model="model.balance.improved_natures_grasp"
        v-bind="balance.improved_natures_grasp"
        name="improved_natures_grasp"
        spec="druid.balance"
      />
      <div></div>

      <TalentNode
        v-model="model.balance.control_of_nature"
        v-bind="balance.control_of_nature"
        name="control_of_nature"
        spec="druid.balance"
      />
      <TalentNode
        v-model="model.balance.focused_starlight"
        v-bind="balance.focused_starlight"
        name="focused_starlight"
        spec="druid.balance"
      />
      <Arrow from="focused_starlight" to="vengeance" tree="tree_balance" />
      <TalentNode
        v-model="model.balance.improved_moonfire"
        v-bind="balance.improved_moonfire"
        name="improved_moonfire"
        spec="druid.balance"
      />
      <div></div>

      <TalentNode
        v-model="model.balance.brambles"
        v-bind="balance.brambles"
        name="brambles"
        spec="druid.balance"
      />
      <div></div>
      <TalentNode
        v-model="model.balance.insect_swarm"
        v-bind="balance.insect_swarm"
        name="insect_swarm"
        spec="druid.balance"
      />
      <TalentNode
        v-model="model.balance.natures_reach"
        v-bind="balance.natures_reach"
        name="natures_reach"
        spec="druid.balance"
      />

      <div></div>
      <TalentNode
        v-model="model.balance.vengeance"
        v-bind="balance.vengeance"
        name="vengeance"
        spec="druid.balance"
      />
      <TalentNode
        v-model="model.balance.celestial_starlight"
        v-bind="balance.celestial_starlight"
        name="celestial_starlight"
        spec="druid.balance"
      />
      <div></div>

      <TalentNode
        v-model="model.balance.lunar_guidance"
        v-bind="balance.lunar_guidance"
        name="lunar_guidance"
        spec="druid.balance"
      />
      <TalentNode
        v-model="model.balance.natures_grace"
        v-bind="balance.natures_grace"
        name="natures_grace"
        spec="druid.balance"
      />
      <Arrow from="natures_grace" to="moonfury" tree="tree_balance" />
      <TalentNode
        v-model="model.balance.zenith"
        v-bind="balance.zenith"
        name="zenith"
        spec="druid.balance"
      />
      <TalentNode
        v-model="model.balance.moonglow"
        v-bind="balance.moonglow"
        name="moonglow"
        spec="druid.balance"
      />

      <div></div>
      <TalentNode
        v-model="model.balance.moonfury"
        v-bind="balance.moonfury"
        name="moonfury"
        spec="druid.balance"
      />
      <TalentNode
        v-model="model.balance.balance_of_power"
        v-bind="balance.balance_of_power"
        name="balance_of_power"
        spec="druid.balance"
      />
      <div></div>

      <TalentNode
        v-model="model.balance.dreamstate"
        v-bind="balance.dreamstate"
        name="dreamstate"
        spec="druid.balance"
      />
      <TalentNode
        v-model="model.balance.moonkin_form"
        v-bind="balance.moonkin_form"
        name="moonkin_form"
        spec="druid.balance"
      />
      <TalentNode
        v-model="model.balance.improved_faerie_fire"
        v-bind="balance.improved_faerie_fire"
        name="improved_faerie_fire"
        spec="druid.balance"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.balance.wrath_of_cenarius"
        v-bind="balance.wrath_of_cenarius"
        name="wrath_of_cenarius"
        spec="druid.balance"
      />
      <div></div>
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.balance.force_of_nature"
        v-bind="balance.force_of_nature"
        name="force_of_nature"
        spec="druid.balance"
      />
      <div></div>
      <div></div>
    </BaseTree>
    <BaseTree
      name="druid"
      spec="feral"
      :total="feral_total"
      :image="pathPart() + 'druid/background-druid-feral.avif'"
      :icon="pathPart() + 'ability_racial_bearform.webp'"
      @reset="resetTree($event)"
    >
      <div></div>
      <TalentNode
        v-model="model.feral.ferocity"
        v-bind="feral.ferocity"
        name="ferocity"
        spec="druid.feral"
      />
      <TalentNode
        v-model="model.feral.feral_aggression"
        v-bind="feral.feral_aggression"
        name="feral_aggression"
        spec="druid.feral"
      />
      <div></div>

      <TalentNode
        v-model="model.feral.feral_instinct"
        v-bind="feral.feral_instinct"
        name="feral_instinct"
        spec="druid.feral"
      />
      <TalentNode
        v-model="model.feral.brutal_impact"
        v-bind="feral.brutal_impact"
        name="brutal_impact"
        spec="druid.feral"
      />
      <TalentNode
        v-model="model.feral.thick_hide"
        v-bind="feral.thick_hide"
        name="thick_hide"
        spec="druid.feral"
      />
      <div></div>

      <TalentNode
        v-model="model.feral.feral_swiftness"
        v-bind="feral.feral_swiftness"
        name="feral_swiftness"
        spec="druid.feral"
      />
      <TalentNode
        v-model="model.feral.feral_charge"
        v-bind="feral.feral_charge"
        name="feral_charge"
        spec="druid.feral"
      />
      <TalentNode
        v-model="model.feral.sharpened_claws"
        v-bind="feral.sharpened_claws"
        name="sharpened_claws"
        spec="druid.feral"
      />
      <Arrow from="sharpened_claws" to="primal_fury" tree="tree_feral" />
      <div></div>

      <TalentNode
        v-model="model.feral.shredding_attacks"
        v-bind="feral.shredding_attacks"
        name="shredding_attacks"
        spec="druid.feral"
      />
      <TalentNode
        v-model="model.feral.predatory_strikes"
        v-bind="feral.predatory_strikes"
        name="predatory_strikes"
        spec="druid.feral"
      />
      <Arrow from="predatory_strikes" to="heart_of_the_wild" tree="tree_feral" />
      <TalentNode
        v-model="model.feral.primal_fury"
        v-bind="feral.primal_fury"
        name="primal_fury"
        spec="druid.feral"
      />
      <div></div>

      <TalentNode
        v-model="model.feral.savage_fury"
        v-bind="feral.savage_fury"
        name="savage_fury"
        spec="druid.feral"
      />
      <div></div>
      <TalentNode
        v-model="model.feral.faerie_fire_feral"
        v-bind="feral.faerie_fire_feral"
        name="faerie_fire_feral"
        spec="druid.feral"
      />
      <TalentNode
        v-model="model.feral.nurturing_instinct"
        v-bind="feral.nurturing_instinct"
        name="nurturing_instinct"
        spec="druid.feral"
      />

      <div></div>
      <TalentNode
        v-model="model.feral.heart_of_the_wild"
        v-bind="feral.heart_of_the_wild"
        name="heart_of_the_wild"
        spec="druid.feral"
      />
      <TalentNode
        v-model="model.feral.survival_of_the_fittest"
        v-bind="feral.survival_of_the_fittest"
        name="survival_of_the_fittest"
        spec="druid.feral"
      />
      <div></div>

      <TalentNode
        v-model="model.feral.primal_tenacity"
        v-bind="feral.primal_tenacity"
        name="primal_tenacity"
        spec="druid.feral"
      />
      <TalentNode
        v-model="model.feral.leader_of_the_pack"
        v-bind="feral.leader_of_the_pack"
        name="leader_of_the_pack"
        spec="druid.feral"
      />
      <Arrow from="leader_of_the_pack" to="mangle" tree="tree_feral" />
      <RightArrow tree="tree_feral" to="improved_leader_of_the_pack" from="leader_of_the_pack" />
      <TalentNode
        v-model="model.feral.improved_leader_of_the_pack"
        v-bind="feral.improved_leader_of_the_pack"
        name="improved_leader_of_the_pack"
        spec="druid.feral"
      />
      <div></div>

      <div></div>
      <div></div>
      <TalentNode
        v-model="model.feral.predatory_instincts"
        v-bind="feral.predatory_instincts"
        name="predatory_instincts"
        spec="druid.feral"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.feral.mangle"
        v-bind="feral.mangle"
        name="mangle"
        spec="druid.feral"
      />
      <div></div>
      <div></div>
    </BaseTree>
    <BaseTree
      name="druid"
      spec="restoration"
      :total="restoration_total"
      :image="pathPart() + 'druid/background-druid-restoration.avif'"
      :icon="pathPart() + 'spell_nature_healingtouch.webp'"
      @reset="resetTree($event)"
    >
      <div></div>
      <TalentNode
        v-model="model.restoration.improved_mark_of_the_wild"
        v-bind="restoration.improved_mark_of_the_wild"
        name="improved_mark_of_the_wild"
        spec="druid.restoration"
      />
      <TalentNode
        v-model="model.restoration.furor"
        v-bind="restoration.furor"
        name="furor"
        spec="druid.restoration"
      />
      <div></div>

      <TalentNode
        v-model="model.restoration.naturalist"
        v-bind="restoration.naturalist"
        name="naturalist"
        spec="druid.restoration"
      />
      <TalentNode
        v-model="model.restoration.natures_focus"
        v-bind="restoration.natures_focus"
        name="natures_focus"
        spec="druid.restoration"
      />
      <TalentNode
        v-model="model.restoration.natural_shapeshifter"
        v-bind="restoration.natural_shapeshifter"
        name="natural_shapeshifter"
        spec="druid.restoration"
      />
      <div></div>

      <TalentNode
        v-model="model.restoration.intensity"
        v-bind="restoration.intensity"
        name="intensity"
        spec="druid.restoration"
      />
      <Arrow from="intensity" to="natures_swiftness" tree="tree_restoration" />
      <TalentNode
        v-model="model.restoration.subtlety"
        v-bind="restoration.subtlety"
        name="subtlety"
        spec="druid.restoration"
      />
      <TalentNode
        v-model="model.restoration.omen_of_clarity"
        v-bind="restoration.omen_of_clarity"
        name="omen_of_clarity"
        spec="druid.restoration"
      />
      <TalentNode
        v-model="model.restoration.overgrowth"
        v-bind="restoration.overgrowth"
        name="overgrowth"
        spec="druid.restoration"
      />

      <div></div>
      <TalentNode
        v-model="model.restoration.tranquil_spirit"
        v-bind="restoration.tranquil_spirit"
        name="tranquil_spirit"
        spec="druid.restoration"
      />
      <TalentNode
        v-model="model.restoration.improved_rejuvenation"
        v-bind="restoration.improved_rejuvenation"
        name="improved_rejuvenation"
        spec="druid.restoration"
      />
      <Arrow from="improved_rejuvenation" to="improved_regrowth" tree="tree_restoration" />
      <div></div>

      <TalentNode
        v-model="model.restoration.natures_swiftness"
        v-bind="restoration.natures_swiftness"
        name="natures_swiftness"
        spec="druid.restoration"
      />
      <TalentNode
        v-model="model.restoration.gift_of_nature"
        v-bind="restoration.gift_of_nature"
        name="gift_of_nature"
        spec="druid.restoration"
      />
      <Arrow from="gift_of_nature" to="swiftmend" tree="tree_restoration" />
      <div></div>
      <TalentNode
        v-model="model.restoration.improved_tranquility"
        v-bind="restoration.improved_tranquility"
        name="improved_tranquility"
        spec="druid.restoration"
      />

      <TalentNode
        v-model="model.restoration.empowered_touch"
        v-bind="restoration.empowered_touch"
        name="empowered_touch"
        spec="druid.restoration"
      />
      <div></div>
      <TalentNode
        v-model="model.restoration.improved_regrowth"
        v-bind="restoration.improved_regrowth"
        name="improved_regrowth"
        spec="druid.restoration"
      />
      <div></div>

      <TalentNode
        v-model="model.restoration.living_spirit"
        v-bind="restoration.living_spirit"
        name="living_spirit"
        spec="druid.restoration"
      />
      <TalentNode
        v-model="model.restoration.swiftmend"
        v-bind="restoration.swiftmend"
        name="swiftmend"
        spec="druid.restoration"
      />
      <TalentNode
        v-model="model.restoration.natural_perfection"
        v-bind="restoration.natural_perfection"
        name="natural_perfection"
        spec="druid.restoration"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.restoration.empowered_rejuvenation"
        v-bind="restoration.empowered_rejuvenation"
        name="empowered_rejuvenation"
        spec="druid.restoration"
      />
      <Arrow from="empowered_rejuvenation" to="tree_of_life" tree="tree_restoration" />
      <div></div>
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.restoration.tree_of_life"
        v-bind="restoration.tree_of_life"
        name="tree_of_life"
        spec="druid.restoration"
      />
      <div></div>
      <div></div>
    </BaseTree>
  </ClassView>
</template>
