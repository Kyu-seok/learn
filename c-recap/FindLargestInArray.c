#include <stdio.h>

int main(void) 
{
    int arr[] = {1, 2, 3, 4, 5, 134, 234, 63, 23, 5, 7, 8, 9};
    int i, max;

    max = arr[0];
    for(i = 1; i < sizeof(arr)/sizeof(int); i++ ) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    printf("Maximum value in the array: %d\n", max);

    return 0;
}