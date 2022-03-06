/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-unnecessary-act */
import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom/extend-expect"

import Input from "../Input";

let container = null;
beforeEach(() => {
  // Seta um componente da DOM para testes
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // Reseta ao finalizar os testes
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders input", () => {
    act(() => {
        render(<Input />, container);
    });
    expect(container.textContent).toBe("");

    act(() => {
        render(<Input label="Mateus" />, container);
    });
    expect(container.textContent).toBe("Mateus");
});

it("change input value", () => {
    act(() => {
        render(<Input label="Mateus" />, container);
    });
    userEvent.type(container.querySelector('input'), "Mateus Mangueira");
    expect(container.querySelector('input')).toHaveValue("Mateus Mangueira");
});