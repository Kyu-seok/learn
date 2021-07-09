#include <stdio.h>

int main() 
{
	char ASCII; 
	printf("Please neter a character: ");
	scanf("%c", &ASCII);
	printf("%d\n", ASCII);

	int integer;
	printf("Please enter a integer between 0 - 127");
	scanf("%i", &integer);
	printf("%c\n", integer);

	//Math with ASCII
	char mathz = 'A' + '\t';
	printf("A(65) + \\t(11) = %c(%d)l", mathz, mathz);

	return 0;

}
