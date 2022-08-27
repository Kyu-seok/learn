say_hi :-
  write('What is your name? '),
  read(X),
  write('Hi '),
  write(X).

fav_char :-
  write('What is your fav character? '),
  get(X),
  format('The Ascii value ~w is ', [X]),
  put(X), nl.