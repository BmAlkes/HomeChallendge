import React, { useContext } from "react";
import { Box, CardsComponent } from "./styles";
import { AuthContext } from "../../context/auth";
import { NoteContext } from "../../context/note";

const Cards = () => {
    const { notes } = useContext(NoteContext);
    console.log(notes);
    return (
        <CardsComponent>
            <Box>
                <thead>
                    <tr>
                        <th> Title</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    <tbody>
                        {notes?.map((note) => {
                            return (
                                <tr key={note.id}>
                                    <td data-labe="client">{note.title}</td>
                                    <td>{note.description}</td>
                                    <td>icon</td>
                                    <td>icon</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </thead>
            </Box>
        </CardsComponent>
    );
};

export default Cards;
