#include <stdio.h>
#include <stdlib.h>

typedef struct node 
{
    int number;             // 4 byte
    struct node *p_next;    // 8 byte
} NODE;

void AddNumber(NODE **pp_head, int data)
{
    NODE *p;
    if( *pp_head != NULL) {
        p = *pp_head;
        while( p -> p_next != NULL) {       // search for last node
            p = p -> p_next;
        }
        p -> p_next = (NODE *)malloc(sizeof(NODE));
        p = p-> p_next;
    } else {
        *pp_head = (NODE *)malloc(sizeof(NODE));
        p = *pp_head;
    }
    p -> number = data;
    p -> p_next = NULL;
}

int main(void) 
{
    NODE *p_head = NULL;
    NODE *p = p_head;

    AddNumber(&p_head, 15);
    AddNumber(&p_head, 25);
    AddNumber(&p_head, 35);

    int i = 0;

    while(p_head -> number != '\0') {
        printf("Value of %d list : %d\n", i, p_head -> number);
        i++;
        p_head = p_head -> p_next;
    }
    
    return 0;
}