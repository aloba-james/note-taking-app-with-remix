import { Link, useCatch, useLoaderData } from '@remix-run/react';
import NewNote, { links as NewNoteLinks } from '../components/NewNote';
import Notelist, { links as NotelistLinks } from '../components/Notelist';
import { getStoredNotes, storeNotes } from '../data/notes';
import { json, redirect } from '@remix-run/node';

export function links() {
    return [...NewNoteLinks(), ...NotelistLinks()];
}

export function meta() {
    return {
        title: "All notes",
        description: "A better way of keeping track of your notes",
    }
}
export default function NotesPage() {
    const notes = useLoaderData();

    return (
        <main id="content">
            <NewNote />
            <Notelist notes={notes} />
        </main>
    );
}

export async function loader() {
    const notes = await getStoredNotes();
    if (!notes || notes.length === 0) {
        throw json(
            { message: 'Could not find any notes' },
            { status: 404 },
            { statusText: 'Could not find any notes' }
        );
    }
    return notes
}

export async function action({ request }) {
    const formData = await request.formData();
    // const noteData = {
    //     title: formData.get('title'),
    //     content: formData.get('content'),
    // };  

    const noteData = Object.fromEntries(formData);

    if (noteData.title.trim().length < 5) {
        return { message: 'Invalid title -  Title must be at least 5 characters' };
    }

    const existingNotes = await getStoredNotes();
    noteData.id = new Date().toISOString();
    const updatedNotes = existingNotes.concat(noteData);
    await storeNotes(updatedNotes);
    // await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000))

    return redirect('/notes');
}

export function CatchBoundary() {
    const caughtResponse = useCatch();

    const message = caughtResponse.data?.message || 'Data not found';

    return (
        <main>
            <NewNote />
            <p className="info-message">
                {message}
            </p>
        </main>
    )
}

export function ErrorBoundary({ error }) {
    return (
        <main className="error">
            <h1>An error occurred here</h1>
            <p>
                {error.message}
            </p>
            <p>
                Back to <Link to="/">Home</Link>
            </p>
        </main>
    )
}