import React from "react";
import { cleanup, render } from "@testing-library/react-native";
import Country from "../screens/Country";
import axios from "axios";
import Weather from "../screens/Weather";

afterEach(cleanup);

describe("Country", () => {
  
  test("fetch data from api", async () => {
    const response = await axios.get("http://api.weatherstack.com/current?access_key=68f83f417142a947f0a6b9f6f1f427d8&query=New Delhi");
    expect(response.status).toEqual(200);
  });

  test('should find the title', () => {
    const title = 'Weather';
    const mockedParams = { route: { params: { capital: "New Delhi" } } };
    const { getByText } = render(<Weather {...mockedParams} />);
    const foundTitle = getByText(title);
    expect(foundTitle.props.children).toEqual(title);
  });

});