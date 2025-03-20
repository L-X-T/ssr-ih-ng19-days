# 03 Incremental Hydration

The future has arrived, my friends! In this third and final lab, we will further improve the initial load of our app by replacing the `@defer` blocks with Angular's **incremental hydration**. Later on, you are invited to apply the same optimizations to your **own Angular Apps**.

<!-- TOC -->
  * [Add incremental hydration to the demo](#add-incremental-hydration-to-the-demo)
    * [Bonus: Add incremental hydration to your own app](#bonus-add-incremental-hydration-to-your-own-app)
<!-- TOC -->

Angular's new state-of-the-art performance feature is especially useful for large applications with many components that are not immediately visible to the user. By hydrating only the components that are needed at a given time, we can significantly reduce the amount of JavaScript that needs to be loaded and executed on the client side. This can lead to faster initial load times and improved performance, especially on mobile devices or slower networks.

And it is suited for content above-the-fold! 🥳

## Add incremental hydration to the demo

To begin with, replace your `@defer` trigger with `on viewport` in your `demo.component.html`. This trigger will **only be relevant for client-side navigation**, because on the initial load we will receive the server-side rendered content instead (dehydrated, of course).

Now, we need to **update** the `@defer` blocks with a `hyrdate on` trigger in our `demo.component.html` to activate the incremental hydration:

```angular2html
<div class="item">
  @defer (on viewport, hydrate on [TRIGGER]) {
    <app-victor />
  } @placeholder {
    <img src="placeholder.svg" />
  } @loading {
    <span>Something is being loaded :-)</span>
  } @error {
    <strong>There was a loading error :-(</strong>
  }
</div>
```

Again play with at least 3 out of the following `hyrdate on` triggers (replacing `[TRIGGER]` in the example above):

* `hydrate on immediate`
* `hydrate on idle` (or just leave blank since it's the default)
* `hydrate on viewport` (like ngOptimizedImage)
* `hydrate on hover` (mouseover & focusin)
* `hydrate on interaction` (click & keydown)
* `hydrate on timer(4200ms)`

Also, try at least 1 `hydrate when` trigger:

* boolean symbol (class member)
* signal<boolean> or boolean $
* boolean pipe or another method

Note that, since we're using Angular 19, the fantastic **Incremental Hydration** feature can be turned on very easily in our `app.config.ts` (this assumes you have already added the `@angular/ssr` package).

Ensue your `app.config.ts` looks like this:

```typescript
// [...]
import { provideClientHydration, withIncrementalHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    [...],
    provideClientHydration(withIncrementalHydration()),
  ],
};
```

Now, again, serve your app (again without HMR) and check your results:

```shell
ng s --no-hmr
```

Finally, create a production build and check the results again:

```shell
ng b && npx serve -s dist/ssr-ih-ng19-days/browser
```

### Bonus: Add incremental hydration to your own app

Create a new branch in your own app and add the incremental hydration feature to it. You can use the same approach as in the demo app.

Ask your trainer for help if you get stuck or need more information about how to implement incremental hydration in your app.
 
