import { fireEvent, render, screen } from "@testing-library/react";
import Table from "./Table";

test("Table displays and buttons work", async () => {
  const function1Mock = jest.fn();
  const function2Mock = jest.fn();
  render(
    <Table
      headers={[
        "Id",
        "Label",
        "Description",
        "Something Cool",
        "A Fifth Thing",
      ]}
      rows={[
        {
          id: 22,
          label: "shovel",
          description: "digging tool",
          somethingCool: "meant for digging",
          aFifthThing: "just to make sure it works",
        },
        {
          id: 28,
          label: "hammer",
          description: "hitting tool",
          somethingCool: "meant for hitting things",
          aFifthThing: "also to make sure it works",
        },
      ]}
      setButtons={(item) => (
        <>
          <button type="button" onClick={() => function1Mock(item)}>
            Button 1
          </button>
          <button type="button" onClick={() => function2Mock(item)}>
            Button 2
          </button>
        </>
      )}
    />
  );

  // Make sure first item displays
  expect(screen.getByText(/22/i)).toBeInTheDocument();
  expect(screen.getByText(/shovel/i)).toBeInTheDocument();
  expect(screen.getByText(/digging tool/i)).toBeInTheDocument();
  expect(screen.getByText(/meant for digging/i)).toBeInTheDocument();
  expect(screen.getByText(/just to make sure it works/i)).toBeInTheDocument();

  // Make sure second item displays
  expect(screen.getByText(/28/i)).toBeInTheDocument();
  expect(screen.getByText(/hammer/i)).toBeInTheDocument();
  expect(screen.getByText(/hitting tool/i)).toBeInTheDocument();
  expect(screen.getByText(/meant for hitting things/i)).toBeInTheDocument();
  expect(screen.getByText(/also to make sure it works/i)).toBeInTheDocument();

  const buttons1 = screen.getAllByText(/button 1/i);
  const buttons2 = screen.getAllByText(/button 2/i);

  fireEvent(
    buttons1[0],
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  fireEvent(
    buttons2[1],
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(function1Mock).toBeCalledWith({
    id: 22,
    label: "shovel",
    description: "digging tool",
    somethingCool: "meant for digging",
    aFifthThing: "just to make sure it works",
  });

  expect(function2Mock).toBeCalledWith({
    id: 28,
    label: "hammer",
    description: "hitting tool",
    somethingCool: "meant for hitting things",
    aFifthThing: "also to make sure it works",
  });
});
