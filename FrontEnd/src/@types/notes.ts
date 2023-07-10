export interface Notes {
    id?: string;
    title: string;
    description: string;
    created_by: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NotesItem extends Array<Notes> {}
