import { updateItemByIndex } from "@/application/common/Imutable"
import { useState, useCallback } from "react"
import { Arcanist, SkillName, SpellName, ArcanistPathName, ArcanisPathWizardFocusName, ArcanistLineageType, ArcanistLineageDraconicDamageType, GeneralPowerName, Attribute } from "t20-sheet-builder"

export const useArcanistForm = () => {
  const skillGroupsLength = Arcanist.selectSkillGroups.length
  const initialSkillsByGroup = Array.from({length: skillGroupsLength}, () => [])
  const [skillsByGroup, setSkillsByGroup] = useState<SkillName[][]>(initialSkillsByGroup)
  const [initialSpells, setInitialSpells] = useState<SpellName[]>([])
  const [path, setPath] = useState<ArcanistPathName>() 
  const [mageSpell, setMageSpell] = useState<SpellName>() 
  const [wizardFocus, setWizardFocus] = useState<ArcanisPathWizardFocusName>() 
  const [sorcererLineage, setSorcererLineage] = useState<ArcanistLineageType>() 
  const [sorcererLineageDraconicDamageType, setSorcererLineageDraconicDamageType] = useState<ArcanistLineageDraconicDamageType>() 
  const [sorcererLineageFaerieExtraSpell, setSorcererLineageFaerieExtraSpell] = useState<SpellName>() 
  const [sorcererLineageRedExtraPower, setSorcererLineageRedExtraPower] = useState<GeneralPowerName>() 
  const [sorcererLineageRedAttribute, setSorcererLineageRedAttribute] = useState<Attribute>() 

  const selectPath = useCallback((path: ArcanistPathName) => {
    setPath(path)
    setMageSpell(undefined)
    setWizardFocus(undefined)
    setSorcererLineage(undefined)
    setSorcererLineageDraconicDamageType(undefined)
    setSorcererLineageFaerieExtraSpell(undefined)
    setSorcererLineageRedAttribute(undefined)
    setSorcererLineageRedExtraPower(undefined)
  }, []);

  const selectSorcererLineage = useCallback((lineage: ArcanistLineageType) => {
    setSorcererLineage(lineage)
    setSorcererLineageDraconicDamageType(undefined)
    setSorcererLineageFaerieExtraSpell(undefined)
    setSorcererLineageRedAttribute(undefined)
    setSorcererLineageRedExtraPower(undefined)
  }, [])

  const updateSkillGroup = useCallback((skillGroup: SkillName[], groupIndex: number) => {
    const updated  = updateItemByIndex(skillsByGroup, skillGroup, groupIndex)
    setSkillsByGroup(updated)
  }, [skillsByGroup]) 

  return {
    initialSpells,
    path,
    skillsByGroup,
    mageSpell,
    sorcererLineage,
    sorcererLineageDraconicDamageType,
    sorcererLineageFaerieExtraSpell,
    sorcererLineageRedAttribute,
    sorcererLineageRedExtraPower,
    wizardFocus,
    setInitialSpells,
    setMageSpell,
    setSorcererLineage,
    setSorcererLineageDraconicDamageType,
    setSorcererLineageFaerieExtraSpell,
    setSorcererLineageRedAttribute,
    setSorcererLineageRedExtraPower,
    setWizardFocus,
    updateSkillGroup,
    selectPath,
    selectSorcererLineage,
  }
}