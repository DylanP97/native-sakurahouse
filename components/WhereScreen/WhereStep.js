import WhereCard from "./WhereCard";
import { View, Text, Image } from "react-native";
import ramen from "../../assets/sakuraFestival/ramen.png";
import bento from "../../assets/sakuraFestival/bento.png";
import sakura from "../../assets/sakuraFestival/sakura-1.png";

export default function WhereStep({ handleWhereChoice }) {

  return (
    <View className="flex flex-col items-center mx-auto w-full">
      <View className="h-24 w-24 my-6">
        <Image
          className="max-w-full max-h-full"
          source={sakura}
          alt='sakura-logo'
        />
      </View>
      <Text className="tracking-widest font-bold text-center px-4 text-[30px] mb-2">
        Where will you be eating today?
      </Text>
      <View className="flex flex-row items-center mt-6 w-full">
        <WhereCard
          label="Eat In"
          imageSrc={ramen}
          handleWhereChoice={handleWhereChoice}
        />
        <WhereCard
          label="Take Out"
          imageSrc={bento}
          handleWhereChoice={handleWhereChoice}
        />
      </View>
    </View>
  );
}
