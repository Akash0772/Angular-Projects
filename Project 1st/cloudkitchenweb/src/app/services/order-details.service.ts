import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // foodDetails
  foodDetails = [
    {
      id:1,
      foodName:"Paneer Grilled Sandwitch",
      foodDetail:"Pan-fried masala paneer",
      foodPrice:200,
      foodImg:"https://unsplash.com/photos/gwBcamFtPr4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
    },
    {
      id:2,
      foodName:"Veggie Supreme",
      foodDetail:"Onion| Green Capsicum|Mushroom |black olvies, sweet corn , Red paprika topped with cheese",
      foodPrice:299,
      foodImg:"https://unsplash.com/photos/6k5cGTWluTs?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
    },
    {
      id:3,
      foodName:"Paneer Burger",
      foodDetail:"Paneer",
      foodPrice:149,
      foodImg:"https://unsplash.com/photos/88YAXjnpvrM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
    },
    {
      id:4,
      foodName:"Veg Masala Roll In Naan",
      foodDetail:"A homely mix of mashed patato andd veggies, seasoned with Indian spices. Afilling sure to take you back to mom's kitchen",
      foodPrice:140,
      foodImg:"https://unsplash.com/photos/Znvxeud6sDc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetail:"(Eggless) Indulge in richly decadent chocalate brownie crafted with loved & tooped with bitter-sweet chocolate",
      foodPrice:105,
      foodImg:"https://unsplash.com/photos/dKT6Q7q2UKs?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetail:"Oreo Ice Cream",
      foodPrice:219,
      foodImg:"https://unsplash.com/photos/QLSh4y2v93c?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
    },
  ]
}
