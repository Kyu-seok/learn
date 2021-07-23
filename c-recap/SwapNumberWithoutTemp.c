#include <stdio.h>

int main(void) 
{
    double a, b;
    printf("Enter a: ");
    scanf("%lf", &a);
    printf("Enter b: ");
    scanf("%lf", &b);

    // Swapping

    // a = (initial_a - initial_b)
    a = a - b;

    // b = (initial_a - initial_b) + initial_b = intial_a
    b = a + b;

    // a = initial_a - (intial_a - intial_b) = initial_b
    a = b - a;

    // %.2lf displays number up to 2 decimal points
    printf("After swapping, a = %.2lf\n", a);
    printf("After swapping, b = %.2lf", b);
}