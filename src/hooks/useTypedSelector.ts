import {TypedUseSelectorHook, useSelector} from "react-redux";
import {ReducerType} from "../store/reducers/reducer";

export const useTypedSelector: TypedUseSelectorHook<ReducerType> = useSelector