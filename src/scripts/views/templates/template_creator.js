/* eslint-disable import/prefer-default-export */
// import CONFIG from '../../globals/config';

const createItemCatalogue = (item) => `
    <div class="item" tabindex="0">
        <p class="category">kategori: ${item.category}</p>
        <img src="${item.image}" alt="Gambar ${item.title}">
        <div class="item_name_container">
            <h2 class="item_name">${item.title}</h2>
        </div>
    </div>
`;
// eslint-disable-next-line no-unused-vars
const createDetailItem = (item) => `
    <div class ="item_detail">
        <div class="item_detail_box">
        <main> </main>
        <aside> </aside>
        </div>
    </div>

`;

export { createItemCatalogue, createDetailItem };
