import React, { useContext } from "react";
import { HeaderComponent } from "./styled";
import { AuthContext } from "../../context/auth";

const Header = () => {
    const { currentUser, logoutUser } = useContext(AuthContext);
    const handleLogout = () => {
        logoutUser();
    };
    return (
        <HeaderComponent>
            <div>
                <h3>Welcome to your notes</h3>
            </div>
            <div className="UserArea">
                <p>{currentUser?.name}</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </HeaderComponent>
    );
};

export default Header;
