/**
 * Defines accessors for a source object on a target object.
 *
 * ```ts
 * const target = {}
 * const source = {
 *   foo: 'a prop',
 *   bar: 'another',
 *   zoo: 10,
 * }
 * const typed = defineAccessors(target, source)
 * expect(typed).toBe(target)
 * expect(typed.foo).toBe(source.foo)
 * expect(typed.bar).toBe(source.bar)
 * expect(typed.zoo).toBe(source.zoo)
 *
 * typed.foo = 'something else'
 * expect(typed.foo).toEqual('something else')
 * expect(source.foo).toEqual('something else')
 * ```
 *
 * @param target The target object to define accessors on
 * @param source The source object where the actual values are
 * @returns The target object but with its type intersected with the source's type
 */
export const defineAccessors = <T, S>(target: T, source: S) =>
  Object.defineProperties(
    target,
    Object.fromEntries(
      Object.keys(source).map(key => [
        key,
        {
          get() {
            return (source as Record<string, unknown>)[key]
          },
          set(value: unknown) {
            ;(source as Record<string, unknown>)[key] = value
          },
        },
      ])
    )
  ) as T & S

export default defineAccessors
