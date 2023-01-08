
import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
        name: 'ui',
        initialState: {
           isDateModalOpen: false,
        },
        reducers: {
          onDateModalOpen(state) {
            state.isDateModalOpen = true;
          } ,
            onDateModalClose(state) {
                state.isDateModalOpen = false;
            }

        }
    });

export const { onDateModalOpen, onDateModalClose } = uiSlice.actions;
