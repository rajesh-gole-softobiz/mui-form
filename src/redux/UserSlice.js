const {createSlice} = require("@reduxjs/toolkit")

const initialUsers = {
    users : [
        {
            id:'',
            name:'',
            email:'',
            phone:''
        }
    ]
};

export const usersSlice = createSlice ({
    name: 'users',
    initialState: initialUsers,
    reducers: {
        showUsers: (state) => state,
        addUser: (state,action) => {
            state.users.push(action.payload);
        }
    }
})

export const {showUsers, addUser} = usersSlice.actions;
export default usersSlice.reducer;