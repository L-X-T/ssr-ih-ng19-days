# TypeScript Style Guide

Last updated on 2024-11-18.

This document contains guidelines for _Angular_ TypeScript files.

## Do

### Must do

- use [**Angular coding style guide**](https://angular.io/guide/styleguide)
  - rule of one (https://angular.dev/style-guide#rule-of-one)
  - put entities and services into the scope where they are being used
- use [**Prettier**](https://prettier.io/)
  - use config from /.prettierrc.json
  - use for .ts, .html, .scss, .md, (@ToDo check .json)
  - use Prettier on save hook
- use [**ESLint**](https://eslint.org/)
  - use config from /.eslint.json (@ToDo check .json)
- use descriptive and meaningful names for all symbols
  - boolean fields always start with `is`, `has`, `show` or alike (e.g. `isLoading` or `hasChanges()`)
  - event functions start with `on` (e.g., `onSave()`)
- refactor symbol names if necessary (e.g., due to requirements changes)
- annotate types for everything except implicitly deferred (e.g. `const x = 1`)
  - also for function parameters and return values (also `void`)
- clean up debug code before committing (e.g., no console.log)
- use `private` by default, to encapsulate properties and methods
- use `protected` for symbols that should be accessible in the component's view template
- use `readonly` by default, unless a property needs to be reassigned
  - always use `readonly` on properties that are initialized by Angular
- use `const` by default, unless a variable needs to be reassigned
- suffix observables with `$`
- prefer using the `AsyncPipe`, use the `takeUntilDestroyed()` operator if subscribing manually
  - prefer subscribing in field initializer or constructor, else `DestroyRef` has to be passed in
- keep constructors and lifecycle hooks simple and clean (basically only call methods, except one-liners)

### Should do

- keep components and directives focused on presentation
- max. 400 LoC per file (e. g. extract static functions to utils)
- prefer types to interfaces
- prefer types to enums (enums are okay for strings and magic numbers)
- group components, directives, pipes & services like this
  - decorator (`@Component`)
  - class with `extends` & `implements`
  - injects (`inject()`)
  - properties
  - methods
    - static
    - constructor
    - lifecycle hooks
    - control value accessor
    - host handler
    - other methods
- place fields and methods next to each other if they belong together
  - no alphabetic order, no order by access modifier
- try to avoid nested RxJS subscriptions (e.g., use switchMap instead)
- prefer easily understandable code over performance (except for performance-critical code)
- prefer short functions (no spaghetti code)
- use comments for complex code, and only if necessary (the usage of descriptive and meaningful names for methods and variables should be enough in many cases, comments do not make up for bad code)
- mark todos with `// @ToDo: task description`
- distinguish between Smart/Controller and Dumb/Presentational Components
- use `LazyLoading` for components
- `immutablility` over `mutability` (for `OnPush` and `OnChanges`)
  - use `...` spread operator for shallow copies
  - use `structeredClone()` or even better `klona` for deep copies
- prefer `ChangeDetectionStrategy.OnPush`
- prefer `Standalone Components` over `Modules`
- prefer default `ViewEncapsulation` (`Emulated`)
- prefer `inject()` over constructor dependency injection
  - group all `inject()` calls at the top of the class
- it's okay to use `protected readonly` services directly in the View Template (HTML)
- prefer initial / default values over `:Type | undefined` (might not make sense for objects)
- prefer `?: Type` shorthand over `:Type | undefined`
- use `symbolName: Partial<Type> = {}` if possible for objects
- use `!` with caution and only if you are sure that the value can never be `null` or `undefined` (e.g. required `@Inputs`, static `@ViewChild`)
- use `{ required: true }` for required `@Inputs`
- use `@HostBinding` and `@HostListener` instead of plain JS listeners
  - @ToDo check if host decorator should be mentioned here
- use variable `as` Type for type castings instead of `<Type>variable`

## Don't

- don't use (default) `public` modifier for properties and methods
- don't use ambiguous or unfamiliar abbreviations
- don't leave debug logs in the codebase
- remove empty constructors
- remove empty methods
- try to avoid inline templates (except one-liners)
- try to avoid `any`, prefer `unknown`
- try to avoid (if possible) these lifecycle hooks
  - `DoCheck()`
  - `AfterContentChecked()`
  - `AfterViewChecked()`
- if using signal-based data binding (signal inputs, outputs and queries) already
  - try to avoid ALL lifecycle hooks
- don't put leading `I` for interfaces

## Resources

- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Angular coding style guide](https://angular.io/guide/styleguide)
- Draft of new [Angular coding style guide](https://gist.github.com/jelbourn/0158b02cfb426e69c172db4ec92e3c0c)
- [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)

## Back to index

- Angular [coding style guide](style-guide.md)
