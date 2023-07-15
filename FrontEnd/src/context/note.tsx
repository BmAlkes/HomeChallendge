import React, { createContext, useEffect, useState } from "react";
import { Notes, NotesItem } from "../@types/notes";
import {
    changeNoteField,
    createNote,
    deleteNote,
    doneNote,
    getAllNotes,
} from "../services/api";

interface INoteContext {
    notes: NotesItem | null;
    notesCreation: (note: Notes) => void;
    getNotes: () => void;
    changeStatus: (_id: string, updateNote: Notes) => void;
    deleteNoteById: (id: string) => void;
    editNote: (_id: string, updateNote: Notes) => void;
}

export const NoteContext = createContext<INoteContext>({
    notes: [
        {
            created_by: "",
            description: "",
            title: "",
            _id: "",
            createdAt: "",
            isCompleted: false,
        },
    ],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    notesCreation: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    getNotes: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    changeStatus: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    deleteNoteById: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    editNote: () => {},
});
interface NoteContextProps {
    children: React.ReactNode;
}
export const NoteContextComponent: React.FC<NoteContextProps> = ({
    children,
}) => {
    useEffect(() => {
        getNotes();
    }, []);

    const [notes, setNotes] = useState<NotesItem>([]);

    const notesCreation = async (note: Notes) => {
        const response = await createNote(
            note.title,
            note.description,
            note.created_by
        );
        getNotes();
    };

    const getNotes = async () => {
        const response = await getAllNotes();
        setNotes(response.data);
    };

    const changeStatus = async (_id: string, updateNote: Notes) => {
        const response = await doneNote(_id, updateNote);
        console.log(response);
        notes.map((note) =>
            note._id === updateNote?._id ? { ...note, ...updateNote } : note
        );
        getNotes();
    };

    const deleteNoteById = async (id: string) => {
        const response = await deleteNote(id);
        setNotes(notes.filter((note) => note._id !== id));
    };

    const editNote = async (id: string, note: Notes) => {
        const response = await changeNoteField(id, note);
        console.log(response);
        notes.map((item) => (item._id === id ? { ...item, ...note } : item));
        getNotes();
    };

    return (
        <NoteContext.Provider
            value={{
                notes,
                notesCreation,
                getNotes,
                changeStatus,
                deleteNoteById,
                editNote,
            }}
        >
            {children}
        </NoteContext.Provider>
    );
};
