import { Option, some, none } from 'fp-ts/Option'

const waitForN = (n: number): Promise<void> =>
  new Promise(res =>
    setTimeout(() => {
      res()
    }, n),
  )

export const loadParN = <A>(f: () => Promise<A>, n: number): Promise<A> =>
  Promise.all([f(), waitForN(n)]).then(([a]) => a)

export const loadParNWithTimeout = <A>(
  f: () => Promise<A>,
  n: number,
  timeout: number,
): Promise<Option<A>> =>
  Promise.race([
    loadParN(f, n).then(a => some(a)),
    waitForN(timeout).then(_ => none),
  ])
