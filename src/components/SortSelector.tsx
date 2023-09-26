import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { SORT_ORDERS } from "../constants/SortSelector";

interface Props {
  onSelectSortFilter: (sortFilter: string) => void;
  selectedSortFilter: string;
}

export default function SortSelector({
  onSelectSortFilter,
  selectedSortFilter,
}: Props) {
  const sortFilter = SORT_ORDERS.find(
    (sortOrder) => sortOrder.value === selectedSortFilter
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={BsChevronDown}>
        {sortFilter?.name || "Relevance"}
      </MenuButton>
      <MenuList>
        {SORT_ORDERS.map((sort_order) => (
          <MenuItem
            onClick={() => onSelectSortFilter(sort_order.value)}
            key={sort_order.id}
          >
            {sort_order.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
