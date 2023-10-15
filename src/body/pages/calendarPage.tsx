import { Provider } from "react-redux";
import { Add } from "../components/add";
import { List } from "../components/list";
import { store } from "../../store/store";

export function CalendarPage (){
    return (
            <div className="content">
              <h1>Calendar Page</h1>
              <Provider store={store}>
              <Add/>
              <List/>
              </Provider>
            </div>)
}