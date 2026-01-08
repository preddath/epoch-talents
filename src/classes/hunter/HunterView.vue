<script>
import { resetTotal, resetTree, share } from '@src/ClassModule.js'
import { pathPart } from '@src/enviroment.js'
import { useCurrentStore } from '@src/stores/current.js'
import { beastmastery } from '@classes/hunter/beastmastery.js'
import { marksmanship } from '@classes/hunter/marksmanship.js'
import { survival } from '@classes/hunter/survival.js'
import ClassView from '@base/ClassView.vue'
import BaseTree from '@base/BaseTree.vue'
import TalentNode from '@base/TalentNode.vue'
import Arrow from '@base/Arrow.vue'

export default {
  name: 'HunterView',
  components: { Arrow, TalentNode, BaseTree, ClassView },

  data() {
    return {
      total: 0,
      beastmastery_total: 0,
      marksmanship_total: 0,
      survival_total: 0,
      model: {
        beastmastery: {
          improved_aspect_of_the_hawk: 0,
          endurance_training: 0,
          focused_fire: 0,
          improved_aspect_of_the_monkey: 0,
          thick_hide: 0,
          improved_revive_pet: 0,
          pathfinding: 0,
          bestial_swiftness: 0,
          unleashed_fury: 0,
          improved_mend_pet: 0,
          ferocity: 0,
          spirit_bond: 0,
          intimidation: 0,
          bestial_discipline: 0,
          animal_handler: 0,
          frenzy: 0,
          ferocious_inspiration: 0,
          bestial_wrath: 0,
          catlike_reflexes: 0,
          serpents_swiftness: 0,
          the_beast_within: 0,
        },
        marksmanship: {
          improved_concussive_shot: 0,
          lethal_shots: 0,
          improved_hunters_mark: 0,
          efficiency: 0,
          go_for_the_throat: 0,
          improved_arcane_shot: 0,
          aimed_shot: 0,
          rapid_killing: 0,
          improved_stings: 0,
          mortal_shots: 0,
          concussive_barrage: 0,
          scatter_shot: 0,
          barrage: 0,
          combats_experience: 0,
          ranged_weapon_specialization: 0,
          careful_aim: 0,
          silencing_shot: 0,
          improved_barrage: 0,
          master_marksman: 0,
          trueshot_aura: 0,
        },
        survival: {
          monster_slaying: 0,
          humanoid_slaying: 0,
          hawk_eye: 0,
          savage_strikes: 0,
          entrapment: 0,
          deflection: 0,
          improved_wing_clip: 0,
          clever_trap: 0,
          survivalist: 0,
          deterrence: 0,
          trap_mastery: 0,
          surefooted: 0,
          improved_feign_death: 0,
          survival_instincts: 0,
          killer_instinct: 0,
          counterattack: 0,
          resourcefulness: 0,
          lightning_reflexes: 0,
          thrill_of_the_hunt: 0,
          wyvern_sting: 0,
          expose_weakness: 0,
          master_tactician: 0,
          readiness: 0,
        },
      },
    }
  },
  mounted() {
    const url = window.location.href.split('/')
    let trees = false
    if (url.length === 6 && url[5] !== '') {
      trees = url[5].split('a')
      Object.keys(this.model.beastmastery).forEach((item, index) => {
        this.model.beastmastery[item] = parseInt(trees[0][index])
      })
      Object.keys(this.model.marksmanship).forEach((item, index) => {
        this.model.marksmanship[item] = parseInt(trees[1][index])
      })
      Object.keys(this.model.survival).forEach((item, index) => {
        this.model.survival[item] = parseInt(trees[2][index])
      })
    }
  },
  computed: {
    beastmastery() {
      return beastmastery
    },
    marksmanship() {
      return marksmanship
    },
    survival() {
      return survival
    },
    currentStore() {
      return useCurrentStore()
    },
    shareLink() {
      let str =
        Object.values(this.model.beastmastery).join('') +
        'a' +
        Object.values(this.model.marksmanship).join('') +
        'a' +
        Object.values(this.model.survival).join('')
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
        let beastmastery = Object.values(n.beastmastery).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)

        let marksmanship = Object.values(n.marksmanship).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)

        let survival = Object.values(n.survival).reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)

        this.beastmastery_total = beastmastery
        this.marksmanship_total = marksmanship
        this.survival_total = survival
        this.total = beastmastery + marksmanship + survival
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
      name="hunter"
      spec="beastmastery"
      :total="beastmastery_total"
      :image="pathPart() + 'hunter/background-hunter-beastmastery.avif'"
      :icon="pathPart() + 'ability_hunter_beasttaming.webp'"
      @reset="resetTree($event)"
    >
      <div></div>
      <TalentNode
        v-model="model.beastmastery.improved_aspect_of_the_hawk"
        v-bind="beastmastery.improved_aspect_of_the_hawk"
        name="improved_aspect_of_the_hawk"
        :total="beastmastery_total"
        spec="hunter.beastmastery"
      />
      <TalentNode
        v-model="model.beastmastery.endurance_training"
        v-bind="beastmastery.endurance_training"
        name="endurance_training"
        :total="beastmastery_total"
        spec="hunter.beastmastery"
      />
      <div></div>

      <TalentNode
        v-model="model.beastmastery.focused_fire"
        v-bind="beastmastery.focused_fire"
        name="focused_fire"
        :total="beastmastery_total"
        spec="hunter.beastmastery"
      />
      <TalentNode
        v-model="model.beastmastery.improved_aspect_of_the_monkey"
        v-bind="beastmastery.improved_aspect_of_the_monkey"
        name="improved_aspect_of_the_monkey"
        :total="beastmastery_total"
        spec="hunter.beastmastery"
      />
      <TalentNode
        v-model="model.beastmastery.thick_hide"
        v-bind="beastmastery.thick_hide"
        name="thick_hide"
        :total="beastmastery_total"
        spec="hunter.beastmastery"
      />
      <TalentNode
        v-model="model.beastmastery.improved_revive_pet"
        v-bind="beastmastery.improved_revive_pet"
        name="improved_revive_pet"
        :total="beastmastery_total"
        spec="hunter.beastmastery"
      />

      <TalentNode
        v-model="model.beastmastery.pathfinding"
        v-bind="beastmastery.pathfinding"
        name="pathfinding"
        :total="beastmastery_total"
        spec="hunter.beastmastery"
      />
      <TalentNode
        v-model="model.beastmastery.bestial_swiftness"
        v-bind="beastmastery.bestial_swiftness"
        name="bestial_swiftness"
        :total="beastmastery_total"
        spec="hunter.beastmastery"
      />
      <TalentNode
        v-model="model.beastmastery.unleashed_fury"
        v-bind="beastmastery.unleashed_fury"
        name="unleashed_fury"
        :total="beastmastery_total"
        spec="hunter.beastmastery"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.beastmastery.improved_mend_pet"
        v-bind="beastmastery.improved_mend_pet"
        name="improved_mend_pet"
        :total="beastmastery_total"
        spec="hunter.beastmastery"
      />
      <TalentNode
        v-model="model.beastmastery.ferocity"
        v-bind="beastmastery.ferocity"
        name="ferocity"
        :total="beastmastery_total"
        spec="hunter.beastmastery"
      />
      <Arrow from="ferocity" to="frenzy" tree="tree_beastmastery" />
      <div></div>

      <TalentNode
        v-model="model.beastmastery.spirit_bond"
        v-bind="beastmastery.spirit_bond"
        name="spirit_bond"
        :total="beastmastery_total"
        spec="hunter.beastmastery"
      />
      <TalentNode
        v-model="model.beastmastery.intimidation"
        v-bind="beastmastery.intimidation"
        name="intimidation"
        :total="beastmastery_total"
        spec="hunter.beastmastery"
      />
      <Arrow from="intimidation" to="bestial_wrath" tree="tree_beastmastery" />
      <div></div>
      <TalentNode
        v-model="model.beastmastery.bestial_discipline"
        v-bind="beastmastery.bestial_discipline"
        name="bestial_discipline"
        :total="beastmastery_total"
        spec="hunter.beastmastery"
      />

      <TalentNode
        v-model="model.beastmastery.animal_handler"
        v-bind="beastmastery.animal_handler"
        name="animal_handler"
        :total="beastmastery_total"
        spec="hunter.beastmastery"
      />
      <div></div>
      <TalentNode
        v-model="model.beastmastery.frenzy"
        v-bind="beastmastery.frenzy"
        name="frenzy"
        :total="beastmastery_total"
        spec="hunter.beastmastery"
      />
      <div></div>

      <TalentNode
        v-model="model.beastmastery.ferocious_inspiration"
        v-bind="beastmastery.ferocious_inspiration"
        name="ferocious_inspiration"
        :total="beastmastery_total"
        spec="hunter.beastmastery"
      />
      <TalentNode
        v-model="model.beastmastery.bestial_wrath"
        v-bind="beastmastery.bestial_wrath"
        name="bestial_wrath"
        :total="beastmastery_total"
        spec="hunter.beastmastery"
      />
      <Arrow from="bestial_wrath" to="the_beast_within" tree="tree_beastmastery" />
      <TalentNode
        v-model="model.beastmastery.catlike_reflexes"
        v-bind="beastmastery.catlike_reflexes"
        name="catlike_reflexes"
        :total="beastmastery_total"
        spec="hunter.beastmastery"
      />
      <div></div>

      <div></div>
      <div></div>
      <TalentNode
        v-model="model.beastmastery.serpents_swiftness"
        v-bind="beastmastery.serpents_swiftness"
        name="serpents_swiftness"
        :total="beastmastery_total"
        spec="hunter.beastmastery"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.beastmastery.the_beast_within"
        v-bind="beastmastery.the_beast_within"
        name="the_beast_within"
        :total="beastmastery_total"
        spec="hunter.beastmastery"
      />
      <div></div>
      <div></div>
    </BaseTree>
    <BaseTree
      name="hunter"
      spec="marksmanship"
      :total="marksmanship_total"
      :image="pathPart() + 'hunter/background-hunter-marksmanship.avif'"
      :icon="pathPart() + 'ability_marksmanship.webp'"
      @reset="resetTree($event)"
    >
      <div></div>
      <TalentNode
        v-model="model.marksmanship.improved_concussive_shot"
        v-bind="marksmanship.improved_concussive_shot"
        name="improved_concussive_shot"
        :total="marksmanship_total"
        spec="hunter.marksmanship"
      />
      <TalentNode
        v-model="model.marksmanship.lethal_shots"
        v-bind="marksmanship.lethal_shots"
        name="lethal_shots"
        :total="marksmanship_total"
        spec="hunter.marksmanship"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.marksmanship.improved_hunters_mark"
        v-bind="marksmanship.improved_hunters_mark"
        name="improved_hunters_mark"
        :total="marksmanship_total"
        spec="hunter.marksmanship"
      />
      <TalentNode
        v-model="model.marksmanship.efficiency"
        v-bind="marksmanship.efficiency"
        name="efficiency"
        :total="marksmanship_total"
        spec="hunter.marksmanship"
      />
      <div></div>

      <TalentNode
        v-model="model.marksmanship.go_for_the_throat"
        v-bind="marksmanship.go_for_the_throat"
        name="go_for_the_throat"
        :total="marksmanship_total"
        spec="hunter.marksmanship"
      />
      <TalentNode
        v-model="model.marksmanship.improved_arcane_shot"
        v-bind="marksmanship.improved_arcane_shot"
        name="improved_arcane_shot"
        :total="marksmanship_total"
        spec="hunter.marksmanship"
      />
      <TalentNode
        v-model="model.marksmanship.aimed_shot"
        v-bind="marksmanship.aimed_shot"
        name="aimed_shot"
        :total="marksmanship_total"
        spec="hunter.marksmanship"
      />
      <Arrow from="aimed_shot" to="mortal_shots" tree="tree_marksmanship" />
      <TalentNode
        v-model="model.marksmanship.rapid_killing"
        v-bind="marksmanship.rapid_killing"
        name="rapid_killing"
        :total="marksmanship_total"
        spec="hunter.marksmanship"
      />

      <div></div>
      <TalentNode
        v-model="model.marksmanship.improved_stings"
        v-bind="marksmanship.improved_stings"
        name="improved_stings"
        :total="marksmanship_total"
        spec="hunter.marksmanship"
      />
      <TalentNode
        v-model="model.marksmanship.mortal_shots"
        v-bind="marksmanship.mortal_shots"
        name="mortal_shots"
        :total="marksmanship_total"
        spec="hunter.marksmanship"
      />
      <div></div>

      <TalentNode
        v-model="model.marksmanship.concussive_barrage"
        v-bind="marksmanship.concussive_barrage"
        name="concussive_barrage"
        :total="marksmanship_total"
        spec="hunter.marksmanship"
      />
      <TalentNode
        v-model="model.marksmanship.scatter_shot"
        v-bind="marksmanship.scatter_shot"
        name="scatter_shot"
        :total="marksmanship_total"
        spec="hunter.marksmanship"
      />
      <Arrow from="scatter_shot" to="silencing_shot" tree="tree_marksmanship" />
      <TalentNode
        v-model="model.marksmanship.barrage"
        v-bind="marksmanship.barrage"
        name="barrage"
        :total="marksmanship_total"
        spec="hunter.marksmanship"
      />
      <Arrow from="barrage" to="improved_barrage" tree="tree_marksmanship" />
      <div></div>

      <TalentNode
        v-model="model.marksmanship.combats_experience"
        v-bind="marksmanship.combats_experience"
        name="combats_experience"
        :total="marksmanship_total"
        spec="hunter.marksmanship"
      />
      <div></div>
      <div></div>
      <TalentNode
        v-model="model.marksmanship.ranged_weapon_specialization"
        v-bind="marksmanship.ranged_weapon_specialization"
        name="ranged_weapon_specialization"
        :total="marksmanship_total"
        spec="hunter.marksmanship"
      />

      <TalentNode
        v-model="model.marksmanship.careful_aim"
        v-bind="marksmanship.careful_aim"
        name="careful_aim"
        :total="marksmanship_total"
        spec="hunter.marksmanship"
      />
      <TalentNode
        v-model="model.marksmanship.silencing_shot"
        v-bind="marksmanship.silencing_shot"
        name="silencing_shot"
        :total="marksmanship_total"
        spec="hunter.marksmanship"
      />
      <TalentNode
        v-model="model.marksmanship.improved_barrage"
        v-bind="marksmanship.improved_barrage"
        name="improved_barrage"
        :total="marksmanship_total"
        spec="hunter.marksmanship"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.marksmanship.master_marksman"
        v-bind="marksmanship.master_marksman"
        name="master_marksman"
        :total="marksmanship_total"
        spec="hunter.marksmanship"
      />
      <Arrow from="master_marksman" to="trueshot_aura" tree="tree_marksmanship" />
      <div></div>
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.marksmanship.trueshot_aura"
        v-bind="marksmanship.trueshot_aura"
        name="trueshot_aura"
        :total="marksmanship_total"
        spec="hunter.marksmanship"
      />
      <div></div>
      <div></div>
    </BaseTree>
    <BaseTree
      name="hunter"
      spec="survival"
      :total="survival_total"
      :image="pathPart() + 'hunter/background-hunter-survival.avif'"
      :icon="pathPart() + 'ability_hunter_swiftstrike.webp'"
      @reset="resetTree($event)"
    >
      <TalentNode
        v-model="model.survival.monster_slaying"
        v-bind="survival.monster_slaying"
        name="monster_slaying"
        :total="survival_total"
        spec="hunter.survival"
      />
      <TalentNode
        v-model="model.survival.humanoid_slaying"
        v-bind="survival.humanoid_slaying"
        name="humanoid_slaying"
        :total="survival_total"
        spec="hunter.survival"
      />
      <TalentNode
        v-model="model.survival.hawk_eye"
        v-bind="survival.hawk_eye"
        name="hawk_eye"
        :total="survival_total"
        spec="hunter.survival"
      />
      <TalentNode
        v-model="model.survival.savage_strikes"
        v-bind="survival.savage_strikes"
        name="savage_strikes"
        :total="survival_total"
        spec="hunter.survival"
      />

      <TalentNode
        v-model="model.survival.entrapment"
        v-bind="survival.entrapment"
        name="entrapment"
        :total="survival_total"
        spec="hunter.survival"
      />
      <TalentNode
        v-model="model.survival.deflection"
        v-bind="survival.deflection"
        name="deflection"
        :total="survival_total"
        spec="hunter.survival"
      />
      <TalentNode
        v-model="model.survival.improved_wing_clip"
        v-bind="survival.improved_wing_clip"
        name="improved_wing_clip"
        :total="survival_total"
        spec="hunter.survival"
      />
      <div></div>

      <TalentNode
        v-model="model.survival.clever_trap"
        v-bind="survival.clever_trap"
        name="clever_trap"
        :total="survival_total"
        spec="hunter.survival"
      />
      <TalentNode
        v-model="model.survival.survivalist"
        v-bind="survival.survivalist"
        name="survivalist"
        :total="survival_total"
        spec="hunter.survival"
      />
      <TalentNode
        v-model="model.survival.deterrence"
        v-bind="survival.deterrence"
        name="deterrence"
        :total="survival_total"
        spec="hunter.survival"
      />
      <Arrow from="deterrence" to="counterattack" tree="tree_survival" />
      <div></div>

      <TalentNode
        v-model="model.survival.trap_mastery"
        v-bind="survival.trap_mastery"
        name="trap_mastery"
        :total="survival_total"
        spec="hunter.survival"
      />
      <TalentNode
        v-model="model.survival.surefooted"
        v-bind="survival.surefooted"
        name="surefooted"
        :total="survival_total"
        spec="hunter.survival"
      />
      <div></div>
      <TalentNode
        v-model="model.survival.improved_feign_death"
        v-bind="survival.improved_feign_death"
        name="improved_feign_death"
        :total="survival_total"
        spec="hunter.survival"
      />

      <TalentNode
        v-model="model.survival.survival_instincts"
        v-bind="survival.survival_instincts"
        name="survival_instincts"
        :total="survival_total"
        spec="hunter.survival"
      />
      <TalentNode
        v-model="model.survival.killer_instinct"
        v-bind="survival.killer_instinct"
        name="killer_instinct"
        :total="survival_total"
        spec="hunter.survival"
      />
      <Arrow from="killer_instinct" to="wyvern_sting" tree="tree_survival" />
      <TalentNode
        v-model="model.survival.counterattack"
        v-bind="survival.counterattack"
        name="counterattack"
        :total="survival_total"
        spec="hunter.survival"
      />
      <div></div>

      <TalentNode
        v-model="model.survival.resourcefulness"
        v-bind="survival.resourcefulness"
        name="resourcefulness"
        :total="survival_total"
        spec="hunter.survival"
      />
      <div></div>
      <TalentNode
        v-model="model.survival.lightning_reflexes"
        v-bind="survival.lightning_reflexes"
        name="lightning_reflexes"
        :total="survival_total"
        spec="hunter.survival"
      />
      <div></div>

      <TalentNode
        v-model="model.survival.thrill_of_the_hunt"
        v-bind="survival.thrill_of_the_hunt"
        name="thrill_of_the_hunt"
        :total="survival_total"
        spec="hunter.survival"
      />
      <TalentNode
        v-model="model.survival.wyvern_sting"
        v-bind="survival.wyvern_sting"
        name="wyvern_sting"
        :total="survival_total"
        spec="hunter.survival"
      />
      <TalentNode
        v-model="model.survival.expose_weakness"
        v-bind="survival.expose_weakness"
        name="expose_weakness"
        :total="survival_total"
        spec="hunter.survival"
      />
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.survival.master_tactician"
        v-bind="survival.master_tactician"
        name="master_tactician"
        :total="survival_total"
        spec="hunter.survival"
      />
      <Arrow from="master_tactician" to="readiness" tree="tree_survival" />
      <div></div>
      <div></div>

      <div></div>
      <TalentNode
        v-model="model.survival.readiness"
        v-bind="survival.readiness"
        name="readiness"
        :total="survival_total"
        spec="hunter.survival"
      />
      <div></div>
      <div></div>
    </BaseTree>
  </ClassView>
</template>
