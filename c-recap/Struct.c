#include <stdio.h>

typedef struct 
{
    char name[12];
    unsigned short int age;
    float height;
    float weight;
} Person;

int main(void) {

    //Person data;
    //Person friend_list[64];
    //Person *p;

    Person data;
    data.age = 18;
    
    Person *p;
    p = &data;

    p->age = 20;
    printf("%d\n", data.age);

    return 0;
}
