import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../store//actions";

export const useActions = () => {
  const dispacth = useDispatch();
  return bindActionCreators(ActionCreators, dispacth);
};
