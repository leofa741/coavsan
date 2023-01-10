import { useDispatch, useSelector } from "react-redux";
import { onDateChange } from "../store";


export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const { events,activeEvent, }= useSelector((state) => state.calendar);

    const setDateChange = (calendarEvent) => {

        dispatch(onDateChange(calendarEvent));       

    };



    return {
        events,
        activeEvent,

        setDateChange,
    };
 
}
