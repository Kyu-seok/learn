#include <stdio.h>

typedef unsigned short int US;
typedef int MY_DATA[5];

void main() 
{
    unsigned short int data = 5;
    US temp;

    temp = data;
    printf("temp : %d\n", temp);

    MY_DATA arr;            // same with int arr[5];
    MY_DATA *p;             // same with int( *p )[5];    pointer pointing to 5 set of short. 

}
