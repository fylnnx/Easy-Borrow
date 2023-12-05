import FakeStoreSource from '../../data/fakestore-source';
import { createItemCatalogue } from '../templates/template_creator';

const PagePinjam = {
  async render() {
    return `
    <section id ="item_catalogue">
        <h2>Search for Item</h2>        
        <div class ="search-bar"> </div>
        <div id="items" class = "item_list"> 
        </div>
    </section>
    `;
  },

  async afterRender() {
    const items = await FakeStoreSource.ItemList();
    console.log(items);
    const itemContainer = document.querySelector('#items');
    items.forEach((item) => {
      itemContainer.innerHTML += createItemCatalogue(item);
    //   itemContainer.addEventListener('click', () => {
    //     window.location.href = `#/detail/${item.id}`;
    //   });
    });
  },
};

export default PagePinjam;
