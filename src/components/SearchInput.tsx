import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

export default function SearchInput() {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        type="text"
        placeholder="Search Games"
        borderRadius={50}
        variant="filled"
      />
    </InputGroup>
  );
}