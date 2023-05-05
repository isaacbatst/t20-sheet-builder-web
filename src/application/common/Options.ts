import { SkillName, Translator, GeneralPowerName } from "t20-sheet-builder"

export const skillsOptions = Object.values(SkillName).map(key => ({ 
  value: key, 
  label: Translator.getSkillTranslation(key) 
}))

export const generalPowerOptions = Object.values(GeneralPowerName).map(key => ({
  value: key,
  label: Translator.getPowerTranslation(key)
}))
