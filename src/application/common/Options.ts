import { Option } from "@/domain/entities/Option"
import { SkillName, Translator, GeneralPowerName, Attribute } from "t20-sheet-builder"

export const skillsOptions = Object.values(SkillName).map(key => ({ 
  value: key, 
  label: Translator.getSkillTranslation(key) 
}))

export const generalPowerOptions = Object.values(GeneralPowerName).map(key => ({
  value: key,
  label: Translator.getPowerTranslation(key)
}))

const attributes: Attribute[] = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']

export const attributesOptions: Option<Attribute>[] = attributes.map(attribute => ({
  label: Translator.getAttributeTranslation(attribute),
  value: attribute
}))