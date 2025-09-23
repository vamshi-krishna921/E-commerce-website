import React from "react";
import Acid from "../../assets/Mens/Acid/Acid.png";
import Acid2 from "../../assets/Mens/Acid/Acid2.webp";
import Acid3 from "../../assets/Mens/Acid/Acid3.webp";
import Acid4 from "../../assets/Mens/Acid/Acid4.webp";
import Standard from "../../assets/Mens/Earth/Standard.png";
import Standard1 from "../../assets/Mens/Earth/Standard1.png";
import Standard2 from "../../assets/Mens/Earth/Standard2.png";
import Gym from "../../assets/Mens/Gym/Gym.png";
import Gym1 from "../../assets/Mens/Gym/Gym1.png";
import Gym2 from "../../assets/Mens/Gym/Gym2.png";
import Gym3 from "../../assets/Mens/Gym/Gym3.png";
import Gym4 from "../../assets/Mens/Gym/Gym4.png";
import Haunted from "../../assets/Mens/Haunted/Haunted.png";
import Haunted1 from "../../assets/Mens/Haunted/Haunted1.png";
import Haunted2 from "../../assets/Mens/Haunted/Haunted3.png";
import Jade from "../../assets/Mens/Never/Jade.webp";
import Jade1 from "../../assets/Mens/Never/Jade1.png";
import Polo from "../../assets/Mens/Polo/Polo.webp";
import Polo1 from "../../assets/Mens/Polo/Polo1.jpg";
import Polo2 from "../../assets/Mens/Polo/Polo2.jpg";
import Polo3 from "../../assets/Mens/Polo/Polo3.jpg";
import Polo4 from "../../assets/Mens/Polo/Polo4.png";
import Throw from "../../assets/Mens/Throw/Throw.png";
import Throw1 from "../../assets/Mens/Throw/Throw1.png";
import Throw2 from "../../assets/Mens/Throw/Throw2.png";
import Throw3 from "../../assets/Mens/Throw/Throw3.png";
import TomJerry from "../../assets/Mens/Tomandjerry/Tomjerry.png";
import TomJerry1 from "../../assets/Mens/Tomandjerry/Tomjerry1.jpg";
import TomJerry2 from "../../assets/Mens/Tomandjerry/Tomjerry2.jpg";
import Venom from "../../assets/Mens/Venom/Venom.png";
import Venom1 from "../../assets/Mens/Venom/Venom1.png";
import Venom2 from "../../assets/Mens/Venom/Venom2.png";
import Venom3 from "../../assets/Mens/Venom/Venom3.png";
import Angle from "../../assets/Women/Angle/Angle.png";
import Angle1 from "../../assets/Women/Angle/Angle1.png";
import Angle2 from "../../assets/Women/Angle/Angle2.png";
import Bomber from "../../assets/Women/Bomber/Bomber.png";
import Bomber1 from "../../assets/Women/Bomber/Bomber1.jpg";
import Bomber2 from "../../assets/Women/Bomber/Bomber2.jpg";
import Bomber3 from "../../assets/Women/Bomber/Bomber3.jpg";
import Butterfly from "../../assets/Women/Butterfly/Butterfly.png";
import Butterfly1 from "../../assets/Women/Butterfly/Butterfly1.png";
import Butterfly2 from "../../assets/Women/Butterfly/Butterfly2.png";
import Butterfly3 from "../../assets/Women/Butterfly/Butterfly3.png";
import Classic from "../../assets/Women/Classic/Classic.jpg";
import Classic1 from "../../assets/Women/Classic/Classic1.jpg";
import Classic2 from "../../assets/Women/Classic/Classic2.jpg";
import Classic3 from "../../assets/Women/Classic/Classic3.png";
import Cool from "../../assets/Women/Cool/Cool.png";
import Cool1 from "../../assets/Women/Cool/Cool1.png";
import Cool2 from "../../assets/Women/Cool/Cool2.png";
import Cool3 from "../../assets/Women/Cool/Cool3.png";
import Croptop from "../../assets/Women/CropTop/CropTop.jpg";
import Croptop1 from "../../assets/Women/CropTop/CropTop1.jpg";
import Croptop2 from "../../assets/Women/CropTop/CropTop2.jpg";
import Croptop3 from "../../assets/Women/CropTop/CropTop3.jpg";
import Cropped from "../../assets/Women/Hoodie/CropHoodie.webp";
import Cropped1 from "../../assets/Women/Hoodie/CropHoodie1.jpg";
import Cropped2 from "../../assets/Women/Hoodie/CropHoodie2.jpg";
import Cropped3 from "../../assets/Women/Hoodie/CropHoodie3.jpg";
import Cropped4 from "../../assets/Women/Hoodie/CropHoodie4.jpg";
import Hygee from "../../assets/Women/Hygee/Hygee.png";
import Hygee1 from "../../assets/Women/Hygee/Hygee1.png";
import Hygee2 from "../../assets/Women/Hygee/Hygee2.png";
import dress from "../../assets/Kids/Dress/Dress.png";
import dress1 from "../../assets/Kids/Dress/Dress1.jpg";
import shirt from "../../assets/Kids/Shirt/Shirt.png";
import shirt1 from "../../assets/Kids/Shirt/Shirt1.jpg";
import sweater from "../../assets/Kids/Sweater/Sweater.jpeg";
import sweater1 from "../../assets/Kids/Sweater/Sweater1.jpeg";

