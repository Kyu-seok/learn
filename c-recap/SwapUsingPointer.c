#include <stdio.h>

void Swap(int *ptrA, int *ptrB) {
    int temp;
    temp = *ptrA;
    *ptrA = *ptrB;
    *ptrB = temp;
}

void main() {
    int start = 96, end = 5;

    printf("before:start = %d, end = %d\n", start, end);
    if(start > end) {
        Swap(&start, &end);
    }
    printf("after:start = %d, end = %d\n", start, end);
}