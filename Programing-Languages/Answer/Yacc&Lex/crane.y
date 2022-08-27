%{
void yyerror (char *s);
int yylex();
%}

%start line
%token exit_command
%token action
%token type
%token <num> number

%%

line    : exit_command      ';' {exit(EXIT_SUCCESS);}
        | action            ';' {action(type, number);}
        ;

action    : type + number         {$1($2)}
          ;

number    : string                {$$ = $1;}
          ;

number    : digit                 {$$ = $1;}
          ;
        

%%                   

double move_forward(double distance)
{
	return xAxis + distance;
} 

double move_backward(double distance)
{
	return xAxis - distance;
} 

double move_upwards(double height)
{
	return yAxis + height;
} 

double move_downwards(double height)
{
	return yAxis - height;
} 

double rotate_right(double rotate_angle)
{
  if (angle + rotate_angle > 360) {
    return angle + rotate_angle - 360;
  }
	return angle + rotate_angle;
} 

double rotate_left(double rotate_angle)
{
  if (angle + rotate_angle < 0) {
    return angle + rotate_angle + 360;
  }
	return angle + rotate_angle;
} 

int pick_up() 
{
  return 1;
}

int drop() 
{
  return 0;
}

int main (void) {
	double xAxis, yAxis;
  double angle;
  int picked_up;

	return yyparse ( );
}

