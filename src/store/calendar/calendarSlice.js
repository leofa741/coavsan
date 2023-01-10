
// calendarSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";


const tempevent = {
    _id: new Date().getTime(),
    title: 'Event very long title',
    notes : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    amount: 200,
    allDay: true,
    start: new Date(2023, 1, 4),
    end: addHours (new Date(2023, 1, 4), 3),
    bgColor: '#fafafa',
    notesColor: 'black',
    user: {
        _id: '123',
        name: 'Carlos'
    }

}

export const calendarSlice = createSlice({
    name: "calendar",
    initialState: {
        events: [tempevent],
      activeEvent: null,

    },
    reducers: {
        onDateChange(state, action) {
            state.activeEvent = action.payload;
            
        },
    },
});

export const { onDateChange } = calendarSlice.actions;
