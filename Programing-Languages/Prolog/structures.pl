owns(albert, pet(cat, olive)).

customer(tom, smith, 20.55).
customer(sally, smith, 120.55).

get_cust_bal(Fname, Lname) :-
  customer(Fname, Lname, Bal),
  write(Fname), tab(1),
  format('~w owes us $~2f ~n', [Lname, Bal]).

vertical(line(point(X, Y), point(X, Y2))).

horizontal(line(point(X, Y), point(X2, Y))).