have_feathers(penguin).
have_two_legs(penguin).
have_beak(penguin).
can_walk(penguin).
# etc...

is_penguin(X) :-
  have_feathers(X).
  have_two_legs(X).
  have_beak(X).
  can_walk(X).
  # etc...
  