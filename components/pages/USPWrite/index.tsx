import Image from "next/image";
import Link from "next/link";
import { Skeleton, Text, View } from "reshaped/bundle";
import { Direction } from "reshaped/components/View/View.types";
import { Responsive } from "reshaped/types/global";

const USPWrite = () => {
  return (
    <>
      <View
        direction="row"
        gap={15}
        align="stretch"
        paddingTop={24}
        paddingBottom={16}
      >
        <View.Item columns={8}>
          <View width="100%" height="100%" position="relative">
            <div className="absolute rounded-full aspect-square bottom-[24px] right-[24px] filter blur-3xl overflow-hidden z-0">
              <View width={40} height={40} className="bg-[#DA58B3] "></View>
            </div>
            <View
              position="relative"
              // borderColor="neutral-faded"
              className="border rounded-2xl border-surface-800 filter backdrop-blur-xl bg-surface-900 opacity-80"
              overflow="hidden"
            >
              <div className="w-full overflow-hidden">
                <Image
                  src="/usp_write_dark.gif"
                  width={600}
                  height={105}
                  alt="USP Read"
                  object-fit="contain"
                  className="w-full mix-blend-lighten"
                />
              </div>
            </View>
            <Image
              src="/Hexagon.svg"
              alt="Hexagon"
              width={40}
              height={40}
              className="absolute top-40 left-[-16px] -rotate-45 opacity-80"
            />
          </View>
        </View.Item>
        <View.Item columns={4} grow>
          <View direction="column" height="100%">
            <View.Item grow>
              <View direction="column" paddingTop={5} gap={6}>
                <Text variant="title-1">Write</Text>
                <View>
                  <Text variant="body-1" className="text-surface-200">
                    Create, Update, Delete? Call the function - that’s it...
                    <br />
                    Including Optimistic Response!
                  </Text>
                </View>
              </View>
            </View.Item>
            <View paddingBottom={8}>
              <Link href={"#playground"}>
                <Text variant="body-strong-1">Try this feature →</Text>
              </Link>
            </View>
          </View>
        </View.Item>
      </View>
    </>
  );
};

export default USPWrite;
