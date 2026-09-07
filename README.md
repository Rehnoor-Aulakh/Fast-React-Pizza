Fast React Pizza:
Live View
https://fast-react-pizza-rehnoor.netlify.app/

Tech Stack:
React, React Router v6, Tailwind CSS, Redux Toolkit (RTK)

For Redux Toolkit installation in any React Project
npm i @reduxjs/toolkit react-redux

Then create the Slices of the global states like user, cart, etc, which has the reducers and initialState set up, and in the store connect all these in the configureStore method, which automatically creates the action creators.

Then to get access of the global state, use the useSelector() hook which gets access to the global state, and you can select whatever you want. Eg:

const username = useSelector(state => state.user.username)
where user is the name of the slice

And to call the reducers, you use the useDispatch() hook, which will give you the dispatch method, and pass in the action creator, which was automatically created

dispatch({type: "user/updateName", payload: username});

Easier method is to export the updateName method in the slice itself, and then call it in dispatch method with the payload directly

dispatch(updateName(username));

