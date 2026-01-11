<script>
import { discipline } from '@classes/priest/discipline.js'
import { pathPart } from '@src/enviroment.js'
import ClassView from '@base/ClassView.vue'
import BaseTree from '@base/BaseTree.vue'
import TalentNode from '@base/TalentNode.vue'
import { holy } from '@classes/priest/holy.js'
import Arrow from '@base/Arrow.vue'
import RightArrow from '@base/RightArrow.vue'
import LeftArrow from '@base/LeftArrow.vue'
import { shadow } from '@classes/priest/shadow.js'
import { useCurrentStore } from '@src/stores/current.js'
import { resetTotal, resetTree, share } from '@src/ClassModule.js'

export default {
  name: 'PriestView',
  components: {
    RightArrow,
    LeftArrow,
    HorizontalArrow: RightArrow,
    Arrow,
    TalentNode,
    BaseTree,
    ClassView,
  },

  data() {
    return {
      total: 0,
      discipline_total: 0,
      holy_total: 0,
      shadow_total: 0,
      model: {
        discipline: {
          unbreakable_will: 0,
          wand_specialization: 0,
          silent_resolve: 0,
          improved_power_word_fortitude: 0,
          improved_power_word_shield: 0,
          martyrdom: 0,
          absolution: 0,
          inner_focus: 0,
          meditation: 0,
          improved_inner_fire: 0,
          mental_agility: 0,
          improved_mana_burn: 0,
          mental_strength: 0,
          improved_divine_spirit: 0,
          pain_suppression: 0,
          focused_power: 0,
          force_of_will: 0,
          focused_will: 0,
          power_infusion: 0,
          reflective_shield: 0,
          enlightenment: 0,
          power_word_barrier: 0,
        },
        holy: {
          holy_focus: 0,
          improved_renew: 0,
          holy_specialization: 0,
          spell_warding: 0,
          divine_fury: 0,
          holy_nova: 0,
          blessed_recovery: 0,
          searing_light: 0,
          improved_healing: 0,
          inspiration: 0,
          holy_reach: 0,
          healing_prayers: 0,
          spirit_of_redemption: 0,
          spiritual_guidance: 0,
          surge_of_light: 0,
          spiritual_healing: 0,
          holy_concentration: 0,
          lightwell: 0,
          blessed_resilience: 0,
          empowered_healing: 0,
          circle_of_healing: 0,
        },
        shadow: {
          spirit_tap: 0,
          blackout: 0,
          shadow_affinity: 0,
          improved_shadow_word_pain: 0,
          shadow_focus: 0,
          improved_psychic_scream: 0,
          improved_mind_blast: 0,
          mind_flay: 0,
          improved_fade: 0,
          shadow_reach: 0,
          shadow_weaving: 0,
          silence: 0,
          vampiric_embrace: 0,
          improved_vampiric_embrace: 0,
          focused_mind: 0,
          shadow_resilience: 0,
          darkness: 0,
          psionic_overload: 0,
          shadowform: 0,
          shadow_power: 0,
          misery: 0,
          vampiric_touch: 0,
        },
      },
    }
  },
  mounted() {
    const url = window.location.href.split('/')
    let trees = false
    if (url.length === 6 && url[5] !== '') {
      trees = url[5].split('a')
      Object.keys(this.model.discipline).forEach((item, index) => {
        this.model.discipline[item] = parseInt(trees[0][index])
      })
      Object.keys(this.model.holy).forEach((item, index) => {
        this.model.holy[item] = parseInt(trees[1][index])
      })
      Object.keys(this.model.shadow).forEach((item, index) => {
        this.model.shadow[item] = parseInt(trees[2][index])
      })
    }
  },
  computed: {
    shadow() {
      return shadow
    },
    discipline() {
      return discipline
    },
    holy() {
      return holy
    },
    currentStore() {
      return useCurrentStore()
    },
    shareLink() {
      let str =
        Object.values(this.model.discipline).join('') +
        'a' +
        Object.values(this.model.holy).join('') +
        'a' +
        Object.values(this.model.shadow).join('')
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
        let discipline = Object.values(n.discipline).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)

        let holy = Object.values(n.holy).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)

        let shadow = Object.values(n.shadow).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)

        this.discipline_total = discipline
        this.holy_total = holy
        this.shadow_total = shadow
        this.total = discipline + holy + shadow
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
      name="priest"
      spec="discipline"
      :total="discipline_total"
      :image="pathPart() + 'priest/background-priest-discipline.avif'"
      :icon="pathPart() + 'spell_holy_wordfortitude.webp'"
      @reset="resetTree($event)"
    >
      <div></div>
      <TalentNode
        v-model="model.discipline.unbreakable_will"
        v-bind="discipline.unbreakable_will"
        name="unbreakable_will"
        spec="priest.discipline"
      />
      <TalentNode
        v-model="model.discipline.wand_specialization"
        v-bind="discipline.wand_specialization"
        name="wand_specialization"
        spec="priest.discipline"
      />
      <div></div>

      <TalentNode
        v-model="model.discipline.silent_resolve"
        v-bind="discipline.silent_resolve"
        name="silent_resolve"
        spec="priest.discipline"
      />
      <TalentNode
        v-model="model.discipline.improved_power_word_fortitude"
        v-bind="discipline.improved_power_word_fortitude"
        name="improved_power_word_fortitude"
        spec="priest.discipline"
      />
      <TalentNode
        v-model="model.discipline.improved_power_word_shield"
        v-bind="discipline.improved_power_word_shield"
        name="improved_power_word_shield"
        spec="priest.discipline"
      />
      <TalentNode
        v-model="model.discipline.martyrdom"
        v-bind="discipline.martyrdom"
        name="martyrdom"
        spec="priest.discipline"
      />
      <Arrow from="martyrdom" to="pain_suppression" tree="tree_discipline" />

      <TalentNode
        v-model="model.discipline.absolution"
        v-bind="discipline.absolution"
        name="absolution"
        spec="priest.discipline"
      />
      <TalentNode
        v-model="model.discipline.inner_focus"
        v-bind="discipline.inner_focus"
        name="inner_focus"
        spec="priest.discipline"
      />
      <TalentNode
        v-model="model.discipline.meditation"
        v-bind="discipline.meditation"
        name="meditation"
        spec="priest.discipline"
      />
      <div></div>

      <TalentNode
        v-model="model.discipline.improved_inner_fire"
        v-bind="discipline.improved_inner_fire"
        name="improved_inner_fire"
        spec="priest.discipline"
      />
      <TalentNode
        v-model="model.discipline.mental_agility"
        v-bind="discipline.mental_agility"
        name="mental_agility"
        spec="priest.discipline"
      />
      <TalentNode
        v-model="model.discipline.improved_mana_burn"
        v-bind="discipline.improved_mana_burn"
        name="improved_mana_burn"
        spec="priest.discipline"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.discipline.mental_strength"
        v-bind="discipline.mental_strength"
        name="mental_strength"
        spec="priest.discipline"
      />
      <Arrow from="mental_strength" to="power_infusion" tree="tree_discipline" />
      <TalentNode
        v-model="model.discipline.improved_divine_spirit"
        v-bind="discipline.improved_divine_spirit"
        name="improved_divine_spirit"
        spec="priest.discipline"
      />
      <TalentNode
        v-model="model.discipline.pain_suppression"
        v-bind="discipline.pain_suppression"
        name="pain_suppression"
        spec="priest.discipline"
      />

      <TalentNode
        v-model="model.discipline.focused_power"
        v-bind="discipline.focused_power"
        name="focused_power"
        spec="priest.discipline"
      />
      <div></div>
      <TalentNode
        v-model="model.discipline.force_of_will"
        v-bind="discipline.force_of_will"
        name="force_of_will"
        spec="priest.discipline"
      />
      <div></div>

      <TalentNode
        v-model="model.discipline.focused_will"
        v-bind="discipline.focused_will"
        name="focused_will"
        spec="priest.discipline"
      />
      <TalentNode
        v-model="model.discipline.power_infusion"
        v-bind="discipline.power_infusion"
        name="power_infusion"
        spec="priest.discipline"
      />
      <TalentNode
        v-model="model.discipline.reflective_shield"
        v-bind="discipline.reflective_shield"
        name="reflective_shield"
        spec="priest.discipline"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.discipline.enlightenment"
        v-bind="discipline.enlightenment"
        name="enlightenment"
        spec="priest.discipline"
      />
      <div></div>
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.discipline.power_word_barrier"
        v-bind="discipline.power_word_barrier"
        name="power_word_barrier"
        spec="priest.discipline"
      />
      <div></div>
      <div></div>
    </BaseTree>
    <BaseTree
      name="priest"
      spec="holy"
      :total="holy_total"
      :image="pathPart() + 'priest/background-priest-holy.avif'"
      :icon="pathPart() + 'spell_holy_holybolt.webp'"
      @reset="resetTree($event)"
    >
      <TalentNode
        v-model="model.holy.holy_focus"
        v-bind="holy.holy_focus"
        name="holy_focus"
        spec="priest.holy"
      />
      <TalentNode
        v-model="model.holy.improved_renew"
        v-bind="holy.improved_renew"
        name="improved_renew"
        spec="priest.holy"
      />
      <TalentNode
        v-model="model.holy.holy_specialization"
        v-bind="holy.holy_specialization"
        name="holy_specialization"
        spec="priest.holy"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.holy.spell_warding"
        v-bind="holy.spell_warding"
        name="spell_warding"
        spec="priest.holy"
      />
      <TalentNode
        v-model="model.holy.divine_fury"
        v-bind="holy.divine_fury"
        name="divine_fury"
        spec="priest.holy"
      />
      <Arrow from="divine_fury" to="searing_light" tree="tree_holy" />
      <div></div>

      <TalentNode
        v-model="model.holy.holy_nova"
        v-bind="holy.holy_nova"
        name="holy_nova"
        spec="priest.holy"
      />
      <TalentNode
        v-model="model.holy.blessed_recovery"
        v-bind="holy.blessed_recovery"
        name="blessed_recovery"
        spec="priest.holy"
      />
      <TalentNode
        v-model="model.holy.searing_light"
        v-bind="holy.searing_light"
        name="searing_light"
        spec="priest.holy"
      />
      <TalentNode
        v-model="model.holy.improved_healing"
        v-bind="holy.improved_healing"
        name="improved_healing"
        spec="priest.holy"
      />

      <div></div>
      <TalentNode
        v-model="model.holy.inspiration"
        v-bind="holy.inspiration"
        name="inspiration"
        spec="priest.holy"
      />
      <TalentNode
        v-model="model.holy.holy_reach"
        v-bind="holy.holy_reach"
        name="holy_reach"
        spec="priest.holy"
      />
      <div></div>

      <TalentNode
        v-model="model.holy.healing_prayers"
        v-bind="holy.healing_prayers"
        name="healing_prayers"
        spec="priest.holy"
      />
      <TalentNode
        v-model="model.holy.spirit_of_redemption"
        v-bind="holy.spirit_of_redemption"
        name="spirit_of_redemption"
        spec="priest.holy"
      />
      <Arrow from="spirit_of_redemption" to="lightwell" tree="tree_holy" />
      <TalentNode
        v-model="model.holy.spiritual_guidance"
        v-bind="holy.spiritual_guidance"
        name="spiritual_guidance"
        spec="priest.holy"
      />
      <div></div>

      <TalentNode
        v-model="model.holy.surge_of_light"
        v-bind="holy.surge_of_light"
        name="surge_of_light"
        spec="priest.holy"
      />
      <div></div>
      <TalentNode
        v-model="model.holy.spiritual_healing"
        v-bind="holy.spiritual_healing"
        name="spiritual_healing"
        spec="priest.holy"
      />
      <div></div>

      <TalentNode
        v-model="model.holy.holy_concentration"
        v-bind="holy.holy_concentration"
        name="holy_concentration"
        spec="priest.holy"
      />
      <TalentNode
        v-model="model.holy.lightwell"
        v-bind="holy.lightwell"
        name="lightwell"
        spec="priest.holy"
      />
      <TalentNode
        v-model="model.holy.blessed_resilience"
        v-bind="holy.blessed_resilience"
        name="blessed_resilience"
        spec="priest.holy"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.holy.empowered_healing"
        v-bind="holy.empowered_healing"
        name="empowered_healing"
        spec="priest.holy"
      />
      <div></div>
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.holy.circle_of_healing"
        v-bind="holy.circle_of_healing"
        name="circle_of_healing"
        spec="priest.holy"
      />
      <div></div>
      <div></div>
    </BaseTree>
    <BaseTree
      name="priest"
      spec="shadow"
      :total="shadow_total"
      :image="pathPart() + 'priest/background-priest-shadow.avif'"
      :icon="pathPart() + 'spell_shadow_shadowwordpain.webp'"
      @reset="resetTree($event)"
    >
      <div></div>
      <TalentNode
        v-model="model.shadow.spirit_tap"
        v-bind="shadow.spirit_tap"
        name="spirit_tap"
        spec="priest.shadow"
      />
      <TalentNode
        v-model="model.shadow.blackout"
        v-bind="shadow.blackout"
        name="blackout"
        spec="priest.shadow"
      />
      <div></div>

      <TalentNode
        v-model="model.shadow.shadow_affinity"
        v-bind="shadow.shadow_affinity"
        name="shadow_affinity"
        spec="priest.shadow"
      />
      <TalentNode
        v-model="model.shadow.improved_shadow_word_pain"
        v-bind="shadow.improved_shadow_word_pain"
        name="improved_shadow_word_pain"
        spec="priest.shadow"
      />
      <TalentNode
        v-model="model.shadow.shadow_focus"
        v-bind="shadow.shadow_focus"
        name="shadow_focus"
        spec="priest.shadow"
      />
      <div></div>

      <TalentNode
        v-model="model.shadow.improved_psychic_scream"
        v-bind="shadow.improved_psychic_scream"
        name="improved_psychic_scream"
        spec="priest.shadow"
      />
      <Arrow from="improved_psychic_scream" to="silence" tree="tree_shadow" />
      <TalentNode
        v-model="model.shadow.improved_mind_blast"
        v-bind="shadow.improved_mind_blast"
        name="improved_mind_blast"
        spec="priest.shadow"
      />
      <TalentNode
        v-model="model.shadow.mind_flay"
        v-bind="shadow.mind_flay"
        name="mind_flay"
        spec="priest.shadow"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.shadow.improved_fade"
        v-bind="shadow.improved_fade"
        name="improved_fade"
        spec="priest.shadow"
      />
      <TalentNode
        v-model="model.shadow.shadow_reach"
        v-bind="shadow.shadow_reach"
        name="shadow_reach"
        spec="priest.shadow"
      />
      <TalentNode
        v-model="model.shadow.shadow_weaving"
        v-bind="shadow.shadow_weaving"
        name="shadow_weaving"
        spec="priest.shadow"
      />

      <TalentNode
        v-model="model.shadow.silence"
        v-bind="shadow.silence"
        name="silence"
        spec="priest.shadow"
      />
      <TalentNode
        v-model="model.shadow.vampiric_embrace"
        v-bind="shadow.vampiric_embrace"
        name="vampiric_embrace"
        spec="priest.shadow"
      />
      <RightArrow from="vampiric_embrace" to="improved_vampiric_embrace" tree="tree_shadow" />
      <Arrow from="vampiric_embrace" to="shadowform" tree="tree_shadow" />
      <TalentNode
        v-model="model.shadow.improved_vampiric_embrace"
        v-bind="shadow.improved_vampiric_embrace"
        name="improved_vampiric_embrace"
        spec="priest.shadow"
      />
      <TalentNode
        v-model="model.shadow.focused_mind"
        v-bind="shadow.focused_mind"
        name="focused_mind"
        spec="priest.shadow"
      />

      <TalentNode
        v-model="model.shadow.shadow_resilience"
        v-bind="shadow.shadow_resilience"
        name="shadow_resilience"
        spec="priest.shadow"
      />
      <div></div>
      <TalentNode
        v-model="model.shadow.darkness"
        v-bind="shadow.darkness"
        name="darkness"
        spec="priest.shadow"
      />
      <div></div>

      <TalentNode
        v-model="model.shadow.psionic_overload"
        v-bind="shadow.psionic_overload"
        name="psionic_overload"
        spec="priest.shadow"
      />
      <TalentNode
        v-model="model.shadow.shadowform"
        v-bind="shadow.shadowform"
        name="shadowform"
        spec="priest.shadow"
      />
      <Arrow from="shadowform" to="vampiric_touch" tree="tree_shadow" />
      <TalentNode
        v-model="model.shadow.shadow_power"
        v-bind="shadow.shadow_power"
        name="shadow_power"
        spec="priest.shadow"
      />
      <div></div>

      <div></div>
      <div></div>
      <TalentNode
        v-model="model.shadow.misery"
        v-bind="shadow.misery"
        name="misery"
        spec="priest.shadow"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.shadow.vampiric_touch"
        v-bind="shadow.vampiric_touch"
        name="vampiric_touch"
        spec="priest.shadow"
      />
      <div></div>
      <div></div>
    </BaseTree>
  </ClassView>
</template>
