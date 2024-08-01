import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ChatbotList } from "./chatbot/ChatbotList";
import { ChatbotCreate } from "./chatbot/ChatbotCreate";
import { ChatbotEdit } from "./chatbot/ChatbotEdit";
import { ChatbotShow } from "./chatbot/ChatbotShow";
import { RfpList } from "./rfp/RfpList";
import { RfpCreate } from "./rfp/RfpCreate";
import { RfpEdit } from "./rfp/RfpEdit";
import { RfpShow } from "./rfp/RfpShow";
import { InteractionList } from "./interaction/InteractionList";
import { InteractionCreate } from "./interaction/InteractionCreate";
import { InteractionEdit } from "./interaction/InteractionEdit";
import { InteractionShow } from "./interaction/InteractionShow";
import { ResponseList } from "./response/ResponseList";
import { ResponseCreate } from "./response/ResponseCreate";
import { ResponseEdit } from "./response/ResponseEdit";
import { ResponseShow } from "./response/ResponseShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"GenAIChatbot"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Chatbot"
          list={ChatbotList}
          edit={ChatbotEdit}
          create={ChatbotCreate}
          show={ChatbotShow}
        />
        <Resource
          name="Rfp"
          list={RfpList}
          edit={RfpEdit}
          create={RfpCreate}
          show={RfpShow}
        />
        <Resource
          name="Interaction"
          list={InteractionList}
          edit={InteractionEdit}
          create={InteractionCreate}
          show={InteractionShow}
        />
        <Resource
          name="Response"
          list={ResponseList}
          edit={ResponseEdit}
          create={ResponseCreate}
          show={ResponseShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
