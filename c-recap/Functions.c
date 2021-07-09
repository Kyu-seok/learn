#include <stdio.h>

int factorial(int number)
{
    int factorial = 1;

    for (int i = number; i > 1; i--) {
        factorial *= i;
    }

    return factorial;
}

int main() 
{
    int fact = factorial(5);
    int fact2 = factorial(8);
    printf("%d", fact);
    printf("%d", fact2);
    return 0;


}