import { useContext } from "react";
import { Box, CardsComponent } from "./styles";
import { NoteContext } from "../../context/note";
import { FiDelete, FiEdit } from "react-icons/fi";
import { AiOutlineCheck } from "react-icons/ai";
import { format, parseISO } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

const Cards = () => {
    const { notes } = useContext(NoteContext);
    console.log();

    const formatDate = (date: string) => {
        return format(parseISO(date), "dd/MM/yyyy", {
            locale: ptBr,
        });
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
                        {notes?.map((note) => {
                            console.log(note.createdAt);
                            return (
                                <tr key={note.id}>
                                    <td data-label="Title">{note.title}</td>
                                    <td data-label="Description">
                                        {note.description}
                                    </td>
                                    <td data-label="Status">
                                        <span className="bagde">
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
