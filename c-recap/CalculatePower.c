#include <stdio.h>

int main(void) 
{
    int base, exp;
    long double result = 1.0;
    printf("Enter the value of base: ");
    scanf("%d", &base);
    printf("\nEnter the value of exp: ");
    scanf("%d", &exp);

    while (exp != 0)
    {
        result *= base;
        exp--;
    }

    printf("\nThe result is %Lf\n", result);

    return 0;
}