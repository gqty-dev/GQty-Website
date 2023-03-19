import Image from "next/image";
import { Direction } from "readline";
import { Skeleton, Text, View } from "reshaped/bundle";
import { Responsive } from "reshaped/types/global";

export default function Write() {
  return (
    <>
      <View direction="row-reverse" gap={15}>
        <View.Item columns={4} grow={true}>
          <View direction="column" paddingTop={5} gap={6}>
            <Text variant="title-1">Write</Text>
            <Text variant="body-1">
              Create, Update, Delete? Call the function - that’s it...
            </Text>
          </View>
          <View paddingBottom={8} direction="row" align="end">
            <Text variant="body-strong-1">Try this feature →</Text>
          </View>
        </View.Item>
        <View.Item columns={8}>
          <View direction="column">
            <Skeleton height={100} borderRadius="medium" />
            <Image
              src="/Hexagon.svg"
              alt="Hexagon"
              width={85}
              height={85}
              className="absolute bottom-32 left-[-40px] -rotate-45"
            />
          </View>
        </View.Item>
      </View>
    </>
  );
}