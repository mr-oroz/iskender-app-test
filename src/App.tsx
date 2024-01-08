import './App.scss';
import AppTitle from './components/AppTitle';
import CategoryList from './components/CategoryList';
import Header from './components/Header';
import Nav from './components/Nav';
import NewList from './components/NewList';
import ProductList from './components/ProductList';
import AddressCard from './components/AddressCard/index';
import AddressList from './components/AddressList';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Nav/>
      <AppTitle title='Категории' text={null}/>
      <CategoryList/>
      <AppTitle title='Хиты продаж' text={'перейти в каталог'}/>
      <ProductList active={false}/>
      <AppTitle title='Новости' text={'все'}/>
      <NewList/>
      <AppTitle title='Аукционные товары' text={'перейти в каталог'}/>
      <ProductList active={true}/>
      <AppTitle title='Адреса магазинов' text={'все'}/>
      <AddressList/>
      <Footer/>
    </div>
  );
};

export default App;