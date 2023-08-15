import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "../icecream/icecreamSlice";

function IcecreamView() {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of ice creams - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice cream</button>
      <button onClick={() => dispatch(restocked(10))}>
        Restock ice creams
      </button>
    </div>
  );
}

export default IcecreamView;
