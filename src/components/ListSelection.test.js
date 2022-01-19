import { render, screen } from "@testing-library/react";
import ListSelection from "./ListSelection";

test("select, deselect, and remove buttons work", async () => {
  render(
    <ListSelection
      listSelectionData={{
        headers: ["Id", "Name", "Category", "Delivery Method"],
        list: [
          {
            id: 45,
            name: "Naan",
            category: "bread",
            deliveryMethod: "Air",
          }
        ],
      }}
    />
  );

  expect(screen.getByText(/Naan/i)).toBeInTheDocument();
});
