#include <stdio.h>

int main(void)
{
    long long n;
    int count = 0;

    scanf("%lld", &n);
    while (n != 0) {
        n /= 10;
        count++;
    }

    printf("Number of digit : %d\n", count);
    
    return 0;
}