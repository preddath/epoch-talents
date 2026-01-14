<script>
import ClassView from '@base/ClassView.vue'
import { useCurrentStore } from '@src/stores/current.js'
import { resetTotal, resetTree, share } from '@src/ClassModule.js'
import { pathPart } from '@src/enviroment.js'
import { arcane } from '@classes/mage/arcane.js'
import { fire } from '@classes/mage/fire.js'
import { frost } from '@classes/mage/frost.js'
import BaseTree from '@base/BaseTree.vue'
import TalentNode from '@base/TalentNode.vue'
import Arrow from '@base/Arrow.vue'
import RightArrow from '@base/RightArrow.vue'

export default {
  name: 'MageView',
  components: { RightArrow, Arrow, TalentNode, BaseTree, ClassView },

  data() {
    return {
      total: 0,
      arcane_total: 0,
      fire_total: 0,
      frost_total: 0,
      model: {
        arcane: {
          arcane_subtlety: 0,
          arcane_focus: 0,
          improved_arcane_missiles: 0,
          wand_specialization: 0,
          magic_absorption: 0,
          arcane_concentration: 0,
          magic_attunement: 0,
          arcane_impact: 0,
          arcane_blast: 0,
          improved_shielding: 0,
          improved_counterspell: 0,
          arcane_meditation: 0,
          improved_arcane_intellect: 0,
          presence_of_mind: 0,
          arcane_mind: 0,
          prismatic_cloak: 0,
          arcane_instability: 0,
          arcane_potency: 0,
          empowered_arcane_missiles: 0,
          arcane_power: 0,
          spell_power: 0,
          mind_mastery: 0,
          slow: 0,
        },
        fire: {
          improved_fireball: 0,
          impact: 0,
          ignite: 0,
          flame_throwing: 0,
          improved_blasting: 0,
          incineration: 0,
          improved_flamestrike: 0,
          pyroblast: 0,
          burning_soul: 0,
          improved_scorch: 0,
          molten_shields: 0,
          master_of_schools: 0,
          playing_with_fire: 0,
          critical_mass: 0,
          blast_wave: 0,
          pyroclastic_burst: 0,
          blazing_speed: 0,
          fire_power: 0,
          pyromaniac: 0,
          combustion: 0,
          molten_fury: 0,
          empowered_fireball: 0,
          dragons_breath: 0,
        },
        frost: {
          frost_warding: 0,
          improved_frostbolt: 0,
          elemental_precision: 0,
          ice_shards: 0,
          frostbite: 0,
          improved_frost_nova: 0,
          permafrost: 0,
          piercing_ice: 0,
          icy_veins: 0,
          improved_blizzard: 0,
          arctic_reach: 0,
          frost_channeling: 0,
          shatter: 0,
          frozen_core: 0,
          cold_snap: 0,
          improved_cone_of_cold: 0,
          ice_floes: 0,
          winters_chill: 0,
          ice_barrier: 0,
          arctic_winds: 0,
          empowered_frostbolt: 0,
          summon_water_elemental: 0,
        },
      },
    }
  },

  mounted() {
    const url = window.location.href.split('/')
    let trees = false
    if (url.length === 6 && url[5] !== '') {
      trees = url[5].split('a')
      Object.keys(this.model.arcane).forEach((item, index) => {
        this.model.arcane[item] = parseInt(trees[0][index])
      })
      Object.keys(this.model.fire).forEach((item, index) => {
        this.model.fire[item] = parseInt(trees[1][index])
      })
      Object.keys(this.model.frost).forEach((item, index) => {
        this.model.frost[item] = parseInt(trees[2][index])
      })
    }
  },
  computed: {
    arcane() {
      return arcane
    },
    fire() {
      return fire
    },
    frost() {
      return frost
    },
    currentStore() {
      return useCurrentStore()
    },
    shareLink() {
      let str =
        Object.values(this.model.arcane).join('') +
        'a' +
        Object.values(this.model.fire).join('') +
        'a' +
        Object.values(this.model.frost).join('')
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
        let arcane = Object.values(n.arcane).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)

        let fire = Object.values(n.fire).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)

        let frost = Object.values(n.frost).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)

        this.arcane_total = arcane
        this.fire_total = fire
        this.frost_total = frost
        this.total = arcane + fire + frost
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
      name="mage"
      spec="arcane"
      :total="arcane_total"
      :image="pathPart() + 'mage/background-mage-arcane.avif'"
      :icon="pathPart() + 'spell_holy_magicalsentry.webp'"
      @reset="resetTree($event)"
    >
      <TalentNode
        v-model="model.arcane.arcane_subtlety"
        v-bind="arcane.arcane_subtlety"
        name="arcane_subtlety"
        spec="mage.arcane"
      />
      <TalentNode
        v-model="model.arcane.arcane_focus"
        v-bind="arcane.arcane_focus"
        name="arcane_focus"
        spec="mage.arcane"
      />
      <TalentNode
        v-model="model.arcane.improved_arcane_missiles"
        v-bind="arcane.improved_arcane_missiles"
        name="improved_arcane_missiles"
        spec="mage.arcane"
      />
      <div></div>

      <TalentNode
        v-model="model.arcane.wand_specialization"
        v-bind="arcane.wand_specialization"
        name="wand_specialization"
        spec="mage.arcane"
      />
      <TalentNode
        v-model="model.arcane.magic_absorption"
        v-bind="arcane.magic_absorption"
        name="magic_absorption"
        spec="mage.arcane"
      />
      <TalentNode
        v-model="model.arcane.arcane_concentration"
        v-bind="arcane.arcane_concentration"
        name="arcane_concentration"
        spec="mage.arcane"
      />
      <div></div>

      <TalentNode
        v-model="model.arcane.magic_attunement"
        v-bind="arcane.magic_attunement"
        name="magic_attunement"
        spec="mage.arcane"
      />
      <TalentNode
        v-model="model.arcane.arcane_impact"
        v-bind="arcane.arcane_impact"
        name="arcane_impact"
        spec="mage.arcane"
      />
      <div></div>
      <TalentNode
        v-model="model.arcane.arcane_blast"
        v-bind="arcane.arcane_blast"
        name="arcane_blast"
        spec="mage.arcane"
      />

      <TalentNode
        v-model="model.arcane.improved_shielding"
        v-bind="arcane.improved_shielding"
        name="improved_shielding"
        spec="mage.arcane"
      />
      <TalentNode
        v-model="model.arcane.improved_counterspell"
        v-bind="arcane.improved_counterspell"
        name="improved_counterspell"
        spec="mage.arcane"
      />
      <div></div>
      <TalentNode
        v-model="model.arcane.arcane_meditation"
        v-bind="arcane.arcane_meditation"
        name="arcane_meditation"
        spec="mage.arcane"
      />

      <TalentNode
        v-model="model.arcane.improved_arcane_intellect"
        v-bind="arcane.improved_arcane_intellect"
        name="improved_arcane_intellect"
        spec="mage.arcane"
      />
      <TalentNode
        v-model="model.arcane.presence_of_mind"
        v-bind="arcane.presence_of_mind"
        name="presence_of_mind"
        spec="mage.arcane"
      />
      <div></div>
      <TalentNode
        v-model="model.arcane.arcane_mind"
        v-bind="arcane.arcane_mind"
        name="arcane_mind"
        spec="mage.arcane"
      />

      <TalentNode
        v-model="model.arcane.prismatic_cloak"
        v-bind="arcane.prismatic_cloak"
        name="prismatic_cloak"
        spec="mage.arcane"
      />
      <TalentNode
        v-model="model.arcane.arcane_instability"
        v-bind="arcane.arcane_instability"
        name="arcane_instability"
        spec="mage.arcane"
      />
      <TalentNode
        v-model="model.arcane.arcane_potency"
        v-bind="arcane.arcane_potency"
        name="arcane_potency"
        spec="mage.arcane"
      />
      <div></div>

      <TalentNode
        v-model="model.arcane.empowered_arcane_missiles"
        v-bind="arcane.empowered_arcane_missiles"
        name="empowered_arcane_missiles"
        spec="mage.arcane"
      />
      <TalentNode
        v-model="model.arcane.arcane_power"
        v-bind="arcane.arcane_power"
        name="arcane_power"
        spec="mage.arcane"
      />
      <TalentNode
        v-model="model.arcane.spell_power"
        v-bind="arcane.spell_power"
        name="spell_power"
        spec="mage.arcane"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.arcane.mind_mastery"
        v-bind="arcane.mind_mastery"
        name="mind_mastery"
        spec="mage.arcane"
      />
      <div></div>
      <div></div>

      <div></div>
      <TalentNode v-model="model.arcane.slow" v-bind="arcane.slow" name="slow" spec="mage.arcane" />
      <div></div>
      <div></div>
    </BaseTree>

    <BaseTree
      name="mage"
      spec="fire"
      :total="fire_total"
      :image="pathPart() + 'mage/background-mage-fire.avif'"
      :icon="pathPart() + 'spell_fire_flamebolt.webp'"
      @reset="resetTree($event)"
    >
      <div></div>
      <TalentNode
        v-model="model.fire.improved_fireball"
        v-bind="fire.improved_fireball"
        name="improved_fireball"
        spec="mage.fire"
      />
      <TalentNode v-model="model.fire.impact" v-bind="fire.impact" name="impact" spec="mage.fire" />
      <div></div>

      <TalentNode v-model="model.fire.ignite" v-bind="fire.ignite" name="ignite" spec="mage.fire" />
      <TalentNode
        v-model="model.fire.flame_throwing"
        v-bind="fire.flame_throwing"
        name="flame_throwing"
        spec="mage.fire"
      />
      <TalentNode
        v-model="model.fire.improved_blasting"
        v-bind="fire.improved_blasting"
        name="improved_blasting"
        spec="mage.fire"
      />
      <div></div>

      <TalentNode
        v-model="model.fire.incineration"
        v-bind="fire.incineration"
        name="incineration"
        spec="mage.fire"
      />
      <TalentNode
        v-model="model.fire.improved_flamestrike"
        v-bind="fire.improved_flamestrike"
        name="improved_flamestrike"
        spec="mage.fire"
      />
      <TalentNode
        v-model="model.fire.pyroblast"
        v-bind="fire.pyroblast"
        name="pyroblast"
        spec="mage.fire"
      />
      <TalentNode
        v-model="model.fire.burning_soul"
        v-bind="fire.burning_soul"
        name="burning_soul"
        spec="mage.fire"
      />

      <TalentNode
        v-model="model.fire.improved_scorch"
        v-bind="fire.improved_scorch"
        name="improved_scorch"
        spec="mage.fire"
      />
      <TalentNode
        v-model="model.fire.molten_shields"
        v-bind="fire.molten_shields"
        name="molten_shields"
        spec="mage.fire"
      />
      <div></div>
      <TalentNode
        v-model="model.fire.master_of_schools"
        v-bind="fire.master_of_schools"
        name="master_of_schools"
        spec="mage.fire"
      />

      <TalentNode
        v-model="model.fire.playing_with_fire"
        v-bind="fire.playing_with_fire"
        name="playing_with_fire"
        spec="mage.fire"
      />
      <TalentNode
        v-model="model.fire.critical_mass"
        v-bind="fire.critical_mass"
        name="critical_mass"
        spec="mage.fire"
      />
      <TalentNode
        v-model="model.fire.blast_wave"
        v-bind="fire.blast_wave"
        name="blast_wave"
        spec="mage.fire"
      />
      <TalentNode
        v-model="model.fire.pyroclastic_burst"
        v-bind="fire.pyroclastic_burst"
        name="pyroclastic_burst"
        spec="mage.fire"
      />

      <TalentNode
        v-model="model.fire.blazing_speed"
        v-bind="fire.blazing_speed"
        name="blazing_speed"
        spec="mage.fire"
      />
      <div></div>
      <TalentNode
        v-model="model.fire.fire_power"
        v-bind="fire.fire_power"
        name="fire_power"
        spec="mage.fire"
      />
      <div></div>

      <TalentNode
        v-model="model.fire.pyromaniac"
        v-bind="fire.pyromaniac"
        name="pyromaniac"
        spec="mage.fire"
      />
      <div></div>
      <TalentNode
        v-model="model.fire.combustion"
        v-bind="fire.combustion"
        name="combustion"
        spec="mage.fire"
      />
      <TalentNode
        v-model="model.fire.molten_fury"
        v-bind="fire.molten_fury"
        name="molten_fury"
        spec="mage.fire"
      />

      <div></div>
      <div></div>
      <TalentNode
        v-model="model.fire.empowered_fireball"
        v-bind="fire.empowered_fireball"
        name="empowered_fireball"
        spec="mage.fire"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.fire.dragons_breath"
        v-bind="fire.dragons_breath"
        name="dragons_breath"
        spec="mage.fire"
      />
      <div></div>
      <div></div>
    </BaseTree>

    <BaseTree
      name="mage"
      spec="frost"
      :total="frost_total"
      :image="pathPart() + 'mage/background-mage-frost.avif'"
      :icon="pathPart() + 'spell_frost_frostbolt02.webp'"
      @reset="resetTree($event)"
    >
      <TalentNode
        v-model="model.frost.frost_warding"
        v-bind="frost.frost_warding"
        name="frost_warding"
        spec="mage.frost"
      />
      <TalentNode
        v-model="model.frost.improved_frostbolt"
        v-bind="frost.improved_frostbolt"
        name="improved_frostbolt"
        spec="mage.frost"
      />
      <TalentNode
        v-model="model.frost.elemental_precision"
        v-bind="frost.elemental_precision"
        name="elemental_precision"
        spec="mage.frost"
      />
      <div></div>

      <TalentNode
        v-model="model.frost.ice_shards"
        v-bind="frost.ice_shards"
        name="ice_shards"
        spec="mage.frost"
      />
      <TalentNode
        v-model="model.frost.frostbite"
        v-bind="frost.frostbite"
        name="frostbite"
        spec="mage.frost"
      />
      <TalentNode
        v-model="model.frost.improved_frost_nova"
        v-bind="frost.improved_frost_nova"
        name="improved_frost_nova"
        spec="mage.frost"
      />
      <TalentNode
        v-model="model.frost.permafrost"
        v-bind="frost.permafrost"
        name="permafrost"
        spec="mage.frost"
      />

      <TalentNode
        v-model="model.frost.piercing_ice"
        v-bind="frost.piercing_ice"
        name="piercing_ice"
        spec="mage.frost"
      />
      <TalentNode
        v-model="model.frost.icy_veins"
        v-bind="frost.icy_veins"
        name="icy_veins"
        spec="mage.frost"
      />
      <div></div>
      <TalentNode
        v-model="model.frost.improved_blizzard"
        v-bind="frost.improved_blizzard"
        name="improved_blizzard"
        spec="mage.frost"
      />

      <TalentNode
        v-model="model.frost.arctic_reach"
        v-bind="frost.arctic_reach"
        name="arctic_reach"
        spec="mage.frost"
      />
      <TalentNode
        v-model="model.frost.frost_channeling"
        v-bind="frost.frost_channeling"
        name="frost_channeling"
        spec="mage.frost"
      />
      <TalentNode
        v-model="model.frost.shatter"
        v-bind="frost.shatter"
        name="shatter"
        spec="mage.frost"
      />
      <div></div>

      <TalentNode
        v-model="model.frost.frozen_core"
        v-bind="frost.frozen_core"
        name="frozen_core"
        spec="mage.frost"
      />
      <TalentNode
        v-model="model.frost.cold_snap"
        v-bind="frost.cold_snap"
        name="cold_snap"
        spec="mage.frost"
      />
      <TalentNode
        v-model="model.frost.improved_cone_of_cold"
        v-bind="frost.improved_cone_of_cold"
        name="improved_cone_of_cold"
        spec="mage.frost"
      />
      <div></div>

      <TalentNode
        v-model="model.frost.ice_floes"
        v-bind="frost.ice_floes"
        name="ice_floes"
        spec="mage.frost"
      />
      <div></div>
      <TalentNode
        v-model="model.frost.winters_chill"
        v-bind="frost.winters_chill"
        name="winters_chill"
        spec="mage.frost"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.frost.ice_barrier"
        v-bind="frost.ice_barrier"
        name="ice_barrier"
        spec="mage.frost"
      />
      <TalentNode
        v-model="model.frost.arctic_winds"
        v-bind="frost.arctic_winds"
        name="arctic_winds"
        spec="mage.frost"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.frost.empowered_frostbolt"
        v-bind="frost.empowered_frostbolt"
        name="empowered_frostbolt"
        spec="mage.frost"
      />
      <div></div>
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.frost.summon_water_elemental"
        v-bind="frost.summon_water_elemental"
        name="summon_water_elemental"
        spec="mage.frost"
      />
      <div></div>
      <div></div>
    </BaseTree>
  </ClassView>
</template>
