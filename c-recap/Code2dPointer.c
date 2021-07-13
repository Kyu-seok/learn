#include <stdio.h>
#include <malloc.h>

int main(void) {

    unsigned char limit_table[3], *p[3];
    int age, member, temp, sum;

    for(age = 0; age < 3; age++) {
        printf("\n%d0대 연령의 윗몸 일으키기 횟수\n", age + 2);
        printf("이 연령대는 몇 명입니다까? : ");
        scanf("%d", &temp);
        limit_table[age] = (unsigned char)temp;

        p[age] = (unsigned char *)malloc(limit_table[age]);
        for(member = 0; member < limit_table[age]; member++) {
            printf("%dth: ", member + 1);
            scanf("%d", &temp);
            *(p[age] + member ) = (unsigned char)temp;
        }
    }

    printf("\n\n 연령별 평균 윗몸 일으키기 횟수\n");
    for(age = 0; age < 3; age++) {
        sum = 0;
        printf("%d0대: ", age + 2);
        for(member = 0; member < limit_table[age]; member ++) {
            sum = sum + *(p[age] + member);
        }
        printf("%5.2f\n", (double)sum / limit_table[age]);
        free(p[age]);
    }

    return 0;
}