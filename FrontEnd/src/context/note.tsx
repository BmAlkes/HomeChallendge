import React, { createContext, useEffect, useState } from "react";
import { Notes, NotesItem } from "../@types/notes";
import { createNote, getAllNotes } from "../services/api";

interface INoteContext {
    notes: NotesItem | null;
    notesCreation: (note: Notes) => void;
    getNotes: () => void;
}

export const NoteContext = createContext<INoteContext>({
    notes: [
        {
            created_by: "",
            description: "",
            title: "",
            id: "",
            createdAt: "",
            isCompleted: false,
        },
    ],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    notesCreation: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    getNotes: () => {},
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
    };

    const getNotes = async () => {
        const response = await getAllNotes();
        setNotes(response.data);
    };

    return (
        <NoteContext.Provider value={{ notes, notesCreation, getNotes }}>
            {children}
        </NoteContext.Provider>
    );
};
