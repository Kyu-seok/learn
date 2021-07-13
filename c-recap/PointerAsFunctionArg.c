#include <stdio.h>
#include <malloc.h>

void GetMyData(int **q) {   // save the address of *p into **q
    *q = (int *)malloc(8);  // allocate memory to p
}

void main() {
    int *p;                 // p is not initialized, so it contains rubbish value
    GetMyData(&p);          // parse the address of p into GetMyData() function
    *p = 5;                 // save 5 into first 4byte(int) of allocated 8 bytes of memory 
    free(p);                // free the dynamic allocated memeory
}