import { useContext } from 'react'
import { useService } from '@xstate/react'

import { ServiceContext } from 'src/pages/FormPage/FormPage'

/** wrapper for useContext and useService */
function useFormService() {
  const service = useContext(ServiceContext)
  return useService(service)
}

export { useFormService }
