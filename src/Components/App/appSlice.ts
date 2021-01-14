import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'

const initialState: any = {
    history: {}
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setWatchHistory: (state, action) => {
            state.history = action.payload
        }
    }
})

export const { setWatchHistory } = appSlice.actions

export const selectHistory = (state: RootState) => state.app.history

export default appSlice.reducer