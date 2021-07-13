#include <stdio.h>

int test(void);

int main(void) {
    short *p, data = 3;
    short **pp;
    p = &data;
    pp = &p;
    printf("[Before ] data : %d\n", data);
    *p = 4;
    printf("[Use *p ] data : %d\n", data);
    **pp = 5;
    printf("[Use *pp] data : %d\n", data);

    test();
}

int test(void) {

    short *p[100];      //not efficient
    short **pp;

    int n;
    short **p;
    scanf("%d", &n);
    pp = (short **)malloc(sizeof(short *) * n);

    return 0;
}
