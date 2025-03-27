import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class PageTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);

  updateTitle(routerState: RouterStateSnapshot): void {
    this.setTitle(this.buildTitle(routerState));
  }

  setTitle(pageTitle?: string): void {
    if (pageTitle) {
      this.title.setTitle(`${pageTitle} – Demo`);
    } else {
      this.title.setTitle('Demo like a pro');
    }
  }
}
