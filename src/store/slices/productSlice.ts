import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from "axios";

export type SearchProductParams = {
  search: string;
};

export const fetchProduct = createAsyncThunk <Product[], SearchProductParams>(
    'product/fetchProduct',
    async (params?) => {
      const {  search } = params
      const { data } = await axios
        .get<Product[]>(`https://628ce7a43df57e983ed86e96.mockapi.io/Man?&search=${search}`)
      return data
    }
  )

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
  }
export type Product = {
    id: string ;
    title: string;
    price: number;
    image: string;
    sizes: number[];
    types: number[];
    rating: number;
  }
export interface ProductSliceState {
    items: Product[];
    status: Status;
  }  

const initialState: ProductSliceState = {
    items: [],
    status: Status.LOADING,
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setItems: (state, action:PayloadAction<Product[]>) => {
            state.items = action.payload
        },
    },
      extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {
          state.status = Status.LOADING;
          state.items = [];
        });
    
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
          state.items = action.payload;
          state.status = Status.SUCCESS;
        });
    
        builder.addCase(fetchProduct.rejected, (state ) => {
          state.status = Status.ERROR;
          state.items = [];
        });
      },
      
})

export const { setItems } = productSlice.actions

export default productSlice.reducer
