import { defineAccessors } from '../'

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
})
