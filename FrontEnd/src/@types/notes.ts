export interface Notes {
    _id?: string;
    title: string;
    description: string;
    isCompleted?: boolean;
    created_by: string;
    createdAt?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NotesItem extends Array<Notes> {}
