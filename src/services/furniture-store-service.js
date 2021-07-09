import image1 from '../furniture-images/1.png';
import image2 from '../furniture-images/2.png';
import image3 from '../furniture-images/3.png';

export default class FurnitureStoreService {
  
  _createItem = (id, name, price, category, image) => {
    return { id, name, price, category, image }
  };

  _data = [
    this._createItem(1, 'Comfort Wood Chair', 25.5, 'Chairs', image1),
    this._createItem(2, 'Strong Wooden Stool', 35, 'Stools', image2),
    this._createItem(3, 'Vingate Relax Chair', 45, 'Chairs', image3)
  ];

  getData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.8) {
          resolve(this._data)
        } else {
          reject(new Error('Something goes wrong'))
        }
      }, 300);
    })
  }
}