import { addManyCustomersAction } from "../store/customerReducer";

export function fetchCustomers() {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch(addManyCustomersAction(json)));
  };
}
