#include <stdio.h>

int main()
{
    int myGrades[] = {12, 23, 45};
    int const rows = 2;
    int const columns = 3;
    int grades[rows][columns];
    memset( grades, 0, rows * columns * sizeof(int));

    grades[1][2] = 30;

    for (int i = 0; i < rows; i++) {
        for(int j = 0; j < columns; j++) {
            printf("%d", grades[i][j]);
        }
    }


    return 0;
}