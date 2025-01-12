import { RootDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
export const useAppSelector = useSelector.withTypes<RootState>();
export const useRootDispatch = useDispatch.withTypes<RootDispatch>();
/*i make a custom hooks for Redux with TypeScript to avoid repetitive typing:
  useAppSelector: A typed version of useSelector to infer the RootState automatically.
  useRootDispatch: A typed version of useDispatch to infer RootDispatch automatically.
 These hooks simplify Redux usage by eliminating the need to specify types repeatedly in each component*/
