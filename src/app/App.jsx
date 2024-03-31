import { Provider } from "react-redux";
import { Main } from "../page/Main";
import { FullPageWrapper } from "../shared/ui/FullPageWrapper";
import { store } from "./models/appStore";

function App() {
    return (
        <Provider store={store}>
            <FullPageWrapper>
                <Main />
            </FullPageWrapper>
        </Provider>
    );
}

export default App;
