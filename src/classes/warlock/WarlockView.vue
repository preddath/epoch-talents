<script>
import { affliction } from '@classes/warlock/affliction.js'
import { pathPart } from '@src/enviroment.js'
import ClassView from '@base/ClassView.vue'
import BaseTree from '@base/BaseTree.vue'
import TalentNode from '@base/TalentNode.vue'
import { demonology } from '@classes/warlock/demonology.js'
import Arrow from '@base/Arrow.vue'
import RightArrow from '@base/RightArrow.vue'
import LeftArrow from '@base/LeftArrow.vue'
import { destruction } from '@classes/warlock/destruction.js'
import { useCurrentStore } from '@src/stores/current.js'
import { resetTotal, resetTree, share } from '@src/ClassModule.js'

export default {
  name: 'WarlockView',
  components: { LeftArrow, HorizontalArrow: RightArrow, Arrow, TalentNode, BaseTree, ClassView },

  data() {
    return {
      total: 0,
      affliction_total: 0,
      demonology_total: 0,
      destruction_total: 0,
      model: {
        affliction: {
          suppression: 0,
          improved_corruption: 0,
          improved_curse_of_weakness: 0,
          improved_drain_soul: 0,
          improved_life_tap: 0,
          soul_siphon: 0,
          improved_bane_of_agony: 0,
          fel_concentration: 0,
          amplify_bane: 0,
          grim_reach: 0,
          nightfall: 0,
          empowered_corruption: 0,
          shadow_embrace: 0,
          siphon_life: 0,
          bane_of_exhaustion: 0,
          improved_shadow_bite: 0,
          shadow_mastery: 0,
          contagion: 0,
          dark_pact: 0,
          improved_howl_of_terror: 0,
          malediction: 0,
          unstable_affliction: 0,
        },
        demonology: {
          improved_healthstone: 0,
          improved_imp: 0,
          demonic_embrace: 0,
          improved_health_funnel: 0,
          improved_voidwalker: 0,
          fel_intellect: 0,
          improved_succubus: 0,
          fel_domination: 0,
          fel_stamina: 0,
          demonic_aegis: 0,
          master_summoner: 0,
          unholy_power: 0,
          improved_enslave_demon: 0,
          demonic_empowerment: 0,
          master_conjuror: 0,
          mana_feed: 0,
          master_demonologist: 0,
          demonic_resilience: 0,
          soul_link: 0,
          demonic_knowledge: 0,
          demonic_tactics: 0,
          summon_felguard: 0,
        },
        destruction: {
          improved_shadow_bolt: 0,
          cataclysm: 0,
          bane: 0,
          aftermath: 0,
          improved_firebolt: 0,
          improved_lash_of_pain: 0,
          devastation: 0,
          shadowburn: 0,
          intensity: 0,
          destructive_reach: 0,
          improved_searing_pain: 0,
          pyroclasm: 0,
          improved_immolate: 0,
          ruin: 0,
          shadowfury: 0,
          nether_protection: 0,
          emberstorm: 0,
          backlash: 0,
          conflagrate: 0,
          soul_leech: 0,
          shadow_and_flame: 0,
          demonic_sacrifice: 0,
        },
      },
    }
  },
  mounted() {
    const url = window.location.href.split('/')
    let trees = false
    if (url.length === 6 && url[5] !== '') {
      trees = url[5].split('a')
      Object.keys(this.model.affliction).forEach((item, index) => {
        this.model.affliction[item] = parseInt(trees[0][index])
      })
      Object.keys(this.model.demonology).forEach((item, index) => {
        this.model.demonology[item] = parseInt(trees[1][index])
      })
      Object.keys(this.model.destruction).forEach((item, index) => {
        this.model.destruction[item] = parseInt(trees[2][index])
      })
    }
  },
  computed: {
    destruction() {
      return destruction
    },
    affliction() {
      return affliction
    },
    demonology() {
      return demonology
    },
    currentStore() {
      return useCurrentStore()
    },
    shareLink() {
      let str =
        Object.values(this.model.affliction).join('') +
        'a' +
        Object.values(this.model.demonology).join('') +
        'a' +
        Object.values(this.model.destruction).join('')
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
        let affliction = Object.values(n.affliction).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)

        let demonology = Object.values(n.demonology).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)

        let destruction = Object.values(n.destruction).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)

        this.affliction_total = affliction
        this.demonology_total = demonology
        this.destruction_total = destruction
        this.total = affliction + demonology + destruction
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
      name="warlock"
      spec="affliction"
      :total="affliction_total"
      :image="pathPart() + 'warlock/background-warlock-affliction.avif'"
      :icon="pathPart() + 'spell_shadow_deathcoil.webp'"
      @reset="resetTree($event)"
    >
      <div></div>
      <TalentNode
        v-model="model.affliction.suppression"
        v-bind="affliction.suppression"
        name="suppression"
        spec="warlock.affliction"
      />
      <TalentNode
        v-model="model.affliction.improved_corruption"
        v-bind="affliction.improved_corruption"
        name="improved_corruption"
        spec="warlock.affliction"
      />
      <div></div>

      <TalentNode
        v-model="model.affliction.improved_curse_of_weakness"
        v-bind="affliction.improved_curse_of_weakness"
        name="improved_curse_of_weakness"
        spec="warlock.affliction"
      />
      <TalentNode
        v-model="model.affliction.improved_drain_soul"
        v-bind="affliction.improved_drain_soul"
        name="improved_drain_soul"
        spec="warlock.affliction"
      />
      <TalentNode
        v-model="model.affliction.improved_life_tap"
        v-bind="affliction.improved_life_tap"
        name="improved_life_tap"
        spec="warlock.affliction"
      />
      <TalentNode
        v-model="model.affliction.soul_siphon"
        v-bind="affliction.soul_siphon"
        name="soul_siphon"
        spec="warlock.affliction"
      />

      <TalentNode
        v-model="model.affliction.improved_bane_of_agony"
        v-bind="affliction.improved_bane_of_agony"
        name="improved_bane_of_agony"
        spec="warlock.affliction"
      />
      <TalentNode
        v-model="model.affliction.fel_concentration"
        v-bind="affliction.fel_concentration"
        name="fel_concentration"
        spec="warlock.affliction"
      />
      <TalentNode
        v-model="model.affliction.amplify_bane"
        v-bind="affliction.amplify_bane"
        name="amplify_bane"
        spec="warlock.affliction"
      />
      <Arrow from="amplify_bane" to="bane_of_exhaustion" tree="tree_affliction" />
      <div></div>

      <TalentNode
        v-model="model.affliction.grim_reach"
        v-bind="affliction.grim_reach"
        name="grim_reach"
        spec="warlock.affliction"
      />
      <TalentNode
        v-model="model.affliction.nightfall"
        v-bind="affliction.nightfall"
        name="nightfall"
        spec="warlock.affliction"
      />
      <div></div>
      <TalentNode
        v-model="model.affliction.empowered_corruption"
        v-bind="affliction.empowered_corruption"
        name="empowered_corruption"
        spec="warlock.affliction"
      />

      <TalentNode
        v-model="model.affliction.shadow_embrace"
        v-bind="affliction.shadow_embrace"
        name="shadow_embrace"
        spec="warlock.affliction"
      />
      <TalentNode
        v-model="model.affliction.siphon_life"
        v-bind="affliction.siphon_life"
        name="siphon_life"
        spec="warlock.affliction"
      />
      <Arrow from="siphon_life" to="shadow_mastery" tree="tree_affliction" />
      <TalentNode
        v-model="model.affliction.bane_of_exhaustion"
        v-bind="affliction.bane_of_exhaustion"
        name="bane_of_exhaustion"
        spec="warlock.affliction"
      />
      <TalentNode
        v-model="model.affliction.improved_shadow_bite"
        v-bind="affliction.improved_shadow_bite"
        name="improved_shadow_bite"
        spec="warlock.affliction"
      />

      <div></div>
      <TalentNode
        v-model="model.affliction.shadow_mastery"
        v-bind="affliction.shadow_mastery"
        name="shadow_mastery"
        spec="warlock.affliction"
      />
      <div></div>
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.affliction.contagion"
        v-bind="affliction.contagion"
        name="contagion"
        spec="warlock.affliction"
      />
      <Arrow from="contagion" to="unstable_affliction" tree="tree_affliction" />
      <TalentNode
        v-model="model.affliction.dark_pact"
        v-bind="affliction.dark_pact"
        name="dark_pact"
        spec="warlock.affliction"
      />
      <div></div>

      <TalentNode
        v-model="model.affliction.improved_howl_of_terror"
        v-bind="affliction.improved_howl_of_terror"
        name="improved_howl_of_terror"
        spec="warlock.affliction"
      />
      <div></div>
      <TalentNode
        v-model="model.affliction.malediction"
        v-bind="affliction.malediction"
        name="malediction"
        spec="warlock.affliction"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.affliction.unstable_affliction"
        v-bind="affliction.unstable_affliction"
        name="unstable_affliction"
        spec="warlock.affliction"
      />
      <div></div>
      <div></div>
    </BaseTree>

    <BaseTree
      name="warlock"
      spec="demonology"
      :total="demonology_total"
      :image="pathPart() + 'warlock/background-warlock-demonology.avif'"
      :icon="pathPart() + 'spell_shadow_metamorphosis.webp'"
      @reset="resetTree($event)"
    >
      <TalentNode
        v-model="model.demonology.improved_healthstone"
        v-bind="demonology.improved_healthstone"
        name="improved_healthstone"
        spec="warlock.demonology"
      />
      <TalentNode
        v-model="model.demonology.improved_imp"
        v-bind="demonology.improved_imp"
        name="improved_imp"
        spec="warlock.demonology"
      />
      <TalentNode
        v-model="model.demonology.demonic_embrace"
        v-bind="demonology.demonic_embrace"
        name="demonic_embrace"
        spec="warlock.demonology"
      />
      <div></div>

      <TalentNode
        v-model="model.demonology.improved_health_funnel"
        v-bind="demonology.improved_health_funnel"
        name="improved_health_funnel"
        spec="warlock.demonology"
      />
      <TalentNode
        v-model="model.demonology.improved_voidwalker"
        v-bind="demonology.improved_voidwalker"
        name="improved_voidwalker"
        spec="warlock.demonology"
      />
      <TalentNode
        v-model="model.demonology.fel_intellect"
        v-bind="demonology.fel_intellect"
        name="fel_intellect"
        spec="warlock.demonology"
      />
      <div></div>

      <TalentNode
        v-model="model.demonology.improved_succubus"
        v-bind="demonology.improved_succubus"
        name="improved_succubus"
        spec="warlock.demonology"
      />
      <TalentNode
        v-model="model.demonology.fel_domination"
        v-bind="demonology.fel_domination"
        name="fel_domination"
        spec="warlock.demonology"
      />
      <Arrow from="fel_domination" to="master_summoner" tree="tree_demonology" />
      <TalentNode
        v-model="model.demonology.fel_stamina"
        v-bind="demonology.fel_stamina"
        name="fel_stamina"
        spec="warlock.demonology"
      />
      <TalentNode
        v-model="model.demonology.demonic_aegis"
        v-bind="demonology.demonic_aegis"
        name="demonic_aegis"
        spec="warlock.demonology"
      />

      <div></div>
      <TalentNode
        v-model="model.demonology.master_summoner"
        v-bind="demonology.master_summoner"
        name="master_summoner"
        spec="warlock.demonology"
      />
      <TalentNode
        v-model="model.demonology.unholy_power"
        v-bind="demonology.unholy_power"
        name="unholy_power"
        spec="warlock.demonology"
      />
      <Arrow from="unholy_power" to="master_demonologist" tree="tree_demonology" />
      <div></div>

      <TalentNode
        v-model="model.demonology.improved_enslave_demon"
        v-bind="demonology.improved_enslave_demon"
        name="improved_enslave_demon"
        spec="warlock.demonology"
      />
      <TalentNode
        v-model="model.demonology.demonic_empowerment"
        v-bind="demonology.demonic_empowerment"
        name="demonic_empowerment"
        spec="warlock.demonology"
        sideded
      />
      <Arrow from="demonic_empowerment" to="soul_link" tree="tree_demonology" />
      <div></div>
      <TalentNode
        v-model="model.demonology.master_conjuror"
        v-bind="demonology.master_conjuror"
        name="master_conjuror"
        spec="warlock.demonology"
      />

      <TalentNode
        v-model="model.demonology.mana_feed"
        v-bind="demonology.mana_feed"
        name="mana_feed"
        spec="warlock.demonology"
      />
      <div></div>
      <TalentNode
        v-model="model.demonology.master_demonologist"
        v-bind="demonology.master_demonologist"
        name="master_demonologist"
        spec="warlock.demonology"
      />
      <div></div>

      <TalentNode
        v-model="model.demonology.demonic_resilience"
        v-bind="demonology.demonic_resilience"
        name="demonic_resilience"
        spec="warlock.demonology"
      />
      <TalentNode
        v-model="model.demonology.soul_link"
        v-bind="demonology.soul_link"
        name="soul_link"
        spec="warlock.demonology"
      />
      <TalentNode
        v-model="model.demonology.demonic_knowledge"
        v-bind="demonology.demonic_knowledge"
        name="demonic_knowledge"
        spec="warlock.demonology"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.demonology.demonic_tactics"
        v-bind="demonology.demonic_tactics"
        name="demonic_tactics"
        spec="warlock.demonology"
      />
      <div></div>
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.demonology.summon_felguard"
        v-bind="demonology.summon_felguard"
        name="summon_felguard"
        spec="warlock.demonology"
      />
      <div></div>
      <div></div>
    </BaseTree>

    <BaseTree
      name="warlock"
      spec="destruction"
      :total="destruction_total"
      :image="pathPart() + 'warlock/background-warlock-destruction.avif'"
      :icon="pathPart() + 'spell_shadow_rainoffire.webp'"
      @reset="resetTree($event)"
    >
      <div></div>
      <TalentNode
        v-model="model.destruction.improved_shadow_bolt"
        v-bind="destruction.improved_shadow_bolt"
        name="improved_shadow_bolt"
        spec="warlock.destruction"
      />
      <TalentNode
        v-model="model.destruction.cataclysm"
        v-bind="destruction.cataclysm"
        name="cataclysm"
        spec="warlock.destruction"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.destruction.bane"
        v-bind="destruction.bane"
        name="bane"
        spec="warlock.destruction"
      />
      <TalentNode
        v-model="model.destruction.aftermath"
        v-bind="destruction.aftermath"
        name="aftermath"
        spec="warlock.destruction"
      />
      <div></div>

      <TalentNode
        v-model="model.destruction.improved_firebolt"
        v-bind="destruction.improved_firebolt"
        name="improved_firebolt"
        spec="warlock.destruction"
      />
      <TalentNode
        v-model="model.destruction.improved_lash_of_pain"
        v-bind="destruction.improved_lash_of_pain"
        name="improved_lash_of_pain"
        spec="warlock.destruction"
      />
      <TalentNode
        v-model="model.destruction.devastation"
        v-bind="destruction.devastation"
        name="devastation"
        spec="warlock.destruction"
      />
      <Arrow from="devastation" to="ruin" tree="tree_destruction" />
      <TalentNode
        v-model="model.destruction.shadowburn"
        v-bind="destruction.shadowburn"
        name="shadowburn"
        spec="warlock.destruction"
      />

      <TalentNode
        v-model="model.destruction.intensity"
        v-bind="destruction.intensity"
        name="intensity"
        spec="warlock.destruction"
      />
      <TalentNode
        v-model="model.destruction.destructive_reach"
        v-bind="destruction.destructive_reach"
        name="destructive_reach"
        spec="warlock.destruction"
      />
      <div></div>
      <TalentNode
        v-model="model.destruction.improved_searing_pain"
        v-bind="destruction.improved_searing_pain"
        name="improved_searing_pain"
        spec="warlock.destruction"
      />

      <TalentNode
        v-model="model.destruction.pyroclasm"
        v-bind="destruction.pyroclasm"
        name="pyroclasm"
        spec="warlock.destruction"
      />
      <TalentNode
        v-model="model.destruction.improved_immolate"
        v-bind="destruction.improved_immolate"
        name="improved_immolate"
        spec="warlock.destruction"
      />
      <Arrow from="improved_immolate" to="conflagrate" tree="tree_destruction" />
      <TalentNode
        v-model="model.destruction.ruin"
        v-bind="destruction.ruin"
        name="ruin"
        spec="warlock.destruction"
      />
      <TalentNode
        v-model="model.destruction.shadowfury"
        v-bind="destruction.shadowfury"
        name="shadowfury"
        spec="warlock.destruction"
      />

      <TalentNode
        v-model="model.destruction.nether_protection"
        v-bind="destruction.nether_protection"
        name="nether_protection"
        spec="warlock.destruction"
      />
      <div></div>
      <TalentNode
        v-model="model.destruction.emberstorm"
        v-bind="destruction.emberstorm"
        name="emberstorm"
        spec="warlock.destruction"
      />
      <div></div>

      <TalentNode
        v-model="model.destruction.backlash"
        v-bind="destruction.backlash"
        name="backlash"
        spec="warlock.destruction"
      />
      <TalentNode
        v-model="model.destruction.conflagrate"
        v-bind="destruction.conflagrate"
        name="conflagrate"
        spec="warlock.destruction"
      />
      <TalentNode
        v-model="model.destruction.soul_leech"
        v-bind="destruction.soul_leech"
        name="soul_leech"
        spec="warlock.destruction"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.destruction.shadow_and_flame"
        v-bind="destruction.shadow_and_flame"
        name="shadow_and_flame"
        spec="warlock.destruction"
      />
      <Arrow from="shadow_and_flame" to="demonic_sacrifice" tree="tree_destruction" />
      <div></div>
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.destruction.demonic_sacrifice"
        v-bind="destruction.demonic_sacrifice"
        name="demonic_sacrifice"
        spec="warlock.destruction"
      />
      <div></div>
      <div></div>
    </BaseTree>
  </ClassView>
</template>
