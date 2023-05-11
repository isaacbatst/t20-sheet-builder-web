import { getArcanistFactoryFromContext } from "@/application/common/roles/Arcanist";
import { submitRole } from "@/application/store/slices/sheetBuilder/sheetBuilderSliceRoleDefinition";
import { Arcanist, ArcanistSerializer } from "t20-sheet-builder";
import { Role } from "t20-sheet-builder/build/domain/entities/Role/Role";
import { ConfirmFunction } from "../../../useSheetBuilderSubmit";
import { useArcanistContext } from "./SheetBuilderFormRoleDefinitionArcanistContext";

export const useConfirmArcanist = (confirmRole: ConfirmFunction<Role>) => {
  const context = useArcanistContext()

  const makeArcanist = (): Arcanist => {
    const factory = getArcanistFactoryFromContext(context)
    return factory.make()
  }

  const createSubmitAction = (arcanist: Arcanist) => {
    const serializer = new ArcanistSerializer(arcanist)
    const serialized = serializer.serialize()
    return submitRole(serialized)
  }

  const confirmArcanist = () => {
    confirmRole(makeArcanist, createSubmitAction)
  } 

  return {
    confirmArcanist,
  }
};