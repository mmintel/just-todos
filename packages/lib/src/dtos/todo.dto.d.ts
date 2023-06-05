export interface TodoDTO {
    id: string;
    title: string;
    resolved: boolean;
    description?: string;
    reminders?: string[];
    dueDate?: string;
    attachments?: string[];
}
