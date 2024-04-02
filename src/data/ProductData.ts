


const productName = [
    'Fuel Factor X 4oz Bottle (Treats 320 gallons)',
    'Fuel Factor X 4oz Bottle 4-Pack',
    'Fuel Factor X Wholesale Pack (15 4oz Bottles)',
    'Fuel Factor X Foil Pack (Treats 20 gallons)',
    'Fuel Factor X 16 Foil Pack',
    'Fuel Factor X Executive Pack (36 Foil Pack)',
    'Fuel Factor X Executive Pack (20 Foil Pack and 1 Fuel Factor X 4oz Bottle) ',
    'Fuel Factor X Bulk 1 Gallon Jug (EU)',
    'Fuel Factor X Bulk 5 Gallon Jug',
    'OptiMyst Waterless Wash',
    'OptiMyst Waterless Wash 5-Pack'
] 



const pricing = [54.87, 203.57, 743.07, 4.64, 64.17, 138.57, 129.27, 929.07, 3719.07, 32.55, 129.27]

const productImageUrl: string[] = [
    'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/ffx-products%2F01.png?alt=media&token=425f4dd3-4669-4457-bda9-818837f4021e',
    'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/ffx-products%2F02.jpg?alt=media&token=b4125bab-f15d-4030-a717-f278cdca0917',
    'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/ffx-products%2F03.png?alt=media&token=616585c0-e3b9-455c-8ca3-47617f356c9e',
    'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/ffx-products%2F04.png?alt=media&token=c2405676-f62a-431a-b414-8ce8009df024',
    'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/ffx-products%2F05.png?alt=media&token=37357bf1-98e2-4faa-8717-95b41844d98b',
    'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/ffx-products%2F06.png?alt=media&token=f4e696cc-24ce-4d81-be12-00f9b72743cb',
    'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/ffx-products%2F07.jpg?alt=media&token=3b543163-dc4a-41cd-bf71-edc6ef92b655',
    'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/ffx-products%2F08.webp?alt=media&token=8c8c338f-e4ce-4f44-b828-7f5183f98658',
    'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/ffx-products%2F09.webp?alt=media&token=ed2a0919-ccc8-4bcf-856c-4e1aa0ddcc53',
    'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/ffx-products%2F10.png?alt=media&token=fd1945ab-18bd-44ea-9661-f06da89b5729',
    'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/ffx-products%2F11.png?alt=media&token=f89bd6b9-e40d-4ecf-9b83-ad4fc52eb0ab'
]

export const ProductData = productName.map((name, index) => {
    return {
      name: name,
      price: pricing[index],
      image: productImageUrl[index]
    };
  });