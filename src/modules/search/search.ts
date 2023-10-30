import { Component } from '../component';
import html from './search.tpl.html';
import { SearchTips } from './search-tips/searchTips';
import { testData } from './testData';

class Search extends Component {
	searchTips!: SearchTips;

  constructor(props: any) {
    super(props);

		this.searchTips = new SearchTips();
		this.searchTips.attach(this.view.tips);
  }

  async render() {
		// вместо test data должен быть запрос на сервер или обращение к IndexDB
    this.searchTips.update(testData);
		this.searchTips.render();
  }
}

export const searchComp = new Search(html);