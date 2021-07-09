#include <stdio.h>

/*
    the function below takes in pointer as parameter.
    it changes the value in the address of pointer pointing.
*/
void Test(short *ptr) 
{
    short soft = 0;
    soft = *ptr;
    *ptr = 3;
}

/*
    main function sends the address of tips to Test() function
*/
void main()
{
    short tips = 5;
    Test(&tips);
}


/*****
    ultimately, the memeory storing "tips" is both approachable from main() and test().
*****/