export const productsList = [
  {
    id: 1,
    category: "Mens",
    name: "Acid Washed Hoodie",
    newArrival: true,
    price: 1499,
    images: [Acid, Acid2, Acid3, Acid4],
  },
  {
    id: 2,
    category: "Mens",
    name: "Standard Crew T-shirt",
    newArrival: false,
    price: 499,
    images: [Standard1, Standard, Standard2],
  },
  {
    id: 3,
    category: "Mens",
    name: "Oversized Hoodie",
    newArrival: false,
    price: 999,
    images: [Gym, Gym1, Gym2, Gym3, Gym4],
  },
  {
    id: 4,
    category: "Mens",
    name: "Hoodie",
    newArrival: false,
    price: 999,
    images: [Haunted, Haunted1, Haunted2],
  },
  {
    id: 5,
    category: "Mens",
    name: "Oversized Tee",
    newArrival: true,
    price: 799,
    images: [Jade, Jade1],
  },
  {
    id: 7,
    category: "Mens",
    name: "Polo T-shirt",
    newArrival: false,
    price: 699,
    images: [Polo, Polo1, Polo2, Polo3, Polo4],
  },
  {
    id: 8,
    category: "Mens",
    name: "Classic T-shirt",
    newArrival: false,
    price: 499,
    images: [Throw, Throw1, Throw2, Throw3],
  },
  {
    id: 9,
    category: "Mens",
    name: "Terry Oversized Tee",
    newArrival: true,
    price: 999,
    images: [TomJerry, TomJerry1, TomJerry2],
  },
  {
    id: 10,
    category: "Mens",
    name: "Oversized T-shirt",
    newArrival: true,
    price: 799,
    images: [Venom, Venom1, Venom2, Venom3],
  },
  {
    id: 11,
    category: "Women",
    name: "Standard T-shirt",
    newArrival: false,
    price: 399,
    images: [Angle, Angle1, Angle2],
  },
  {
    id: 12,
    category: "Women",
    name: "Standard T-shirt",
    newArrival: false,
    price: 399,
    images: [Angle, Angle1, Angle2],
  },
  {
    id: 13,
    category: "Women",
    name: "Bomber Jacket",
    newArrival: false,
    price: 999,
    images: [Bomber, Bomber1, Bomber2, Bomber3],
  },
  {
    id: 14,
    category: "Women",
    name: "White Crop Top",
    newArrival: true,
    price: 599,
    images: [Butterfly, Butterfly1, Butterfly2, Butterfly3],
  },
  {
    id: 15,
    category: "Women",
    name: "Classic T-shirt",
    newArrival: true,
    price: 349,
    images: [Classic, Classic1, Classic2, Classic3],
  },
  {
    id: 16,
    category: "Women",
    name: "Oversized T-shirt",
    newArrival: false,
    price: 499,
    images: [Cool, Cool1, Cool2, Cool3],
  },
  {
    id: 17,
    category: "Women",
    name: "Crop Top",
    newArrival: true,
    price: 699,
    images: [Croptop, Croptop1, Croptop2, Croptop3],
  },
  {
    id: 18,
    category: "Women",
    name: "Cropped Hoodie",
    newArrival: true,
    price: 1199,
    images: [Cropped, Cropped1, Cropped2, Cropped3, Cropped4],
  },
  {
    id: 19,
    category: "Women",
    name: "Oversized T-shirt",
    newArrival: true,
    price: 799,
    images: [Hygee, Hygee1, Hygee2],
  },
  {
    id: 20,
    category: "Kids",
    name: "Dress",
    newArrival: true,
    price: 499,
    images: [dress, dress1],
  },
  {
    id: 21,
    category: "Kids",
    name: "Shirt",
    newArrival: true,
    price: 699,
    images: [shirt, shirt1],
  },
  {
    id: 22,
    category: "Kids",
    name: "Sweater",
    newArrival: true,
    price: 699,
    images: [sweater, sweater1],
  },
];
