import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class PageTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);

  updateTitle(routerState: RouterStateSnapshot): void {
    const pageTitle = this.buildTitle(routerState);
    if (pageTitle) {
      this.title.setTitle(`${pageTitle} – Demo`);
    } else {
      this.title.setTitle('Demo like a pro');
    }
  }
}
