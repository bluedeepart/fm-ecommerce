
import Image1_thumb from '../assets/image-product-1-thumbnail.jpg';
import Image1 from '../assets/image-product-1.jpg';
import Image2_thumb from '../assets/image-product-2-thumbnail.jpg';
import Image2 from '../assets/image-product-2.jpg';
import Image3_thumb from '../assets/image-product-3-thumbnail.jpg';
import Image3 from '../assets/image-product-3.jpg';
import Image4_thumb from '../assets/image-product-4-thumbnail.jpg';
import Image4 from '../assets/image-product-4.jpg';

const products = [
  {
    id: 'p1',
    type: 'Sneaker Company',
    title: 'Fall Limited Edition Sneakers',
    description:
      'These low - profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    price: 250,
    discount: 50,
    sliderImages: [Image1, Image2, Image3, Image4],
    sliderImageThumbs: [Image1_thumb, Image2_thumb, Image3_thumb, Image4_thumb],
  },
  {
    id: 'p2',
    type: 'Sneaker Company',
    title: 'Spring Limited Edition Sneakers',
    description:
      'These sleek and stylish sneakers are designed for a comfortable fit and feature premium materials that will keep you looking great in any weather.',
    price: 200,
    discount: 40,
    sliderImages: [Image2, Image3, Image4, Image1],
    sliderImageThumbs: [Image2_thumb, Image3_thumb, Image4_thumb, Image1_thumb],
  },
  {
    id: 'p3',
    type: 'Outdoor Gear Co.',
    title: 'Hiking Boots',
    description:
      'Durable and rugged hiking boots for the adventurer in you. Featuring a waterproof design and superior grip for any terrain, these boots are built to last.',
    price: 350,
    discount: 30,
    sliderImages: [Image3, Image4, Image1, Image2],
    sliderImageThumbs: [Image3_thumb, Image4_thumb, Image1_thumb, Image2_thumb],
  },
  {
    id: 'p4',
    type: 'Urban Wear',
    title: 'Casual High-Top Sneakers',
    description:
      'These high-top sneakers bring style and comfort to your everyday look. Perfect for casual outings, they come with a cushioned sole and breathable materials.',
    price: 150,
    discount: 20,
    sliderImages: [Image4, Image1, Image2, Image3],
    sliderImageThumbs: [Image4_thumb, Image1_thumb, Image2_thumb, Image3_thumb],
  },
];


export default products;
