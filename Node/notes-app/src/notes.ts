import fs from 'fs';
import chalk from 'chalk';

type Note = {
  title: string;
  body: string;
};

export const getNotes = (): string => {
  return 'Your notes...';
};

export const addNote = (title: string, body: string): void => {
  const notes: Note[] = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  debugger

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added!'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }
};

export const removeNote = (title: string): void => {

  const notes: Note[] = loadNotes();
  
  const notesToKeep: Note[] = notes.filter((note) => note.title !== title)

  if (notes.length !== notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse('Note removed!'));
  } else {
    console.log(chalk.red.inverse('No note found!'));
  }
}

export const listNotes = (): void => {
  const notes: Note[] = loadNotes();

  console.log(chalk.inverse('Your notes'));

  notes.forEach((note) => {
    console.log(note.title);
  })
}

export const readNote = (title: string): void => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse('Note not found!'));
  }
}  

const saveNotes = (notes: Note[]): void => {
  const data = JSON.stringify(notes);
  fs.writeFileSync('notes.json', data);
};

const loadNotes = (): Note[] => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
