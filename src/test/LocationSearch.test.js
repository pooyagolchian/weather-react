/* eslint-disable */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { LocationSearch } from "../components/LocationSearch";
import MOCK_WEATHER from "./mock";
import reducer, { weathersAction } from "../store/weathers";

const server = setupServer(
  rest.get("/images/search", (req, res, ctx) => {
    return res(ctx.json(MOCKED_DOG));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Weather functionality", () => {
  test("If search city and click on search location show on page", async () => {
    render(
      <LocationSearch
        onSearch={() => {
          MOCK_WEATHER;
        }}
      />
    );
    expect(
      await screen.findByRole("button", { name: /Search/i })
    ).toBeDisabled();
    userEvent.type(screen.getByRole("textbox"), "Tehran");
    expect(
      await screen.findByRole("button", { name: /Search/i })
    ).toBeEnabled();
    userEvent.click(await screen.findByRole("button", { name: /Search/i }));
  });
});
