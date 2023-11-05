import {faker} from '@faker-js/faker';

import {IListItem} from '../types';

//
//

const list_data: IListItem[] = [];

for (let index = 0; index < 1500; index++) {
  const priceInt = parseFloat(faker.commerce.price());

  list_data.push({
    id: `${index}`,
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    salePrice: faker.helpers.maybe(
      () => faker.commerce.price(priceInt * 0.5, priceInt * 0.9),
      {probability: 0.1},
    ),
    brand: faker.company.name(),
  });
}

export default list_data;
