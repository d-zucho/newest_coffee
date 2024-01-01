export type Coffee = {
  name: string
  imgURL: string
  description: string
}

export const coffeeData: Coffee[] = [
  {
    name: 'Gran Expresso',
    imgURL: '/assets/home/desktop/image-gran-espresso.png',
    description:
      'Light and flavorful blend with cocoa and black pepper for an intense experience',
  },
  {
    name: 'Planalto',
    imgURL: '/assets/home/desktop/image-planalto.png',
    description:
      'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
  },
  {
    name: 'Piccollo',
    imgURL: '/assets/home/desktop/image-piccollo.png',
    description:
      'Mild and smooth blend featuring notes of toasted almond and dried cherry',
  },
  {
    name: 'Danche',
    imgURL: '/assets/home/desktop/image-danche.png',
    description:
      'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
  },
]
