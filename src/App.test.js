import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("Todo App", () => {

  test("renders application title", () => {
    render(<App />);
    const title = screen.getByText(/Techaxis TODO lists Dockerized/i);
    expect(title).toBeInTheDocument();
  });

  test("shows empty tasks message when no tasks exist", () => {
    render(<App />);
    const message = screen.getByText(/You have no tasks/i);
    expect(message).toBeInTheDocument();
  });

  test("new task button exists", () => {
    render(<App />);
    const button = screen.getByText(/New Task/i);
    expect(button).toBeInTheDocument();
  });

  test("opens modal when new task button is clicked", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /New Task/i });
    fireEvent.click(button);
    const modalTitles = screen.getAllByText(/New Task/i);
    expect(modalTitles.length).toBeGreaterThan(1);
   });

  test("task input fields appear in modal", () => {
    render(<App />);
    
    fireEvent.click(screen.getByText(/New Task/i));

    const titleInput = screen.getByPlaceholderText(/Task Title/i);
    const summaryInput = screen.getByPlaceholderText(/Task Summary/i);

    expect(titleInput).toBeInTheDocument();
    expect(summaryInput).toBeInTheDocument();
  });


});
