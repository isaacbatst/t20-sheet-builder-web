import { updateItemByIndex } from "@/application/common/Imutable"
import React, { PropsWithChildren, Reducer, useContext, useReducer } from "react"
import { SkillName, SpellName, ArcanistPathName, EquipmentName, Arcanist, ArcanistLineageType, ArcanistLineageDraconicDamageType, GeneralPowerName, Attribute } from "t20-sheet-builder"


export type ArcanistContextType = {
  selectedSkillsByGroup: SkillName[][]
  initialSpells: SpellName[]
  selectedPath?: ArcanistPathName
  mageSpell?: SpellName
  wizardFocus?: EquipmentName
  sorcererLineage?: ArcanistLineageType
	sorcererLineageDraconicDamageType?: ArcanistLineageDraconicDamageType;
  sorcererLineageFaerieExtraSpell?: SpellName
  sorcererLineageRedExtraPower?: GeneralPowerName
  sorcererLineageRedAttribute?: Attribute
}

export enum ArcanistContextActionType {
  updateSkillGroup = 'updateSkillGroup',
  updateInitialSpells = 'updateInitialSpells',
  selectPath = 'selectPath',
  selectMageSpell = 'selectMageSpell',
  selectWizardFocus = 'selectWizardFocus',
  selectSorcererLineage = 'selectSorcererLineage',
  selectSorcererLineageDraconicDamageType = 'selectSorcererLineageDraconicDamageType',
  selectSorcererLineageFaerieExtraSpell = 'selectSorcererLineageFaerieExtraSpell',
  selectSorcererLineageRedExtraPower = 'selectSorcererLineageRedExtraPower',
  selectSorcererLineageRedAttribute = 'selectSorcererLineageRedAttribute'
}

type UpdateSkillGroupPayload = { skillGroup: SkillName[], groupIndex: number }

type ActionPayloads = {
  updateSkillGroup: UpdateSkillGroupPayload,
  updateInitialSpells: SpellName[],
  selectPath: ArcanistPathName | undefined,
  selectMageSpell: SpellName | undefined,
  selectWizardFocus: EquipmentName | undefined,
  selectSorcererLineage: ArcanistLineageType | undefined
  selectSorcererLineageDraconicDamageType: ArcanistLineageDraconicDamageType | undefined
  selectSorcererLineageFaerieExtraSpell: SpellName | undefined
  selectSorcererLineageRedExtraPower: GeneralPowerName | undefined
  selectSorcererLineageRedAttribute: Attribute | undefined
}

type Action<T extends keyof ActionPayloads, P = ActionPayloads[T]> = {
  type: T,
  payload: P
}

const actionsCreators: {
  [key in keyof ActionPayloads]: (payload: ActionPayloads[key]) => Action<key>
} = {
  selectMageSpell(payload?: SpellName) {
    return {
      payload,
      type: ArcanistContextActionType.selectMageSpell
    }
  },
  selectWizardFocus(payload?: EquipmentName) {
    return {
      payload,
      type: ArcanistContextActionType.selectWizardFocus
    }
  },
  selectSorcererLineage(payload?: ArcanistLineageType) {
    return {
      payload,
      type: ArcanistContextActionType.selectSorcererLineage
    }
  },
  selectSorcererLineageDraconicDamageType(payload?: ArcanistLineageDraconicDamageType) {
    return {
      payload,
      type: ArcanistContextActionType.selectSorcererLineageDraconicDamageType
    }
  },
  selectSorcererLineageFaerieExtraSpell(payload?: SpellName) {
    return {
      payload,
      type: ArcanistContextActionType.selectSorcererLineageFaerieExtraSpell
    }
  },
  selectPath(payload?: ArcanistPathName) {
    return {
      payload,
      type: ArcanistContextActionType.selectPath
    }
  },
  updateInitialSpells(payload: SpellName[]) {
    return {
      payload,
      type: ArcanistContextActionType.updateInitialSpells
    }
  },
  selectSorcererLineageRedAttribute(payload?: Attribute) {
    return {
      payload,
      type: ArcanistContextActionType.selectSorcererLineageRedAttribute
    }
  },
  selectSorcererLineageRedExtraPower(payload?: GeneralPowerName) {
    return {
      payload,
      type: ArcanistContextActionType.selectSorcererLineageRedExtraPower
    }
  },
  updateSkillGroup(payload: UpdateSkillGroupPayload) {
    return {
      payload,
      type: ArcanistContextActionType.updateSkillGroup
    }
  }
}

