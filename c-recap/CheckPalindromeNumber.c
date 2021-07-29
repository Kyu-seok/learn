#include <stdio.h>

int main(void)
{
    int n, mod, rev = 0, temp;
    printf("Enter an integer: ");
    scanf("%d", &n);
    temp = n;

    while(temp != 0) {
        mod = temp % 10;
        rev = rev * 10 + mod;
        temp /= 10;
    }

    if (n == rev) {
        printf("The number is palindrome\n  ");
    } else {
        printf("The number is NOT a palindrome\n");
    }

    return 0;
}