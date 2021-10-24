import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Scanner;

public class Main {


    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        boolean run = true;

        try {
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/Olympics", "root", "password");
            Statement statement = connection.createStatement();

            int option;
            System.out.println("Press 1 : for select table sport");
            System.out.println("Press 2 : for select table athlete");
            System.out.println("Press 3 : for select table participate");
            System.out.println("Press 4 : for select table result");
            System.out.println("Press 5 : for select table referee");

            int input = scanner.nextInt();

            if (input == 1) {
                ResultSet resultSet = statement.executeQuery("select  * from sport");

                System.out.printf("%-40s %s", "NAME", "VENUE");
                System.out.println();
                while (resultSet.next()) {
                    // System.out.print(resultSet.getString("name") + ",\t" + resultSet.getString("venue") + "\n");
                    System.out.printf("%-40s %s", resultSet.getString("name"), resultSet.getString("venue"));
                    System.out.println();
                }
            } else if (input == 2) {
                ResultSet resultSet = statement.executeQuery("select  * from athlete");

                System.out.printf("%-14s %-30s %-15s %-5s %s", "ATHLETE_NO", "NAME", "NATIONALITY", "SEX", "DATE_OF_BIRTH");
                System.out.println();
                while (resultSet.next()) {
                    System.out.printf("%-14s %-30s %-15s %-5s %s", resultSet.getString("athlete_no"), resultSet.getString("name"), resultSet.getString("nationality"), resultSet.getString("sex"), resultSet.getString("date_of_birth"));
                    System.out.println();
                }
            } else if (input == 3) {
                ResultSet resultSet = statement.executeQuery("select * from participate");

                System.out.printf("%-35s %-10s %-10s %s", "SPORT_NAME", "ATHLETE_NO", "TEAM", "MATCH_DAY");
                System.out.println();
                while (resultSet.next()) {
                    System.out.printf("%-35s %-10s %-10s %s", resultSet.getString("sport_name"), resultSet.getString("athlete_no"), resultSet.getString("team"), resultSet.getString("match_day"));
                    System.out.println();
                }
            } else if (input == 4) {
                ResultSet resultSet = statement.executeQuery("select * from result");

                System.out.printf("%-13s %-7s %-9s %s", "ATHLETE_NO", "MEDAL", "RANKING", "SCORE");
                System.out.println();
                while (resultSet.next()) {
                    System.out.printf("%-13s %-7s %-9s %s", resultSet.getString("athlete_no"), resultSet.getString("medal"), resultSet.getString("ranking"), resultSet.getString("score"));
                    System.out.println();
                }
            } else if (input == 5) {
                ResultSet resultSet = statement.executeQuery("select * from referee");

                System.out.printf("%-7s %-30s %-14s %-14s %-14s %s", "REF_NO", "NAME", "NATIONALITY", "POSITION", "EXPERIENCE", "EVALUATE");
                System.out.println();
                while (resultSet.next()) {
                    System.out.printf("%-7s %-30s %-14s %-14s %-14s %s", resultSet.getString("ref_no"), resultSet.getString("name"), resultSet.getString("nationality"), resultSet.getString("position"), resultSet.getString("experience"), resultSet.getString("evaluate"));
                    System.out.println();
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
