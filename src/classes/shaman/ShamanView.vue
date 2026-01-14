<script>
import { elemental } from '@classes/shaman/elemental.js'
import { pathPart } from '@src/enviroment.js'
import ClassView from '@base/ClassView.vue'
import BaseTree from '@base/BaseTree.vue'
import TalentNode from '@base/TalentNode.vue'
import { enhancement } from '@classes/shaman/enhancement.js'
import Arrow from '@base/Arrow.vue'
import RightArrow from '@base/RightArrow.vue'
import LeftArrow from '@base/LeftArrow.vue'
import { restoration } from '@classes/shaman/restoration.js'
import { useCurrentStore } from '@src/stores/current.js'
import { resetTotal, resetTree, share } from '@src/ClassModule.js'

export default {
  name: 'ShamanView',
  components: { LeftArrow, HorizontalArrow: RightArrow, Arrow, TalentNode, BaseTree, ClassView },

  data() {
    return {
      total: 0,
      elemental_total: 0,
      enhancement_total: 0,
      restoration_total: 0,
      model: {
        elemental: {
          convection: 0,
          concussion: 0,
          earths_grasp: 0,
          elemental_warding: 0,
          call_of_flame: 0,
          elemental_focus: 0,
          reverbaration: 0,
          fire_and_lightning_mastery: 0,
          improved_fire_totems: 0,
          rolling_thunder: 0,
          elemental_devastation: 0,
          storm_reach: 0,
          elemental_fury: 0,
          unrelenting_storm: 0,
          elemental_precision: 0,
          call_of_thunder: 0,
          elemental_mastery: 0,
          elemental_shields: 0,
          elemental_overload: 0,
          totem_of_wrath: 0,
        },
        enhancement: {
          ancestral_knowledge: 0,
          shield_specialization: 0,
          guardian_totems: 0,
          thundering_strikes: 0,
          improved_ghost_wolf: 0,
          improved_lightning_shield: 0,
          enhancing_totems: 0,
          shamanistic_focus: 0,
          anticipation: 0,
          flurry: 0,
          toughness: 0,
          improved_weapon_totems: 0,
          spirit_weapons: 0,
          elemental_weapons: 0,
          mental_quickness: 0,
          weapon_mastery: 0,
          weapon_specialization: 0,
          primal_wielding: 0,
          stormstrike: 0,
          unleashed_rage: 0,
          shamanistic_rage: 0,
        },
        restoration: {
          improved_healing_wave: 0,
          tidal_focus: 0,
          improved_reincarnation: 0,
          ancestral_healing: 0,
          totemic_focus: 0,
          natures_guidance: 0,
          healing_focus: 0,
          totemic_mastery: 0,
          healing_grace: 0,
          restorative_totems: 0,
          tidal_mastery: 0,
          healing_way: 0,
          natures_swiftness: 0,
          focused_mind: 0,
          purification: 0,
          mana_tide_totem: 0,
          natures_guardian: 0,
          natures_blessing: 0,
          improved_chain_heal: 0,
          earth_shield: 0,
        },
      },
    }
  },
  mounted() {
    const url = window.location.href.split('/')
    let trees = false
    if (url.length === 6 && url[5] !== '') {
      trees = url[5].split('a')
      Object.keys(this.model.elemental).forEach((item, index) => {
        this.model.elemental[item] = parseInt(trees[0][index])
      })
      Object.keys(this.model.enhancement).forEach((item, index) => {
        this.model.enhancement[item] = parseInt(trees[1][index])
      })
      Object.keys(this.model.restoration).forEach((item, index) => {
        this.model.restoration[item] = parseInt(trees[2][index])
      })
    }
  },
  computed: {
    restoration() {
      return restoration
    },
    elemental() {
      return elemental
    },
    enhancement() {
      return enhancement
    },
    currentStore() {
      return useCurrentStore()
    },
    shareLink() {
      let str =
        Object.values(this.model.elemental).join('') +
        'a' +
        Object.values(this.model.enhancement).join('') +
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
        let elemental = Object.values(n.elemental).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)

        let enhancement = Object.values(n.enhancement).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)

        let restoration = Object.values(n.restoration).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)

        this.elemental_total = elemental
        this.enhancement_total = enhancement
        this.restoration_total = restoration
        this.total = elemental + enhancement + restoration
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
      name="shaman"
      spec="elemental"
      :total="elemental_total"
      :image="pathPart() + 'shaman/background-shaman-elemental.avif'"
      :icon="pathPart() + 'spell_nature_lightning.webp'"
      @reset="resetTree($event)"
    >
      <div></div>
      <TalentNode
        v-model="model.elemental.convection"
        v-bind="elemental.convection"
        name="convection"
        :total="elemental_total"
        spec="shaman.elemental"
      />
      <TalentNode
        v-model="model.elemental.concussion"
        v-bind="elemental.concussion"
        name="concussion"
        :total="elemental_total"
        spec="shaman.elemental"
      />
      <div></div>

      <TalentNode
        v-model="model.elemental.earths_grasp"
        v-bind="elemental.earths_grasp"
        name="earths_grasp"
        :total="elemental_total"
        spec="shaman.elemental"
      />
      <TalentNode
        v-model="model.elemental.elemental_warding"
        v-bind="elemental.elemental_warding"
        name="elemental_warding"
        :total="elemental_total"
        spec="shaman.elemental"
      />
      <TalentNode
        v-model="model.elemental.call_of_flame"
        v-bind="elemental.call_of_flame"
        name="call_of_flame"
        :total="elemental_total"
        spec="shaman.elemental"
      />
      <div></div>

      <TalentNode
        v-model="model.elemental.elemental_focus"
        v-bind="elemental.elemental_focus"
        name="elemental_focus"
        :total="elemental_total"
        spec="shaman.elemental"
      />
      <TalentNode
        v-model="model.elemental.reverbaration"
        v-bind="elemental.reverbaration"
        name="reverbaration"
        :total="elemental_total"
        spec="shaman.elemental"
      />
      <TalentNode
        v-model="model.elemental.fire_and_lightning_mastery"
        v-bind="elemental.fire_and_lightning_mastery"
        name="fire_and_lightning_mastery"
        :total="elemental_total"
        spec="shaman.elemental"
      />
      <Arrow from="fire_and_lightning_mastery" to="call_of_thunder" tree="tree_elemental" />
      <div></div>

      <TalentNode
        v-model="model.elemental.improved_fire_totems"
        v-bind="elemental.improved_fire_totems"
        name="improved_fire_totems"
        :total="elemental_total"
        spec="shaman.elemental"
      />
      <TalentNode
        v-model="model.elemental.rolling_thunder"
        v-bind="elemental.rolling_thunder"
        name="rolling_thunder"
        :total="elemental_total"
        spec="shaman.elemental"
      />
      <div></div>
      <TalentNode
        v-model="model.elemental.elemental_devastation"
        v-bind="elemental.elemental_devastation"
        name="elemental_devastation"
        :total="elemental_total"
        spec="shaman.elemental"
      />

      <TalentNode
        v-model="model.elemental.storm_reach"
        v-bind="elemental.storm_reach"
        name="storm_reach"
        :total="elemental_total"
        spec="shaman.elemental"
      />
      <TalentNode
        v-model="model.elemental.elemental_fury"
        v-bind="elemental.elemental_fury"
        name="elemental_fury"
        :total="elemental_total"
        spec="shaman.elemental"
      />
      <Arrow from="elemental_fury" to="elemental_mastery" tree="tree_elemental" />
      <div></div>
      <TalentNode
        v-model="model.elemental.unrelenting_storm"
        v-bind="elemental.unrelenting_storm"
        name="unrelenting_storm"
        :total="elemental_total"
        spec="shaman.elemental"
      />

      <TalentNode
        v-model="model.elemental.elemental_precision"
        v-bind="elemental.elemental_precision"
        name="elemental_precision"
        :total="elemental_total"
        spec="shaman.elemental"
      />
      <div></div>
      <TalentNode
        v-model="model.elemental.call_of_thunder"
        v-bind="elemental.call_of_thunder"
        name="call_of_thunder"
        :total="elemental_total"
        spec="shaman.elemental"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.elemental.elemental_mastery"
        v-bind="elemental.elemental_mastery"
        name="elemental_mastery"
        :total="elemental_total"
        spec="shaman.elemental"
      />
      <TalentNode
        v-model="model.elemental.elemental_shields"
        v-bind="elemental.elemental_shields"
        name="elemental_shields"
        :total="elemental_total"
        spec="shaman.elemental"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.elemental.elemental_overload"
        v-bind="elemental.elemental_overload"
        name="elemental_overload"
        :total="elemental_total"
        spec="shaman.elemental"
      />
      <Arrow from="elemental_overload" to="totem_of_wrath" tree="tree_elemental" />
      <div></div>
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.elemental.totem_of_wrath"
        v-bind="elemental.totem_of_wrath"
        name="totem_of_wrath"
        :total="elemental_total"
        spec="shaman.elemental"
      />
      <div></div>
      <div></div>
    </BaseTree>

    <BaseTree
      name="shaman"
      spec="enhancement"
      :total="enhancement_total"
      :image="pathPart() + 'shaman/background-shaman-enhancement.avif'"
      :icon="pathPart() + 'spell_nature_lightningshield.webp'"
      @reset="resetTree($event)"
    >
      <div></div>
      <TalentNode
        v-model="model.enhancement.ancestral_knowledge"
        v-bind="enhancement.ancestral_knowledge"
        name="ancestral_knowledge"
        :total="enhancement_total"
        spec="shaman.enhancement"
      />
      <TalentNode
        v-model="model.enhancement.shield_specialization"
        v-bind="enhancement.shield_specialization"
        name="shield_specialization"
        :total="enhancement_total"
        spec="shaman.enhancement"
      />
      <div></div>

      <TalentNode
        v-model="model.enhancement.guardian_totems"
        v-bind="enhancement.guardian_totems"
        name="guardian_totems"
        :total="enhancement_total"
        spec="shaman.enhancement"
      />
      <TalentNode
        v-model="model.enhancement.thundering_strikes"
        v-bind="enhancement.thundering_strikes"
        name="thundering_strikes"
        :total="enhancement_total"
        spec="shaman.enhancement"
      />
      <Arrow from="thundering_strikes" to="flurry" tree="tree_enhancement" />
      <TalentNode
        v-model="model.enhancement.improved_ghost_wolf"
        v-bind="enhancement.improved_ghost_wolf"
        name="improved_ghost_wolf"
        :total="enhancement_total"
        spec="shaman.enhancement"
      />
      <TalentNode
        v-model="model.enhancement.improved_lightning_shield"
        v-bind="enhancement.improved_lightning_shield"
        name="improved_lightning_shield"
        :total="enhancement_total"
        spec="shaman.enhancement"
      />

      <TalentNode
        v-model="model.enhancement.enhancing_totems"
        v-bind="enhancement.enhancing_totems"
        name="enhancing_totems"
        :total="enhancement_total"
        spec="shaman.enhancement"
      />
      <div></div>
      <TalentNode
        v-model="model.enhancement.shamanistic_focus"
        v-bind="enhancement.shamanistic_focus"
        name="shamanistic_focus"
        :total="enhancement_total"
        spec="shaman.enhancement"
      />
      <TalentNode
        v-model="model.enhancement.anticipation"
        v-bind="enhancement.anticipation"
        name="anticipation"
        :total="enhancement_total"
        spec="shaman.enhancement"
      />

      <div></div>
      <TalentNode
        v-model="model.enhancement.flurry"
        v-bind="enhancement.flurry"
        name="flurry"
        :total="enhancement_total"
        spec="shaman.enhancement"
      />
      <TalentNode
        v-model="model.enhancement.toughness"
        v-bind="enhancement.toughness"
        name="toughness"
        :total="enhancement_total"
        spec="shaman.enhancement"
      />
      <div></div>

      <TalentNode
        v-model="model.enhancement.improved_weapon_totems"
        v-bind="enhancement.improved_weapon_totems"
        name="improved_weapon_totems"
        :total="enhancement_total"
        spec="shaman.enhancement"
      />
      <TalentNode
        v-model="model.enhancement.spirit_weapons"
        v-bind="enhancement.spirit_weapons"
        name="spirit_weapons"
        :total="enhancement_total"
        spec="shaman.enhancement"
      />
      <Arrow from="spirit_weapons" to="primal_wielding" tree="tree_enhancement" />
      <TalentNode
        v-model="model.enhancement.elemental_weapons"
        v-bind="enhancement.elemental_weapons"
        name="elemental_weapons"
        :total="enhancement_total"
        spec="shaman.enhancement"
      />
      <Arrow from="elemental_weapons" to="stormstrike" tree="tree_enhancement" />
      <div></div>

      <TalentNode
        v-model="model.enhancement.mental_quickness"
        v-bind="enhancement.mental_quickness"
        name="mental_quickness"
        :total="enhancement_total"
        spec="shaman.enhancement"
      />
      <div></div>
      <div></div>
      <TalentNode
        v-model="model.enhancement.weapon_mastery"
        v-bind="enhancement.weapon_mastery"
        name="weapon_mastery"
        :total="enhancement_total"
        spec="shaman.enhancement"
      />

      <TalentNode
        v-model="model.enhancement.weapon_specialization"
        v-bind="enhancement.weapon_specialization"
        name="weapon_specialization"
        :total="enhancement_total"
        spec="shaman.enhancement"
      />
      <TalentNode
        v-model="model.enhancement.primal_wielding"
        v-bind="enhancement.primal_wielding"
        name="primal_wielding"
        :total="enhancement_total"
        spec="shaman.enhancement"
      />
      <LeftArrow from="primal_wielding" to="weapon_specialization" tree="tree_enhancement" />
      <TalentNode
        v-model="model.enhancement.stormstrike"
        v-bind="enhancement.stormstrike"
        name="stormstrike"
        :total="enhancement_total"
        spec="shaman.enhancement"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.enhancement.unleashed_rage"
        v-bind="enhancement.unleashed_rage"
        name="unleashed_rage"
        :total="enhancement_total"
        spec="shaman.enhancement"
      />
      <div></div>
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.enhancement.shamanistic_rage"
        v-bind="enhancement.shamanistic_rage"
        name="shamanistic_rage"
        :total="enhancement_total"
        spec="shaman.enhancement"
      />
      <div></div>
      <div></div>
    </BaseTree>

    <BaseTree
      name="shaman"
      spec="restoration"
      :total="restoration_total"
      :image="pathPart() + 'shaman/background-shaman-restoration.avif'"
      :icon="pathPart() + 'spell_nature_magicimmunity.webp'"
      @reset="resetTree($event)"
    >
      <div></div>
      <TalentNode
        v-model="model.restoration.improved_healing_wave"
        v-bind="restoration.improved_healing_wave"
        name="improved_healing_wave"
        :total="restoration_total"
        spec="shaman.restoration"
      />
      <TalentNode
        v-model="model.restoration.tidal_focus"
        v-bind="restoration.tidal_focus"
        name="tidal_focus"
        :total="restoration_total"
        spec="shaman.restoration"
      />
      <div></div>

      <TalentNode
        v-model="model.restoration.improved_reincarnation"
        v-bind="restoration.improved_reincarnation"
        name="improved_reincarnation"
        :total="restoration_total"
        spec="shaman.restoration"
      />
      <TalentNode
        v-model="model.restoration.ancestral_healing"
        v-bind="restoration.ancestral_healing"
        name="ancestral_healing"
        :total="restoration_total"
        spec="shaman.restoration"
      />
      <TalentNode
        v-model="model.restoration.totemic_focus"
        v-bind="restoration.totemic_focus"
        name="totemic_focus"
        :total="restoration_total"
        spec="shaman.restoration"
      />
      <div></div>

      <TalentNode
        v-model="model.restoration.natures_guidance"
        v-bind="restoration.natures_guidance"
        name="natures_guidance"
        :total="restoration_total"
        spec="shaman.restoration"
      />
      <TalentNode
        v-model="model.restoration.healing_focus"
        v-bind="restoration.healing_focus"
        name="healing_focus"
        :total="restoration_total"
        spec="shaman.restoration"
      />
      <TalentNode
        v-model="model.restoration.totemic_mastery"
        v-bind="restoration.totemic_mastery"
        name="totemic_mastery"
        :total="restoration_total"
        spec="shaman.restoration"
      />
      <TalentNode
        v-model="model.restoration.healing_grace"
        v-bind="restoration.healing_grace"
        name="healing_grace"
        :total="restoration_total"
        spec="shaman.restoration"
      />

      <div></div>
      <TalentNode
        v-model="model.restoration.restorative_totems"
        v-bind="restoration.restorative_totems"
        name="restorative_totems"
        :total="restoration_total"
        spec="shaman.restoration"
      />
      <Arrow from="restorative_totems" to="mana_tide_totem" tree="tree_restoration" />
      <TalentNode
        v-model="model.restoration.tidal_mastery"
        v-bind="restoration.tidal_mastery"
        name="tidal_mastery"
        :total="restoration_total"
        spec="shaman.restoration"
      />
      <div></div>

      <TalentNode
        v-model="model.restoration.healing_way"
        v-bind="restoration.healing_way"
        name="healing_way"
        :total="restoration_total"
        spec="shaman.restoration"
      />
      <div></div>
      <TalentNode
        v-model="model.restoration.natures_swiftness"
        v-bind="restoration.natures_swiftness"
        name="natures_swiftness"
        :total="restoration_total"
        spec="shaman.restoration"
      />
      <TalentNode
        v-model="model.restoration.focused_mind"
        v-bind="restoration.focused_mind"
        name="focused_mind"
        :total="restoration_total"
        spec="shaman.restoration"
      />

      <div></div>
      <div></div>
      <TalentNode
        v-model="model.restoration.purification"
        v-bind="restoration.purification"
        name="purification"
        :total="restoration_total"
        spec="shaman.restoration"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.restoration.mana_tide_totem"
        v-bind="restoration.mana_tide_totem"
        name="mana_tide_totem"
        :total="restoration_total"
        spec="shaman.restoration"
      />
      <TalentNode
        v-model="model.restoration.natures_guardian"
        v-bind="restoration.natures_guardian"
        name="natures_guardian"
        :total="restoration_total"
        spec="shaman.restoration"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.restoration.natures_blessing"
        v-bind="restoration.natures_blessing"
        name="natures_blessing"
        :total="restoration_total"
        spec="shaman.restoration"
      />
      <Arrow from="natures_blessing" to="earth_shield" tree="tree_restoration" />
      <TalentNode
        v-model="model.restoration.improved_chain_heal"
        v-bind="restoration.improved_chain_heal"
        name="improved_chain_heal"
        :total="restoration_total"
        spec="shaman.restoration"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.restoration.earth_shield"
        v-bind="restoration.earth_shield"
        name="earth_shield"
        :total="restoration_total"
        spec="shaman.restoration"
      />
      <div></div>
      <div></div>
    </BaseTree>
  </ClassView>
</template>
