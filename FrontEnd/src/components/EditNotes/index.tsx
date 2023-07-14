import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";

const EditNotes = () => {
    return (
        <Dialog.Portal>
            <Overlay>
                <Content>
                    <Dialog.Title>Edit Task</Dialog.Title>
                    <CloseButton>X</CloseButton>
                    <form action="">
                        <input type="text" placeholder="Title" required />
                        <input type="text" placeholder="description" required />

                        <button type="submit">Edit Note</button>
                    </form>
                </Content>
            </Overlay>
        </Dialog.Portal>
    );
};

export default EditNotes;
