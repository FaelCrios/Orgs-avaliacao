import green from '../assets/produtores/green.png';
import grow from '../assets/produtores/grow.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import potager from '../assets/produtores/potager.png';
import salad from '../assets/produtores/salad.png';

const aleatoryNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


const producers = {
  title: 'Produtores',
  list: [
    {name: 'Green', image: green, distance: `${aleatoryNumber(1,500)}m`,rating:aleatoryNumber(1,5)},
    {name: 'Grow', image: grow, distance: `${aleatoryNumber(1,500)}m`,rating:aleatoryNumber(1,5)},
    {name: 'Jenny-Jack Farm', image: jennyJack, distance: `${aleatoryNumber(1,500)}m`,rating:aleatoryNumber(1,5)},
    {name: 'Potager', image: potager, distance: `${aleatoryNumber(1,500)}m`,rating:aleatoryNumber(1,5)},
    {name: 'Salad', image: salad, distance: `${aleatoryNumber(1,500)}m`,rating:aleatoryNumber(1,5)},
  ],
};

export default producers;
