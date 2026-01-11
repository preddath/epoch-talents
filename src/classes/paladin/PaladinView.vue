<script>
import ClassView from '@base/ClassView.vue'
import BaseTree from '@base/BaseTree.vue'
import { useCurrentStore } from '@src/stores/current.js'
import { resetTotal, resetTree, share } from '@src/ClassModule.js'
import { pathPart } from '@src/enviroment.js'
import { holy } from '@classes/paladin/holy.js'
import { protection } from '@classes/paladin/protection.js'
import { retribution } from '@classes/paladin/retribution.js'
import TalentNode from '@base/TalentNode.vue'
import Arrow from '@base/Arrow.vue'
import LeftArrow from '@base/LeftArrow.vue'
import RightArrow from '@base/RightArrow.vue'

export default {
  name: 'PaladinView',
  components: { RightArrow, LeftArrow, Arrow, TalentNode, BaseTree, ClassView },
  data() {
    return {
      total: 0,
      holy_total: 0,
      protection_total: 0,
      retribution_total: 0,
      model: {
        holy: {
          divine_strength: 0,
          divine_intellect: 0,
          spiritual_focus: 0,
          improved_seal_of_righteousness: 0,
          healing_light: 0,
          aura_mastery: 0,
          improved_lay_on_hands: 0,
          unyielding_faith: 0,
          illumination: 0,
          improved_blessing_of_wisdom: 0,
          overwhelming_light: 0,
          pure_of_heart: 0,
          divine_favor: 0,
          sanctified_light: 0,
          purifying_power: 0,
          holy_power: 0,
          lights_grace: 0,
          holy_shock: 0,
          blessed_life: 0,
          holy_guidance: 0,
          divine_illumination: 0,
        },
        protection: {
          improved_devotion_aura: 0,
          redoubt: 0,
          precision: 0,
          guardians_favor: 0,
          toughness: 0,
          blessing_of_kings: 0,
          improved_righteous_fury: 0,
          shield_specialization: 0,
          improved_concentration_aura: 0,
          stoicism: 0,
          improved_hammer_of_justice: 0,
          anticipation: 0,
          spell_warding: 0,
          blessing_of_sanctuary: 0,
          reckoning: 0,
          sacred_duty: 0,
          one_handed_weapon_specialization: 0,
          improved_holy_shield: 0,
          holy_shield: 0,
          ardent_defender: 0,
          combat_expertise: 0,
          avengers_shield: 0,
        },
        retribution: {
          improved_blessing_of_might: 0,
          benediction: 0,
          improved_judgement: 0,
          improved_crusader_strike: 0,
          deflection: 0,
          vindication: 0,
          conviction: 0,
          seal_of_command: 0,
          pursuit_of_justice: 0,
          eye_for_an_eye: 0,
          improved_retribution_aura: 0,
          crusade: 0,
          two_handed_weapon_specialization: 0,
          sanctity_aura: 0,
          improved_sanctity_aura: 0,
          vengeance: 0,
          sanctified_judgement: 0,
          sanctified_seals: 0,
          repentance: 0,
          divine_purpose: 0,
          fanaticism: 0,
          verdict: 0,
        },
      },
    }
  },
  mounted() {
    const url = window.location.href.split('/')
    let trees = false
    if (url.length === 6 && url[5] !== '') {
      trees = url[5].split('a')
      Object.keys(this.model.holy).forEach((item, index) => {
        this.model.holy[item] = parseInt(trees[0][index])
      })
      Object.keys(this.model.protection).forEach((item, index) => {
        this.model.protection[item] = parseInt(trees[1][index])
      })
      Object.keys(this.model.retribution).forEach((item, index) => {
        this.model.retribution[item] = parseInt(trees[2][index])
      })
    }
  },
  computed: {
    holy() {
      return holy
    },
    protection() {
      return protection
    },
    retribution() {
      return retribution
    },
    currentStore() {
      return useCurrentStore()
    },
    shareLink() {
      let str =
        Object.values(this.model.holy).join('') +
        'a' +
        Object.values(this.model.protection).join('') +
        'a' +
        Object.values(this.model.retribution).join('')
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
        let holy = Object.values(n.holy).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)

        let protection = Object.values(n.protection).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)

        let retribution = Object.values(n.retribution).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)

        this.holy_total = holy
        this.protection_total = protection
        this.retribution_total = retribution
        this.total = holy + protection + retribution
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
      name="paladin"
      spec="holy"
      :total="holy_total"
      :image="pathPart() + 'paladin/background-paladin-holy.avif'"
      :icon="pathPart() + 'spell_holy_holybolt.webp'"
      @reset="resetTree($event)"
    >
      <div></div>
      <TalentNode
        v-model="model.holy.divine_strength"
        v-bind="holy.divine_strength"
        name="divine_strength"
        spec="paladin.holy"
      />
      <TalentNode
        v-model="model.holy.divine_intellect"
        v-bind="holy.divine_intellect"
        name="divine_intellect"
        spec="paladin.holy"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.holy.spiritual_focus"
        v-bind="holy.spiritual_focus"
        name="spiritual_focus"
        spec="paladin.holy"
      />
      <TalentNode
        v-model="model.holy.improved_seal_of_righteousness"
        v-bind="holy.improved_seal_of_righteousness"
        name="improved_seal_of_righteousness"
        spec="paladin.holy"
      />
      <div></div>

      <TalentNode
        v-model="model.holy.healing_light"
        v-bind="holy.healing_light"
        name="healing_light"
        spec="paladin.holy"
      />
      <TalentNode
        v-model="model.holy.aura_mastery"
        v-bind="holy.aura_mastery"
        name="aura_mastery"
        spec="paladin.holy"
      />
      <TalentNode
        v-model="model.holy.improved_lay_on_hands"
        v-bind="holy.improved_lay_on_hands"
        name="improved_lay_on_hands"
        spec="paladin.holy"
      />
      <TalentNode
        v-model="model.holy.unyielding_faith"
        v-bind="holy.unyielding_faith"
        name="unyielding_faith"
        spec="paladin.holy"
      />

      <div></div>
      <TalentNode
        v-model="model.holy.illumination"
        v-bind="holy.illumination"
        name="illumination"
        spec="paladin.holy"
      />
      <Arrow from="illumination" to="divine_favor" tree="tree_holy" />
      <TalentNode
        v-model="model.holy.improved_blessing_of_wisdom"
        v-bind="holy.improved_blessing_of_wisdom"
        name="improved_blessing_of_wisdom"
        spec="paladin.holy"
      />
      <TalentNode
        v-model="model.holy.overwhelming_light"
        v-bind="holy.overwhelming_light"
        name="overwhelming_light"
        spec="paladin.holy"
      />

      <TalentNode
        v-model="model.holy.pure_of_heart"
        v-bind="holy.pure_of_heart"
        name="pure_of_heart"
        spec="paladin.holy"
      />
      <TalentNode
        v-model="model.holy.divine_favor"
        v-bind="holy.divine_favor"
        name="divine_favor"
        spec="paladin.holy"
      />
      <Arrow from="divine_favor" to="holy_shock" tree="tree_holy" />
      <TalentNode
        v-model="model.holy.sanctified_light"
        v-bind="holy.sanctified_light"
        name="sanctified_light"
        spec="paladin.holy"
      />
      <div></div>

      <TalentNode
        v-model="model.holy.purifying_power"
        v-bind="holy.purifying_power"
        name="purifying_power"
        spec="paladin.holy"
      />
      <div></div>
      <TalentNode
        v-model="model.holy.holy_power"
        v-bind="holy.holy_power"
        name="holy_power"
        spec="paladin.holy"
      />
      <div></div>

      <TalentNode
        v-model="model.holy.lights_grace"
        v-bind="holy.lights_grace"
        name="lights_grace"
        spec="paladin.holy"
      />
      <TalentNode
        v-model="model.holy.holy_shock"
        v-bind="holy.holy_shock"
        name="holy_shock"
        spec="paladin.holy"
      />
      <TalentNode
        v-model="model.holy.blessed_life"
        v-bind="holy.blessed_life"
        name="blessed_life"
        spec="paladin.holy"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.holy.holy_guidance"
        v-bind="holy.holy_guidance"
        name="holy_guidance"
        spec="paladin.holy"
      />
      <div></div>
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.holy.divine_illumination"
        v-bind="holy.divine_illumination"
        name="divine_illumination"
        spec="paladin.holy"
      />
      <div></div>
      <div></div>
    </BaseTree>
    <BaseTree
      name="paladin"
      spec="protection"
      :total="protection_total"
      :image="pathPart() + 'paladin/background-paladin-protection.avif'"
      :icon="pathPart() + 'spell_holy_devotionaura.webp'"
      @reset="resetTree($event)"
    >
      <div></div>
      <TalentNode
        v-model="model.protection.improved_devotion_aura"
        v-bind="protection.improved_devotion_aura"
        name="improved_devotion_aura"
        spec="paladin.protection"
      />
      <TalentNode
        v-model="model.protection.redoubt"
        v-bind="protection.redoubt"
        name="redoubt"
        spec="paladin.protection"
      />
      <Arrow from="redoubt" to="shield_specialization" tree="tree_protection" />
      <div></div>

      <TalentNode
        v-model="model.protection.precision"
        v-bind="protection.precision"
        name="precision"
        spec="paladin.protection"
      />
      <TalentNode
        v-model="model.protection.guardians_favor"
        v-bind="protection.guardians_favor"
        name="guardians_favor"
        spec="paladin.protection"
      />
      <div></div>
      <TalentNode
        v-model="model.protection.toughness"
        v-bind="protection.toughness"
        name="toughness"
        spec="paladin.protection"
      />

      <TalentNode
        v-model="model.protection.blessing_of_kings"
        v-bind="protection.blessing_of_kings"
        name="blessing_of_kings"
        spec="paladin.protection"
      />
      <TalentNode
        v-model="model.protection.improved_righteous_fury"
        v-bind="protection.improved_righteous_fury"
        name="improved_righteous_fury"
        spec="paladin.protection"
      />
      <TalentNode
        v-model="model.protection.shield_specialization"
        v-bind="protection.shield_specialization"
        name="shield_specialization"
        spec="paladin.protection"
      />
      <TalentNode
        v-model="model.protection.improved_concentration_aura"
        v-bind="protection.improved_concentration_aura"
        name="improved_concentration_aura"
        spec="paladin.protection"
      />

      <TalentNode
        v-model="model.protection.stoicism"
        v-bind="protection.stoicism"
        name="stoicism"
        spec="paladin.protection"
      />
      <TalentNode
        v-model="model.protection.improved_hammer_of_justice"
        v-bind="protection.improved_hammer_of_justice"
        name="improved_hammer_of_justice"
        spec="paladin.protection"
      />
      <TalentNode
        v-model="model.protection.anticipation"
        v-bind="protection.anticipation"
        name="anticipation"
        spec="paladin.protection"
      />
      <div></div>

      <TalentNode
        v-model="model.protection.spell_warding"
        v-bind="protection.spell_warding"
        name="spell_warding"
        spec="paladin.protection"
      />
      <TalentNode
        v-model="model.protection.blessing_of_sanctuary"
        v-bind="protection.blessing_of_sanctuary"
        name="blessing_of_sanctuary"
        spec="paladin.protection"
      />
      <Arrow from="blessing_of_sanctuary" to="holy_shield" tree="tree_protection" />
      <TalentNode
        v-model="model.protection.reckoning"
        v-bind="protection.reckoning"
        name="reckoning"
        spec="paladin.protection"
      />
      <div></div>

      <TalentNode
        v-model="model.protection.sacred_duty"
        v-bind="protection.sacred_duty"
        name="sacred_duty"
        spec="paladin.protection"
      />
      <div></div>
      <TalentNode
        v-model="model.protection.one_handed_weapon_specialization"
        v-bind="protection.one_handed_weapon_specialization"
        name="one_handed_weapon_specialization"
        spec="paladin.protection"
      />
      <div></div>

      <TalentNode
        v-model="model.protection.improved_holy_shield"
        v-bind="protection.improved_holy_shield"
        name="improved_holy_shield"
        spec="paladin.protection"
      />
      <TalentNode
        v-model="model.protection.holy_shield"
        v-bind="protection.holy_shield"
        name="holy_shield"
        spec="paladin.protection"
      />
      <LeftArrow tree="tree_protection" to="improved_holy_shield" from="holy_shield" />
      <Arrow from="holy_shield" to="avengers_shield" tree="tree_protection" />
      <TalentNode
        v-model="model.protection.ardent_defender"
        v-bind="protection.ardent_defender"
        name="ardent_defender"
        spec="paladin.protection"
      />
      <div></div>

      <div></div>
      <div></div>
      <TalentNode
        v-model="model.protection.combat_expertise"
        v-bind="protection.combat_expertise"
        name="combat_expertise"
        spec="paladin.protection"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.protection.avengers_shield"
        v-bind="protection.avengers_shield"
        name="avengers_shield"
        spec="paladin.protection"
      />
      <div></div>
      <div></div>
    </BaseTree>
    <BaseTree
      name="paladin"
      spec="retribution"
      :total="retribution_total"
      :image="pathPart() + 'paladin/background-paladin-retribution.avif'"
      :icon="pathPart() + 'spell_holy_auraoflight.webp'"
      @reset="resetTree($event)"
    >
      <div></div>
      <TalentNode
        v-model="model.retribution.improved_blessing_of_might"
        v-bind="retribution.improved_blessing_of_might"
        name="improved_blessing_of_might"
        spec="paladin.retribution"
      />
      <TalentNode
        v-model="model.retribution.benediction"
        v-bind="retribution.benediction"
        name="benediction"
        spec="paladin.retribution"
      />
      <div></div>

      <TalentNode
        v-model="model.retribution.improved_judgement"
        v-bind="retribution.improved_judgement"
        name="improved_judgement"
        spec="paladin.retribution"
      />
      <TalentNode
        v-model="model.retribution.improved_crusader_strike"
        v-bind="retribution.improved_crusader_strike"
        name="improved_crusader_strike"
        spec="paladin.retribution"
      />
      <TalentNode
        v-model="model.retribution.deflection"
        v-bind="retribution.deflection"
        name="deflection"
        spec="paladin.retribution"
      />
      <div></div>

      <TalentNode
        v-model="model.retribution.vindication"
        v-bind="retribution.vindication"
        name="vindication"
        spec="paladin.retribution"
      />
      <TalentNode
        v-model="model.retribution.conviction"
        v-bind="retribution.conviction"
        name="conviction"
        spec="paladin.retribution"
      />
      <Arrow from="conviction" to="vengeance" tree="tree_retribution" />
      <TalentNode
        v-model="model.retribution.seal_of_command"
        v-bind="retribution.seal_of_command"
        name="seal_of_command"
        spec="paladin.retribution"
      />
      <TalentNode
        v-model="model.retribution.pursuit_of_justice"
        v-bind="retribution.pursuit_of_justice"
        name="pursuit_of_justice"
        spec="paladin.retribution"
      />

      <TalentNode
        v-model="model.retribution.eye_for_an_eye"
        v-bind="retribution.eye_for_an_eye"
        name="eye_for_an_eye"
        spec="paladin.retribution"
      />
      <div></div>
      <TalentNode
        v-model="model.retribution.improved_retribution_aura"
        v-bind="retribution.improved_retribution_aura"
        name="improved_retribution_aura"
        spec="paladin.retribution"
      />
      <TalentNode
        v-model="model.retribution.crusade"
        v-bind="retribution.crusade"
        name="crusade"
        spec="paladin.retribution"
      />

      <TalentNode
        v-model="model.retribution.two_handed_weapon_specialization"
        v-bind="retribution.two_handed_weapon_specialization"
        name="two_handed_weapon_specialization"
        spec="paladin.retribution"
      />
      <div></div>
      <TalentNode
        v-model="model.retribution.sanctity_aura"
        v-bind="retribution.sanctity_aura"
        name="sanctity_aura"
        spec="paladin.retribution"
      />
      <RightArrow from="sanctity_aura" to="improved_sanctity_aura" tree="tree_retribution" />
      <TalentNode
        v-model="model.retribution.improved_sanctity_aura"
        v-bind="retribution.improved_sanctity_aura"
        name="improved_sanctity_aura"
        spec="paladin.retribution"
      />

      <div></div>
      <TalentNode
        v-model="model.retribution.vengeance"
        v-bind="retribution.vengeance"
        name="vengeance"
        spec="paladin.retribution"
      />
      <TalentNode
        v-model="model.retribution.sanctified_judgement"
        v-bind="retribution.sanctified_judgement"
        name="sanctified_judgement"
        spec="paladin.retribution"
      />
      <div></div>

      <TalentNode
        v-model="model.retribution.sanctified_seals"
        v-bind="retribution.sanctified_seals"
        name="sanctified_seals"
        spec="paladin.retribution"
      />
      <TalentNode
        v-model="model.retribution.repentance"
        v-bind="retribution.repentance"
        name="repentance"
        spec="paladin.retribution"
      />
      <Arrow from="repentance" to="fanaticism" tree="tree_retribution" />
      <TalentNode
        v-model="model.retribution.divine_purpose"
        v-bind="retribution.divine_purpose"
        name="divine_purpose"
        spec="paladin.retribution"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.retribution.fanaticism"
        v-bind="retribution.fanaticism"
        name="fanaticism"
        spec="paladin.retribution"
      />
      <div></div>
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.retribution.verdict"
        v-bind="retribution.verdict"
        name="verdict"
        spec="paladin.retribution"
      />
      <div></div>
      <div></div>
    </BaseTree>
  </ClassView>
</template>
