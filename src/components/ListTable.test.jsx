import { render, screen, fireEvent } from "@testing-library/react";
import ListTable from "./ListTable";

test("select, deselect, and remove buttons work", async () => {
  const removeItemMockFunction = jest.fn();
  const selectItemMockFunction = jest.fn();
  const deselectItemMockFunction = jest.fn();
  render(
    <ListTable
      deselectItem={deselectItemMockFunction}
      removeItem={removeItemMockFunction}
      selectItem={selectItemMockFunction}
      listTableData={{
        headers: ["Id", "Name", "Category", "Delivery Method"],
        list: [
          {
            id: 45,
            name: "Naan",
            category: "bread",
            deliveryMethod: "Air",
          },
          {
            id: 23,
            name: "bacon",
            category: "meat",
            deliveryMethod: "Ground",
          },
        ],
      }}
    />
  );
  const removeButtons = await screen.findAllByText(/Remove/i);
  const selectButtons = await screen.findAllByText(/Select/i);
  const deselectButtons = await screen.findAllByText(/Deselect/i);

  expect(screen.getByText(/Naan/i)).toBeInTheDocument();
  expect(screen.getByText(/Bacon/i)).toBeInTheDocument();

  expect(removeItemMockFunction).toBeCalledTimes(0);
  expect(selectItemMockFunction).toBeCalledTimes(0);
  expect(deselectItemMockFunction).toBeCalledTimes(0);

  fireEvent(
    selectButtons[0],
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(removeItemMockFunction).toBeCalledTimes(0);
  expect(selectItemMockFunction).toBeCalledTimes(1);
  expect(deselectItemMockFunction).toBeCalledTimes(0);

  fireEvent(
    removeButtons[1],
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  fireEvent(
    removeButtons[0],
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(removeItemMockFunction).toBeCalledTimes(2);
  expect(selectItemMockFunction).toBeCalledTimes(1);
  expect(deselectItemMockFunction).toBeCalledTimes(0);

  fireEvent(
    deselectButtons[0],
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(removeItemMockFunction).toBeCalledTimes(2);
  expect(selectItemMockFunction).toBeCalledTimes(1);
  expect(deselectItemMockFunction).toBeCalledTimes(1);
});
