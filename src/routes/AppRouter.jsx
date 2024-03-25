import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { Home, CounterExample, Main, Productd, Products, DataProduct } from '../componets';

export const AppRouter = () =>{

    //creating route const 
    const routes = createBrowserRouter([
        {
            path:'/',
            element:<Main/>,
            children:[
                {
                    path:'/',
                    element: <Home/>
                },
                {
                    path:'/counter',
                    element:<CounterExample/>
                },
                {
                    path:'/products',
                    element:<Products/>
                },
                {
                    path:'/product/:id',
                    element:<DataProduct/>
                },
                {
                    path:'*',
                    element: <Navigate to='/' />
                }
            ]
        }
    ]);

    return (
        <RouterProvider router={routes} />
    )

}