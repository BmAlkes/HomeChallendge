import { useContext, useState } from "react";
import { Box, CardsComponent } from "./styles";
import { NoteContext } from "../../context/note";
import { FiDelete, FiEdit } from "react-icons/fi";
import { AiOutlineCheck } from "react-icons/ai";

import { AuthContext } from "../../context/auth";
import { Notes } from "../../@types/notes";

const Cards = () => {
    const { currentUser } = useContext(AuthContext);
    const { notes, changeStatus, deleteNoteById } = useContext(NoteContext);
    console.log();

    const notesByUser = notes?.filter((note) => {
        return note.created_by === currentUser?._id;
    });

    const handleDone = (id: string, isCompleted: boolean) => {
        console.log(id, isCompleted);
        changeStatus(id, !!isCompleted);
    };

    const handleDelete = (id: string) => {
        deleteNoteById(id);
    };

    return (
        <CardsComponent>
            <Box>
                <table>
                    <thead>
                        <tr>
                            <th scope="col"> Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Status</th>
                            <th scope="col">#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notesByUser?.map((note) => {
                            return (
                                <tr key={note._id}>
                                    <td data-label="Title">{note.title}</td>
                                    <td data-label="Description">
                                        {note.description}
                                    </td>
                                    <td data-label="Status">
                                        <span
                                            className={
                                                note.isCompleted
                                                    ? "done"
                                                    : "notDone"
                                            }
                                        >
                                            {note.isCompleted
                                                ? "Done"
                                                : "Not Done"}
                                        </span>
                                    </td>
                                    <td data-label="#">
                                        <button
                                            className="action"
                                            style={{
                                                background: "#0a8e0a",
                                            }}
                                            onClick={() =>
                                                handleDone(note._id, note)
                                            }
                                        >
                                            {
                                                <AiOutlineCheck
                                                    color="#FFF;"
                                                    size={17}
                                                />
                                            }
                                        </button>
                                        <button
                                            className="action"
                                            style={{
                                                background: "#3583f6",
                                            }}
                                        >
                                            {<FiEdit color="#FFF;" size={17} />}
                                        </button>
                                        <button
                                            className="action"
                                            style={{
                                                background: "#f6a935",
                                            }}
                                            onClick={() => {
                                                handleDelete(note._id);
                                            }}
                                        >
                                            {
                                                <FiDelete
                                                    color="#FFF;"
                                                    size={17}
                                                />
                                            }
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Box>
        </CardsComponent>
    );
};

export default Cards;
