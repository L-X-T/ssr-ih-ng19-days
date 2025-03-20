# 01 Web Performance Audit

To get this workshop started with some motivation, in the first lab, we'll get to know some of the best web **audit tools** for **performance measurement**.

<!-- TOC -->
* [Test the performance of a public web property](#test-the-performance-of-a-public-web-property)
  * [Bonus: Analyze the performance of the chosen web property](#bonus-analyze-the-performance-of-the-chosen-web-property)
* [Test the performance of an Angular App served on your localhost](#test-the-performance-of-an-angular-app-served-on-your-localhost)
  * [Bonus: Analyze the performance of the chosen Angular App](#bonus-analyze-the-performance-of-the-chosen-angular-app)
  * [Bonus: Serve the App via Caddy reverse proxy & gzip (only Linux & Mac)](#bonus-serve-the-app-via-caddy-reverse-proxy--gzip-only-linux--mac)
<!-- TOC -->

## Test the performance of a public web property

The first task is to try to measure the performance of a public web property.

1. Choose a `web property` for your first lab, it can be

   - a **website**,
   - a **web shop** or
   - a **web app**.

   Note: The best option would be to test a project of your own work or else of your team or your company. The `web property` does not have to be an Angular App! However, if your company doesn't have a publicly available `web property` you can choose any website you want.

2. Now select between using **[Google PageSpeed Insights](https://pagespeed.web.dev/)** or **[WebPageTest](https://www.webpagetest.org/)**. There are many other services out there, but your trainer would recommend using on of those two options. Usage of WebPageTest is limited if you don't have a login.
3. The next step is to prepare the `audit document`. You can either copy my **[Google Docs Template](https://docs.google.com/document/d/1AQgAwHoHvasmT43HUlSr3THifj-WHD_wwJQRhd0KG64/edit)** into your Google Drive account or - if you don't have Drive - use one of the templates in this folder.
4. Make sure you fill the _[X]_, _[Y]_ and _[Z]_ placeholders in that `audit document`.
5. Now go to your tool of choice and test the chosen `web property`.
6. Fill the fields in the `audit document` and try to find things that can be improved.
7. Prepare to share your findings with the other workshop participants.

### Bonus: Analyze the performance of the chosen web property

Try to identify the issues of the `web property`. Ask your trainer for clarification if you don't understand the results.

## Test the performance of an Angular App served on your localhost

1. Choose an `Angular App` for this lab. You need the source code. Best option would be a workspace of your own work or else of your team or your company. If you currently don't have access to any Angular workspace as a last resort you can use this workspace.
2. Check the configurations in `angular.json` and then run a production build of the project, typically if production is the default configuration:
   ```shell
   ng b
   ```
   Or else (assuming "production" is the name of the build configuration):
   ```shell
   ng b -c production
   ```
   Or even more specific (where `ng-p3rf` is our app's name):
   ```shell
   ng run ng-p3rf:build:production
   ```
3. Serve your `Angular build` on your localhost. You can either

   - use something like MAMP/WAMP/XAMPP,
   - edit your host file manually or
   - use `npm serve` with this two commands (recommended by your trainer):

   ```shell
   npm i -g serve
   ```

   Now switch the directory containing the build (e.g. `dist/ng-p3rf/browser` in this workspace) and run:

   ```shell
   npx serve -s
   ```

   Please note: the `-s` parameter rewrites all requests to `index.html` which is what we want for an Angular App.

   Alternatively, you can use this handy command in the `package.json` - it already points to the correct directory:

   ```shell
   npm run bs
   ```

4. Now open the `Angular App` in Chrome and make sure you have the `Lighthouse` extension installed.
5. The next step is to prepare another `audit document`. You can again copy my **[Google Docs Template](https://docs.google.com/document/d/1AQgAwHoHvasmT43HUlSr3THifj-WHD_wwJQRhd0KG64/edit)** into your Google Drive account or - if you don't have Drive - use one of the templates in this folder.
6. Make sure you fill the _[X]_, _[Y]_ and _[Z]_ placeholders in that `audit document`.
7. Now fire up your Chrome's DevTools, switch to the `Lighthouse` tab and run it for "**Mobile**" (it's stricter than "**Desktop**") and "**Performance**" - of course you can run the other tests as well, if you want.
8. Fill the fields in the document and try to find things that can be improved.
9. Prepare to share your findings with the other workshop participants.
10. When you're done stop your `serve` with `Ctrl+C`.

### Bonus: Analyze the performance of the chosen Angular App

Try to identify the issues of the `Angular App`.

### Bonus: Serve the App via Caddy reverse proxy & gzip (only Linux & Mac)

1. Open this page and install Caddy on your machine: https://caddyserver.com/docs/install
2. Checkout the `Caddyfile` in the projects root directory.
3. Build and serve your App again:
   ```shell
   ng b && npm run serve
   ```
4. In another terminal (tab) start Caddy with this command:
   ```shell
   caddy start
   ```
5. You should now be able to access your App on http://localhost:4210.
6. Stop Caddy with this command:
   ```shell
   caddy stop
   ```
7. Also stop your `serve` with `Ctrl+C`.
