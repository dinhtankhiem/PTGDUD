import { images } from "../config/imagePaths";

export const recipes = [
  { id: "1", title: "Salad Caprese", time: "32 mins", image: images.recipe1, author: "Emma Gonzalez" },
  { id: "2", title: "Italian-style Tomato", time: "20 mins", image: images.recipe2, author: "Luna Hart" },
  { id: "3", title: "Lotus Delight Salad", time: "26 mins", image: images.recipe3, author: "Siena Lee" },
  { id: "4", title: "Salad With Cabbage", time: "24 mins", image: images.recipe4, author: "Noah Brooks" },
  { id: "5", title: "Snack Cakes", time: "15 mins", image: images.recipe5, author: "Mia Stone" },
  { id: "6", title: "Sunny-side Eggs", time: "12 mins", image: images.recipe6, author: "Leo Ahn" },
  { id: "7", title: "Shrimp Spaghetti", time: "35 mins", image: images.recipe7, author: "Olivia Tran" }
];

export const editorPicks = recipes.slice(0, 3).map((item) => ({
  ...item,
  description: "A bright, fresh dish with balanced flavor and simple preparation."
}));
