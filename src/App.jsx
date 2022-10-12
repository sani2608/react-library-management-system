import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "@mui/material";
import { NotificationContainer } from "react-notifications";
import { UserProvider } from "./context/user-context";
import { AppLayout } from "./components/layout/app-layout";
import "react-notifications/lib/notifications.css";
const App = () => (
  <UserProvider>
    <Suspense fallback={null}>
      <Container className="page-container">
        <Router>
          <AppLayout />
          <NotificationContainer />
        </Router>
      </Container>
    </Suspense>
  </UserProvider>
);

export default App;
