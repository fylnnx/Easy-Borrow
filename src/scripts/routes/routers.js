import mainPages from '../views/pages/home';
import PagePinjam from '../views/pages/pinjam';
// import Detail from '../views/pages/detail';

const routes = {
  '/': mainPages, // default page
  '/home': mainPages,
  '/pinjam': PagePinjam,
//   '/detail/:id': Detail,
};

export default routes;
