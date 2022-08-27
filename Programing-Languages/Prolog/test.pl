naive_sort(List,Sorted):-perm(List,Sorted),sorted(Sorted).
   
sorted([]).
sorted([X]).
sorted([X, Y | T]):- X =< Y, sorted([Y | T]).