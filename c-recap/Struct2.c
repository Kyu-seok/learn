#include <stdio.h>

struct Test
{
    char a;     // 1 byte  
    int b;      // 4 byte    
    short c;    // 2 byte
    char d;     // 1 byte
};  // total memory = (1+(3)) + (4) + (2+1+(1)) = 12 byte for struct memory.