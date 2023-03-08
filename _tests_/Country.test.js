import React from "react";
import { cleanup, render } from "@testing-library/react-native";
import Country from "../screens/Country";
import axios from "axios";

afterEach(cleanup);

describe("Country", () => {
  
  test("fetch data from api", async () => {
    const response = await axios.get("https://restcountries.com/v2/name/India?fullText=true");
    expect(response.status).toEqual(200);
  });

  test("should find the button via testId", () => {
    const mockedParams = { route: { params: { country: "India" } } };
    const testIdName = "capitalButton";
    const { getByTestId } = render(<Country {...mockedParams} />);
    const foundButton = getByTestId(testIdName);
    expect(foundButton).toBeTruthy();
  });

  test('should find the button title', () => {
    const title = 'Capital Weather';
    const mockedParams = { route: { params: { country: "India" } } };
    const { getByText } = render(<Country {...mockedParams} />);
    const foundButtonTitle = getByText(title);
    expect(foundButtonTitle.props.children).toEqual(title);
  });

});
