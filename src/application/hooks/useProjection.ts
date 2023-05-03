import { Dispatch, SetStateAction, useState } from "react"

export const useProjection = <Projection, ProjectionDecorator>(
    initialValue: Projection, makeProjectionDecorator: (setProjection: Dispatch<SetStateAction<Projection>>) => ProjectionDecorator
  ) => {
  const [projection, setProjection] = useState(initialValue);
  
  return makeProjectionDecorator(setProjection);
}