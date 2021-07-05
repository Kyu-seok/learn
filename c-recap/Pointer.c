#include <stdio.h>

// function below takes in argument, which is jsut a "concept of pointer"
void Test(short data) 
{
    short soft = 0x0000;
    printf("initial value of soft: %x\n", soft);
    soft = data;
    printf("final value of soft: %x\n", soft);

}

int main()
{
    short tips = 0x0005;
    Test(tips);

    printf("-------------------\n");

    // testing pointer on birthday variable
    short birthday = 3;
    short *ptr;
    ptr = &birthday;

    printf("the address of birthday: %p\n", ptr);
    printf("the value of birthday: %i\n", *ptr);

}
