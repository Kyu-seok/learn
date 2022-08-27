calculate_closer(A, C) :-
  closer(A, B),
  closer(B, A),
  format('Object ~w is closer than Object ~w ~n', [A, C]).
