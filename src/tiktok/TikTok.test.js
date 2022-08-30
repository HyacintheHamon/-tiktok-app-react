import { render, screen } from "@testing-library/react";
import TikTok from "./TikTok";

test("renders learn react link", () => {
  render(<TikTok />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
