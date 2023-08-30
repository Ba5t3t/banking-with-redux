import { useDispatch, useSelector } from "react-redux";
import {
  addCustomerAction,
  removeCustomerAction,
  addManyCustomersAction,
} from "./store/customerReducer";
import { fetchCustomers } from "./asyncActions/customers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  function addCash(cash) {
    dispatch({ type: "ADD_CASH", payload: cash });
  }

  function getCash(cash) {
    dispatch({ type: "GET_CASH", payload: cash });
  }

  function addCustomer(name) {
    const customer = {
      name,
      id: Math.random(),
    };
    dispatch(addCustomerAction(customer));
  }

  function removeCustomer(customer) {
    dispatch(removeCustomerAction(customer.id));
  }

  return (
    <div className='App'>
      <div>{cash}</div>
      <div>
        <button
          onClick={() => {
            addCash(Number(prompt()));
          }}
        >
          Пополнить счет
        </button>
        <button
          onClick={() => {
            getCash(Number(prompt()));
          }}
        >
          Снять со счета
        </button>
        <button
          onClick={() => {
            addCustomer(prompt());
          }}
        >
          Добавить клиента
        </button>
        <button
          onClick={() => {
            dispatch(fetchCustomers());
          }}
        >
          Получить клиентов из базы
        </button>
      </div>
      {!customers.length ? (
        <div>Клиенты отсутствуют!</div>
      ) : (
        <div>
          {customers.map((customer) => (
            <div
              style={{
                fontSize: "3rem",
                border: "1px solid black",
                padding: "10px",
                marginTop: 5,
              }}
              onClick={() => {
                removeCustomer(customer);
              }}
            >
              {customer.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
