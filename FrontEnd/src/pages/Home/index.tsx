import React from "react";
import { HomeComponent } from "./styles";
import CreateCard from "../../components/CreateCard";
import Cards from "../../components/Cards";

const Home = () => {
    return (
        <HomeComponent>
            <CreateCard />
            <Cards />
        </HomeComponent>
    );
};

export default Home;
