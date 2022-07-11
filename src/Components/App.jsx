import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Container} from './Container/Container';
import Header from './Header/Header';
import GetTable from './Table/Table';
import Footer from './Footer/Footer';

function App() {


  return (
      <>
        <Header/>
        <main>
        <Container>
          <GetTable/>
        </Container>
        </main>
        <Footer/>
        

        <ToastContainer
            theme="colored" 
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
          />
      </>
    )
}

export default App;