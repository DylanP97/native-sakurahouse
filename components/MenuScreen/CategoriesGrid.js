import React from "react";
import CategoryCard from "./CategoryCard";
import { View } from "react-native-animatable";

const CategoriesGrid = ({ categories, categorySelected, setCategorySelected }) => {

  return (
    <View className="flex flex-row flex-wrap mt-4 justify-center">
      {categories.map((category) => (
        <CategoryCard
            category={category}
            key={category.label}
            categorySelected={categorySelected}
            setCategorySelected={setCategorySelected}
        />
      ))}
    </View>
  );
};

export default CategoriesGrid;
