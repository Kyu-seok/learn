#include <stdio.h>
#include <string.h>

int main()
{
    printf("What is your favourite food?\n");
    char favFood[50];
    scanf("%49s",favFood);
    printf("%s\n", favFood);

    int charCount = strlen(favFood);

    printf("The character count is %d\n", charCount);
    return 0;
}