import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "..";

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppDispatch, useAppSelector };
