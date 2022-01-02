import {getByTestId, screen} from "@testing-library/dom";
import {toHaveClass} from "@testing-library/jest-dom";
import VerticalLayout from "../views/VerticalLayout";
import {localStorageMock} from "../__mocks__/localStorage.js";
import {ROUTES, ROUTES_PATH} from "../constants/routes";
import BillsUI from "../views/BillsUI.js";
import Router from "../app/Router";
import {bills} from "../fixtures/bills.js";
import Bills from "../containers/Bills";

describe("Given I am connected as an employee", () => {
  describe("When I am on Bills Page", () => {
    beforeEach(() => {
      // Create a replica of the localStorage object, because we are not in a browser
      Object.defineProperty(window, "localStorage", {value: localStorageMock});
      // Ok now that we have a localStorage, we can use it to sote an user
      window.localStorage.setItem(
        "user",
        JSON.stringify({
          type: "Employee",
          email: "yoann@bdl.com",
          password: "azerty",
          status: "connected",
        })
      );
      // Set the current window location to the right path/adress. Like : http://127.0.0.1:8080/#employee/bills in the browser
      Object.defineProperty(window, "location", {
        value: {
          hash: ROUTES_PATH["Bills"],
        },
      });
    });

    test("Then bill icon in vertical layout should be highlighted", async () => {
      document.body.innerHTML = `<div id="root"></div>`;
      await Router();
      expect(screen.getByTestId("icon-window")).toHaveClass("active-icon");
    });

    test("Then bills should be ordered from earliest to latest", () => {
      const html = BillsUI({data: bills});
      document.body.innerHTML = html;
      const dates = screen
        .getAllByText(
          /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/i
        )
        .map((a) => a.innerHTML);
      const antiChrono = (a, b) => (a < b ? 1 : -1);
      const datesSorted = [...dates].sort(antiChrono);
      expect(dates).toEqual(datesSorted);
    });
  });
});
