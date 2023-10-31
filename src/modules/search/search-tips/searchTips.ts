import html from './searchTips.tpl.html';
import { ViewTemplate } from '../../../utils/viewTemplate';
import { View } from '../../../utils/view';
import { EventEmitter } from '../../../utils/eventEmitter';

export const _tipsEvent = 'tips-event';
export type tipsEvent = string;

export class SearchTips {
  view!: View;
  tips!: string[];
  on!: EventEmitter<tipsEvent>;

  constructor() {
    this.tips = [];
    this.view = new ViewTemplate(html).cloneView();
    this.on = new EventEmitter();
  }

  attach($root: HTMLElement) {
    $root.appendChild(this.view.root);

    const tips: HTMLElement[] = Array.from(this.view.root.querySelectorAll('.search-tips__tips'));

    tips.forEach((tip) => {
      tip.onclick = () => {
        this.on.emit(_tipsEvent, tip.innerText);
      };
    });
  }

  update(tips: string[]) {
    this.tips = tips;
    this.render();
  }

  render() {
    this.tips.forEach((tip, i) => {
      this.view[`tip${i + 1}`].textContent = tip;
    });
  }
}
