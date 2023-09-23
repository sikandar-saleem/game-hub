import { Platform } from "../hooks/useGame";
import { HStack, Icon } from "@chakra-ui/react";

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

// This object contains `N` string type keys with IconType value
const ICON_MAPPER: { [key: string]: IconType } = {
  pc: FaWindows,
  FaPlaystation: FaPlaystation,
  xbox: FaXbox,
  apple: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  ios: MdPhoneIphone,
  nintendo: SiNintendo,
  web: BsGlobe,
};

interface Props {
  platforms: Platform[];
}

export default function PlatformIconList({ platforms }: Props) {
  return (
    <>
      <HStack marginY={2}>
        {platforms.map((platform) => (
          <Icon
            key={platform.id}
            as={ICON_MAPPER[platform.slug]}
            color="gray.500"
          />
        ))}
      </HStack>
    </>
  );
}
