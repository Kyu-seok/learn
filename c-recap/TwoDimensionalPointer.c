#include <stdio.h>
#include <malloc.h>

void main() {
    short **pp;
    pp = (short **)malloc(sizeof(short*));
    *pp = (short *)malloc(sizeof(short));
    **pp = 10;
    printf("**pp : %d", **pp);

    free(*pp);
    free(pp);
}

/* Benfit of using 2 dimensional pointer
    1. easy to handle many 1 dimensional pointer 
    2.
    3.
*/
