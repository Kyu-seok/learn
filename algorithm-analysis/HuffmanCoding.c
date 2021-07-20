#include <stdio.h>

// Huffman coding is an algorith that is used to compress data
// Huffman coding uses hashing method to incode the data

int main(void) {

    char string[] = "ABBAACCDDEEFG";
    int n = sizeof(string);

    int types = 0;

    //finding frequency of alphabet
    char * cPointer;
    int ** intPointer;

    cPointer = string;

    char temp[n];
    int iterator = 0;
    int hasChar = 0;

    while (*cPointer != '\0') {
        printf("%c\n", *cPointer);

        for(int i = 0; i < sizeof(temp); i++) {
            if(temp[i] == *cPointer) {
                hasChar = 1;
            }
        }

        if(hasChar == 0) {
            temp[iterator] = *cPointer;
            types += 1;
            iterator += 1;
        } 

        hasChar = 0;
        cPointer = cPointer + 1;
    }

    printf("Total number of different alphabe in string: %d\n", types);

    // find the frequencies of each alphabe below

    for(int i = 0; i < types; i++) {
        
    }


    // implement huffman coding algorithm here.

    return 0;
}