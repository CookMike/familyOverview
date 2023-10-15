import { configureStore } from "@reduxjs/toolkit";
import { PersonSlice } from "./features/personSlice";
import { ToDoSlice } from "./features/toDoSlice";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
    reducer:{
        person:PersonSlice.reducer,
        todo:ToDoSlice.reducer
    }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook < ReturnType < typeof store.getState > >= useSelector;