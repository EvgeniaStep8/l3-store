import html from './searchTips.tpl.html';
import { ViewTemplate } from '../../../utils/viewTemplate';
import { View } from '../../../utils/view';

export class SearchTips {
  view!: View;
  tips!: string[];

  constructor() {
    this.tips = [];
    this.view = new ViewTemplate(html).cloneView();
    console.log(this.view);
  }

  attach($root: HTMLElement) {
    $root.appendChild(this.view.root);
  }

  update(tips: string[]) {
    this.tips = tips;
    this.render();
  }

  render() {
    this.tips.forEach((tip, i) => {
      this.view[`tip${i+1}`].textContent = tip;
    });
  }
}