import chalk from 'chalk';
import { getNotes, addNote, removeNote, listNotes, readNote } from './notes';
import yargs from 'yargs';
import { argv } from 'process';

// Customize yargs version
yargs.version('1.1.0');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    addNote(argv.title as string, argv.body as string);
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    removeNote(argv.title as string);
  },
});

yargs.command({
  command: 'update',
  describe: 'Update a note',
  handler() {
    console.log('Updating a note!');
  },
});

yargs.command({
  command: 'list',
  describe: 'list a note',
  handler() {
    listNotes();
  },
});

yargs.command({
  command: 'read',
  describe: 'read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    readNote(argv.title as string);
  },
});

yargs.parse();
