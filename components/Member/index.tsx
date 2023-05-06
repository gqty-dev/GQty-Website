import {
  View,
  Text,
  Avatar,
  Tooltip,
  TooltipProps,
  Actionable,
  ActionableProps,
} from "reshaped/bundle";
import type * as G from "reshaped/types/global";

interface MyComponentProps {
  name: string;
  image: string;
  link: string;
}

const Members = ({ name, image, link }) => {
  return (
    <Actionable href={link} attributes={{ role: "button", target: "_blank" }}>
      <View direction="column" align="center" gap={2} position="relative">
        {/* Status ring */}

        <View overflow="hidden">
          {/* Avatar image */}
          <Avatar
            src={image}
            color="neutral"
            size={{ xl: 28, l: 24, m: 20, s: 16 }}
            className="border-4  border-surface-900"
          />
        </View>
        {/* <View paddingBottom={4}>
          <Text variant="body-medium-1" className="text-surface-200 ">
          {name}
          </Text>
        </View> */}
        <View
          position="absolute"
          height="100%"
          className="opacity-0 hover:opacity-100 transform transition-all duration-400 scale-75 hover:scale-110 hover:-translate-y-10 "
        >
          <View
            padding={[2, 4]}
            className="bg-surface-50"
            borderRadius="medium"
          >
            <Text
              variant="body-medium-2"
              align="center"
              className="text-surface-900"
            >
              {name}
            </Text>
          </View>
        </View>
      </View>
    </Actionable>
  );
};

export default Members;
