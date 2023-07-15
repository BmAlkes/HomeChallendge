import { useForm } from "react-hook-form";
import { CreateCardComponent } from "./styled";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { NoteContext } from "../../context/note";
import { AuthContext } from "../../context/auth";

const NoteSchema = z.object({
    title: z.string(),
    description: z.string(),
    created_by: z.string(),
});
type NoteForm = z.infer<typeof NoteSchema>;

const CreateCard = () => {
    const { notesCreation } = useContext(NoteContext);
    const { currentUser } = useContext(AuthContext);
    console.log(currentUser);
    const _id = currentUser?._id;
    const { register, handleSubmit, reset } = useForm<NoteForm>({
        resolver: zodResolver(NoteSchema),
    });
    const handleCreateCard = (data: NoteForm) => {
        console.log(data);
        notesCreation(data);
        reset();
    };
    return (
        <CreateCardComponent>
            <h2>Create your own notes</h2>
            <form onSubmit={handleSubmit(handleCreateCard)}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        {...register("title", { required: true })}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        {...register("description", { required: true })}
                    />
                </div>
                <input type="hidden" value={_id} {...register("created_by")} />
                <button type="submit">Create</button>
            </form>
        </CreateCardComponent>
    );
};

export default CreateCard;
