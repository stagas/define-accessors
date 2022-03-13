const createPropertyDescriptor = <T, K extends keyof T>(key: K, source: T) => ({
  get() {
    return source[key]
  },
  set(value: T[K]) {
    source[key] = value
  },
})

/**
 * Defines accessors for a source object on a target object.
 *
 * Example; all values reflected on source:
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
 * Example; all values reflected on `other` using a custom property descriptor factory:
 * ```ts
 * const target = {}
 * const source = {
 *   foo: 'a prop',
 * }
 * const other: Record<string, unknown> = {
 *   foo: 'something else',
 * }
 * const typed = defineAccessors(target, source, (key: string) => ({
 *   enumerable: true,
 *   get() {
 *     return other[key]
 *   },
 *   set(value: never) {
 *     other[key] = value
 *   },
 * }))
 * expect(typed).toBe(target)
 * expect(typed.foo).toBe(other.foo)
 * ```
 *
 * @param target The target object to define accessors on
 * @param source The source object where the actual values are
 * @param propertyDescriptorFactory A function that returns a custom property descriptor for the given key
 * @returns The target object but with its type intersected with the source's type
 */
export const defineAccessors = <T, S extends object>(
  target: T,
  source: S,
  propertyDescriptorFactory: (
    key: keyof S,
    source: S
  ) => PropertyDescriptor = createPropertyDescriptor
) =>
  Object.defineProperties(
    target,
    Object.fromEntries(
      Object.keys(source).map(key => [key, propertyDescriptorFactory(key as keyof S, source)])
    )
  ) as T & S

export default defineAccessors
