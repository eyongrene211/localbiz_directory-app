import React             from 'react';

import CreatableSelect   from 'react-select/creatable';
// import { colourOptions } from '../data';
const menuOptions = [
  { value: "coffee",       label: "Coffee" },
  { value: "espresso",     label: "Espresso" },
  { value: "cappuccino",   label: "Cappuccino" },
  { value: "latte",        label: "Latte" },
  { value: "iced-tea",     label: "Iced Tea" },
  { value: "fresh-juice",  label: "Fresh Juice" },
  { value: "burger",       label: "Burger" },
  { value: "cheese-burger",label: "Cheese Burger" },
  { value: "veggie-burger",label: "Veggie Burger" },
  { value: "fries",        label: "Fries / Chips" },
  { value: "sandwich",     label: "Sandwich" },
  { value: "club-sandwich",label: "Club Sandwich" },
  { value: "pizza",        label: "Pizza Slice" },
  { value: "pasta",        label: "Pasta" },
  { value: "salad",        label: "Garden Salad" },
  { value: "chicken-wings",label: "Chicken Wings" },
  { value: "grilled-fish", label: "Grilled Fish" },
  { value: "dessert",      label: "Dessert Plate" },
  { value: "ice-cream",    label: "Ice Cream" },
  { value: "cake",         label: "Cake Slice" }
];

export default () => <CreatableSelect isMulti options={menuOptions} />