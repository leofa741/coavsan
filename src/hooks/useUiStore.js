import { useDispatch, useSelector } from "react-redux";
import { uiSlice } from "../store";


export const useUiStore = () => {


    const dispatch = useDispatch();
    const isDateModalOpen = useSelector((state) => state.ui.isDateModalOpen);
    const onDateModalOpen = () => dispatch(uiSlice.actions.onDateModalOpen());
    const onDateModalClose = () => dispatch(uiSlice.actions.onDateModalClose());

    return {
        isDateModalOpen,
        onDateModalOpen,
        onDateModalClose,
    };
};

