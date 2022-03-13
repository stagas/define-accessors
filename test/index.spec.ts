import { defineAccessors } from '../src'

describe('defineAccessors', () => {
  it('getters', () => {
    const target = {}
    const source = {
      foo: 'a prop',
      bar: 'another',
      zoo: 10,
    }
    const typed = defineAccessors(target, source)
    expect(typed).toBe(target)
    expect(typed.foo).toBe(source.foo)
    expect(typed.bar).toBe(source.bar)
    expect(typed.zoo).toBe(source.zoo)
  })

  it('setters', () => {
    const target = {}
    const source = {
      foo: 'a prop',
      bar: 'another',
      zoo: 10,
    }
    const typed = defineAccessors(target, source)
    expect(typed).toBe(target)
    expect(typed.foo).toBe(source.foo)
    expect(typed.bar).toBe(source.bar)
    expect(typed.zoo).toBe(source.zoo)
    typed.foo = 'something else'
    expect(typed.foo).toEqual('something else')
    expect(source.foo).toEqual('something else')
    typed.zoo = 42
    expect(typed.zoo).toEqual(42)
    expect(source.zoo).toEqual(42)
  })

  it('with custom property descriptor factory', () => {
    const target = {}
    const source = {
      foo: 'a prop',
      bar: 'another',
      zoo: 10,
    }
    const other: Record<string, unknown> = {
      foo: 'smth',
      bar: 'else',
      zoo: 42,
    }
    const typed = defineAccessors(target, source, (key: string) => ({
      get() {
        return other[key]
      },
      set(value: never) {
        other[key] = value
      },
    }))
    expect(typed).toBe(target)
    expect(typed.foo).toBe(other.foo)
    expect(typed.bar).toBe(other.bar)
    expect(typed.zoo).toBe(other.zoo)
    typed.foo = 'whatever'
    expect(typed.foo).toEqual('whatever')
    expect(other.foo).toEqual('whatever')
    expect(source.foo).toEqual('a prop')
  })
})
