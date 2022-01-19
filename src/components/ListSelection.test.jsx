import { render, screen } from "@testing-library/react";
import ListSelection from "./ListSelection";

test("Table displays content", async () => {
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

  expect(screen.getByText(/45/i)).toBeInTheDocument();
  expect(screen.getByText(/Naan/i)).toBeInTheDocument();
  expect(screen.getByText(/bread/i)).toBeInTheDocument();
  expect(screen.getByText(/Air/i)).toBeInTheDocument();
});
