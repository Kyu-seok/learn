#include <stdio.h>

int main(void) {

    // using array like pointer 
    char data[5];
    data[1] = 5;
    *(data + 1) = 5;

    // using pointer like array
    char data;
    char *p = &data;
    *p = 3;
    p[0] = 3;
    

    return 0;
}