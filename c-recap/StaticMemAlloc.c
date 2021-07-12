#include <stdio.h>
#define MAX_COUNT 5

int main(void) {
    int num[MAX_COUNT];
    int count = 0;
    int sum = 0;
    int i;
    while(count < MAX_COUNT) {
        printf("Enter the number (9999 to exit): ");
        scanf("%d", num + count);
        if(num[count] == 0000) break;
        count++;
    }
    for(i = 0; i < count; i++) {
        if(i > 0) printf(" + ");
        printf(" %d", num[i]);
        sum = sum + num[i];
    }
    printf(" = %d\n", sum);

    return 0;
}