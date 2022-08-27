%{
  #define ACTION 1
  #define TYPE   2
  #define NUMBER 3
%}

%%
[TYPE][NUMBER]          return ACTION;
[a-zA-Z][_a-zA-Z0-9]*   return TYPE;
[1-9][0-9]*             return NUMBER;
[ \t\n]                 ; 
.                       printf("unexpected character\n");
%%

int yywrap(void) 
{
  return 1;
}
