# 02 Deferrable Views

In this second lab, we will improve the initial load of our app by using Angular's **deferrable views**. Later on, you are invited to apply the same optimizations to your **own Angular Apps**.


<!-- TOC -->
* [Add @defer to the demo](#add-defer-to-the-demo)
  * [Bonus: Try combining multiple triggers](#bonus-try-combining-multiple-triggers)
  * [Bonus: Make sure you see the placeholder before the actual content](#bonus-make-sure-you-see-the-placeholder-before-the-actual-content)
  * [Bonus: Add prefetch on idle to your @defer block](#bonus-add-prefetch-on-idle-to-your-defer-block)
<!-- TOC -->

Please keep in mind that this generally should **NOT** be used for content visible **above-the-fold** on the initial load. In our case, we avoid layout shifts (which are bad for UX) by giving the elements a fixed width and height (which often cannot be done due to dynamic content size).

## Add @defer to the demo

To begin with, we need to add the `@defer` blocks in our `demo.component.html`:

```angular2html
<div class="item">
  @defer (on [TRIGGER]) {
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

Now try out and play with at least 3 out of the following `on` triggers (replacing `[TRIGGER]` in the example above):

* `on immediate`
* `on idle` (or just leave blank since it's the default)
* `on viewport` (like ngOptimizedImage)
* `on hover` (mouseover & focusin)
* `on interaction` (click & keydown)
* `on timer(4200ms)`

Also, try at least 1 `when` trigger:

* boolean symbol (class member)
* signal<boolean> or boolean $
* boolean pipe or another method

Now serve your app (without HMR) and check your results:

```shell
ng s --no-hmr
```

Finally, create a production build and check the results again:

```shell
ng b && npx serve -s dist/ssr-ih-ng19-days/browser
```

### Bonus: Try combining multiple triggers

You can combine multiple triggers by separating them with a `;`. For example, you can use `on viewport; on idle` to load the content when the element is in the viewport or when the browser is idle.

```angular2html
<div class="item">
  @defer (on viewport; on idle) {
    [...]
  }
</div>
```

### Bonus: Make sure you see the placeholder before the actual content

This will make sure that the placeholder is shown before the actual content. You can use a `minimum` time to make sure that the placeholder is shown for at least 4200ms.

```angular2html
<div class="item">
  @defer {
    [...]
  } @placeholder (minimum 4200ms) {
    [...]
  }
</div>
```

### Bonus: Add prefetch on idle to your @defer block
 
This will make sure that the content is prefetched when the browser is idle. This is a good way to improve the performance of your app, especially for content that is not immediately visible. It works similar to the router based `PreloadingStrategy`.

```angular2html
<div class="item">
  @defer (on viewport; prefetch on idle) {
    [...]
  }
</div>
```

BTW, this handy combination `(on viewport; prefetch on idle)` probably makes sense for most content **below-the-fold**!
