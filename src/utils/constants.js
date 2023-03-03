import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'


export const links=[
    {id:1, text: "Home", url: "/"},
    {id: 2, text: "Products", url: "/products"},
    {id: 3, text: "About", url: "/about"}
]

export const services = [
    {
      id: 1,
      icon: <GiCompass />,
      title: 'mission',
      text:
    "We create timeless and functional furniture pieces that reflect the beauty and durability of natural wood. We are committed to using sustainable materials and ethical practices to ensure that our furniture has a minimal impact on the environment. We strive to exceed our customers' expectations by providing personalized service and quality craftsmanship in every piece we create.",
    },
    {
      id: 2,
      icon: <GiDiamondHard />,
      title: 'vision',
      text:
        "We provide unique and bespoke wooden furniture. We aim to create innovative designs that inspire and reflect the personal style and needs of our clients. We are dedicated to achieving excellence in every aspect of our business, from design to delivery, and we aim to build long-term relationships with our customers based on trust, quality, and reliability. Let us bring your vision to life!",
    },
    {
      id: 3,
      icon: <GiStabbedNote />,
      title: 'history',
      text:
        "Our company has a rich history of creating and selling beautiful and functional wooden furniture. Today and beyond, we continue to honor our legacy by using only the finest materials and the same attention to detail that has made us a trusted name in the industry. We are proud of our heritage and remain committed to creating and selling quality furniture that stands the test of time.",
    },
  ]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`