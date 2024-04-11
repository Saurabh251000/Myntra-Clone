/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/ItemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

function FetchItems() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    dispatch(fetchStatusActions.markFetchingStarted());

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8000/api/products", { signal })
      .then((res) => res.json())
      .then(({ products }) => {
        console.log(products[0]);
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(products[0]));
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error fetching items:", error);
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus, dispatch]);

  return (
    <>
      {/* Your component JSX goes here if needed */}
    </>
  );
}

export default FetchItems;
