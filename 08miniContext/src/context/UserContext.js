import { createContext } from "react";

const UserContext = createContext();


/**
 * UserContext - A React context for managing user-related state and actions.
 * 
 * This context provides a way to share user data and functions across the component tree
 * without having to pass props down manually at every level.
 * 
 * @type {React.Context}
 */
export default UserContext;

