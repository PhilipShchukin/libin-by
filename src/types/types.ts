import { ProductSliceState } from "../store/slices/productSlice";
import { SearchSliceState } from "../store/slices/searchSlice";

export type Props = {
    children: React.ReactNode;
  };
export type FavouritesType = {
    [index: string]: boolean;
  };
  
  export type user ={
    email:string | null
  }
  
  export  type RootState = {
    product: ProductSliceState;
    search: SearchSliceState;
    history: {
      search: string;
    }[];
    favourites: { [index: string]: boolean };
    user: user ;
  };
  

  
  
  