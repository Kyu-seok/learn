#include <stdio.h>

/*
    if option is 0, pointer is char
    if option is 1, pointer is short
    if option is 2, pointer is int  
*/ 
void MyFunc(void *p, char option) 
{
    if(option == 0) *(char *)p = 1 ;
    else if(option == 1) *(short *)p = 1;
    else *(int *)p = 1;
}

void main() 
{
    short data = 5;
    MyFunc(&data, 1);
}