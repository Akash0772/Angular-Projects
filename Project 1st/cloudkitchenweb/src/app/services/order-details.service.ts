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
      // foodImg:"https://unsplash.com/photos/gwBcamFtPr4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id:2,
      foodName:"Veggie Supreme",
      foodDetail:"Onion| Green Capsicum|Mushroom |black olvies, sweet corn , Red paprika topped with cheese",
      foodPrice:299,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id:3,
      foodName:"Paneer Burger",
      foodDetail:"Paneer",
      foodPrice:149,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id:4,
      foodName:"Veg Masala Roll In Naan",
      foodDetail:"A homely mix of mashed patato andd veggies, seasoned with Indian spices. Afilling sure to take you back to mom's kitchen",
      foodPrice:140,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetail:"(Eggless) Indulge in richly decadent chocalate brownie crafted with loved & tooped with bitter-sweet chocolate",
      foodPrice:105,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetail:"Oreo Ice Cream",
      foodPrice:219,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    },
  ]
}
