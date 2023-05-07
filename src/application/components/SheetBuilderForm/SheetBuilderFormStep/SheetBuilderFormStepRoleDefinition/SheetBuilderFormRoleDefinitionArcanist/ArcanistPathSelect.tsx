import { Option } from '@/domain/entities/Option'
import { ArcanistPathName, Translator } from 't20-sheet-builder'
import SheetBuilderFormSelect from '../../../SheetBuilderFormSelect'

type Props = {
  setPath(path?: ArcanistPathName): void
}

const pathsOptions: Option<ArcanistPathName>[] = Object.values(ArcanistPathName).map<Option<ArcanistPathName>>(
  path => ({
    label: Translator.getTranslation(path),
    value: path
  })
)

const ArcanistPathSelect = ({setPath}: Props) => {
  return (
    <SheetBuilderFormSelect  
      options={pathsOptions}
      onChange={(option) => setPath(option?.value)}
      className='mb-3'
      placeholder='Escolha um caminho'
      id='arcanist-path-select'
    />
  )
}

export default ArcanistPathSelect