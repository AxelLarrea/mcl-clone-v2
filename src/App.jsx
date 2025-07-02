import { Route } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Home from './pages/Home';
import Search from './pages/Search';
import Product from './pages/Product';
import Header from './components/general/Header';
import Footer from './components/general/Footer';
import './styles/general/styles.css';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false
        }
    }
});

const App = () => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Header/>

                <Route path="/" component={Home}/>
                <Route path="/search/:query" component={Search}/>
                <Route path="/product/:id" component={Product}/>

                <Footer/>
            </QueryClientProvider>
        </>
    );
}
 
export default App;
