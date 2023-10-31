import localforage from 'localforage';
import { ProductData } from 'types';

const FAV_DB = '__wb-fav';

class FavouritesService {
  async init() {
    this._updCounters();
  }

	async addProduct(product: ProductData) {
    const products = await this.get();
    if (products.find(({ id }) => id === product.id)) {
      return;
    }

    await this.set([...products, product]);
  }

  async checkProductToFav(id: number) {
    const products = await this.get();

    if (products.find((product) => id === product.id)) {
      return true;
    }

    return false;
  }

	async get(): Promise<ProductData[]> {
    return (await localforage.getItem(FAV_DB)) || [];
  }

  private async set(data: ProductData[]) {
    await localforage.setItem(FAV_DB, data);
    this._updCounters();
  }

  private async _updCounters() {
		const products = await this.get();
    const count = products.length >= 10 ? '9+' : products.length;

    document.querySelector('.js__fav-link')?.classList.toggle('hide', products.length < 1);

    //@ts-ignore
    document.querySelectorAll('.js__fav-counter').forEach(($el: HTMLElement) => {
			$el.innerText = String(count || '');
		});
	}
}

export const favService = new FavouritesService();