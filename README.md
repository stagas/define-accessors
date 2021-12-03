<h1 align="center">define-accessors</h1>

<p align="center">
define accessors for an object on another object
</p>

<p align="center">
   <a href="#install">        🔧 <strong>Install</strong></a>
 · <a href="#example">        🧩 <strong>Example</strong></a>
 · <a href="#api">            📜 <strong>API docs</strong></a>
 · <a href="https://github.com/stagas/define-accessors/releases"> 🔥 <strong>Releases</strong></a>
 · <a href="#contribute">     💪🏼 <strong>Contribute</strong></a>
 · <a href="https://github.com/stagas/define-accessors/issues">   🖐️ <strong>Help</strong></a>
</p>

***

## Install

```sh
$ npm i define-accessors
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

*   [defineAccessors](#defineaccessors)
    *   [Parameters](#parameters)

### defineAccessors

[src/index.ts:26-42](https://github.com/stagas/define-accessors/blob/06df56edff6f16e4904728811ce1d12fe4bed808/src/index.ts#L26-L42 "Source code on GitHub")

Defines accessors for a source object on a target object.

```ts
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
```

#### Parameters

*   `target` **T** The target object to define accessors on
*   `source` **S** The source object where the actual values are

Returns **any** The target object but with its type intersected with the source's type

## Contribute

[Fork](https://github.com/stagas/define-accessors/fork) or
[edit](https://github.dev/stagas/define-accessors) and submit a PR.

All contributions are welcome!

## License

MIT © 2021
[stagas](https://github.com/stagas)
