const {createSlice} = require("@reduxjs/toolkit")

const { v4 : uuidv4 } = require("uuid");

const initialUsers = {
    users : [
        {
            id:uuidv4(),
            name:'Rajesh Gole',
            email:'rajesh.gole@softobiz.com',
            phone:'8967120236'
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