export const selectMageSpell = actionsCreators.selectMageSpell
export const selectWizardFocus = actionsCreators.selectWizardFocus
export const selectSorcererLineage = actionsCreators.selectSorcererLineage
export const selectSorcererLineageDraconicDamageType = actionsCreators.selectSorcererLineageDraconicDamageType
export const selectSorcererLineageFaerieExtraSpell = actionsCreators.selectSorcererLineageFaerieExtraSpell
export const selectPath = actionsCreators.selectPath
export const updateInitialSpells = actionsCreators.updateInitialSpells
export const updateSkillGroup = actionsCreators.updateSkillGroup
export const selectSorcererLineageRedAttribute = actionsCreators.selectSorcererLineageRedAttribute
export const selectSorcererLineageRedExtraPower = actionsCreators.selectSorcererLineageRedExtraPower

export type ArcanistDispatchContextType = <T extends keyof ActionPayloads,>(value: Action<T>) => void

const ArcanistContext = React.createContext(null as unknown as ArcanistContextType) 
const ArcanistDispatchContext = React.createContext(null as unknown as ArcanistDispatchContextType) 

const reducers: {
  [key in keyof ActionPayloads]: Reducer<ArcanistContextType, Action<key>>
} = {
  updateSkillGroup(state, action) {
    const updated  = updateItemByIndex(state.selectedSkillsByGroup, action.payload.skillGroup, action.payload.groupIndex)
    return {
      ...state,
      selectedSkillsByGroup: updated
    }
  },
  updateInitialSpells(state, action) {
    return {
      ...state,
      initialSpells: action.payload
    }
  }, 
  selectPath(state, action) {
    return {
      ...state,
      selectedPath: action.payload,
      mageSpell: undefined,
      wizardFocus: undefined,
      sorcererLineage: undefined,
      sorcererLineageDraconicDamageType: undefined,
      sorcererLineageFaerieExtraSpell: undefined,
      sorcererLineageRedAttribute: undefined,
      sorcererLineageRedExtraPower: undefined,
    }
  },
  selectMageSpell(state, action) {
    return {
      ...state,
      mageSpell: action.payload
    }
  },
  selectWizardFocus(state, action) {
    return {
      ...state,
      wizardFocus: action.payload
    }
  },
  selectSorcererLineage(state, action) {
    return {
      ...state,
      sorcererLineage: action.payload,
      sorcererLineageDraconicDamageType: undefined,
      sorcererLineageFaerieExtraSpell: undefined,
      sorcererLineageRedAttribute: undefined,
      sorcererLineageRedExtraPower: undefined,
    }
  },
  selectSorcererLineageDraconicDamageType(state, action) {
    return {
      ...state,
      sorcererLineageDraconicDamageType: action.payload
    }
  },
  selectSorcererLineageFaerieExtraSpell(state, action) {
    return {
      ...state,
      sorcererLineageFaerieExtraSpell: action.payload
    }
  },
  selectSorcererLineageRedAttribute(state, action) {
    return {
      ...state,
      sorcererLineageRedAttribute: action.payload
    }
  },
  selectSorcererLineageRedExtraPower(state, action) {
    return {
      ...state,
      sorcererLineageRedExtraPower: action.payload
    }
  }
}


const reducer = <T extends keyof ActionPayloads,>(state: ArcanistContextType, action: Action<T>) => {
  return reducers[action.type](state, action)
}

export const ArcanistContextProvider: React.FC<PropsWithChildren> = ({
  children
}) => {
  const skillGroupsLength = Arcanist.selectSkillGroups.length
  const initialSelectedSkillsByGroup = Array.from({length: skillGroupsLength}, () => [])
  const initialState: ArcanistContextType = {
    initialSpells: [],
    selectedSkillsByGroup: initialSelectedSkillsByGroup,
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  return <ArcanistContext.Provider value={state}>
    <ArcanistDispatchContext.Provider value={dispatch}>
      {children}
    </ArcanistDispatchContext.Provider>
  </ArcanistContext.Provider>
}

export const useArcanistContext = () => {
  const context = useContext(ArcanistContext)

  if (!context) {
    throw new Error('useArcanistContext must be used within an ArcanistContextProvider')
  }

  return context
}

export const useArcanistContextDispatch = () => {
  const dispatch = useContext(ArcanistDispatchContext)

  if (!dispatch) {
    throw new Error('useArcanistContextDispatch must be used within an ArcanistDispatchContextProvider')
  }

  return dispatch
}