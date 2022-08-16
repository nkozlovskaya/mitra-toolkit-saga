import { useAppDispatch } from "./redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../store//actions";

export const useActions = () => {
  const dispacth = useAppDispatch();
  return bindActionCreators(ActionCreators, dispacth);
};
