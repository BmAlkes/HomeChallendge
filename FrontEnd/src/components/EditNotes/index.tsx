import React, { useContext, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";
import { NoteContext } from "../../context/note";

const EditNotes = (id: any) => {
    const { editNote } = useContext(NoteContext);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const note = { title, description };
        console.log(note, id.id);

        editNote(id.id, note);
    };
    return (
        <Dialog.Portal>
            <Overlay>
                <Content>
                    <Dialog.Title>Edit Task</Dialog.Title>
                    <CloseButton>X</CloseButton>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Title"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="description"
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        <button type="submit">Edit Note</button>
                    </form>
                </Content>
            </Overlay>
        </Dialog.Portal>
    );
};

export default EditNotes;
