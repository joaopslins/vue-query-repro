import { useQuery } from '@tanstack/vue-query'

let f: <T>() => T

interface MyType {
  a: number
}

const useTestRepro = <K extends MyType>() => {
  const myFetch = async (): Promise<K> => {
    return Promise.resolve(f<K>())
  }

  const query = useQuery([], myFetch)

  console.log(query.data.value.a)

  return query
}

export default useTestRepro
