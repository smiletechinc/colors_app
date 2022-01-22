import { useSelector, TypedUseSelectorHook } from "react-redux";

export interface RootState {
  routing: ColorState
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;