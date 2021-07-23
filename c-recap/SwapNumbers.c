#include <stdio.h>

int main(void) 
{
    double first, second, temp;
    printf("Enter first number: ");
    scanf("%lf", &first);
    printf("Enter second number: ");
    scanf("%lf", &second);

    // value of first is assigned to temp
    temp = first;

    // Value of second is assigned to first
    first = second;

    // Value of temp (initial value of first) is assigned to second
    second = temp;

    // %.2lf displays number of 2 decimal points
    printf("\nAfter swapping, firstNumber = %.2lf\n", first);
    printf("After swapping, secondNumber = %.2lf", second);
}