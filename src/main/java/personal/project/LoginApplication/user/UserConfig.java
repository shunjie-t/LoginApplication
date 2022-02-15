package personal.project.LoginApplication.user;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class UserConfig {
    @Bean
    public CommandLineRunner commandLineRunner(UserRepository repository) {
        return args -> {
            UserModel Bryan = new UserModel(
                    "Bryan Smith",
                    "bryan",
                    "password",
                    "manager",
                    "bryan.s@gmail.com"
            );

            UserModel Michelle = new UserModel(
                    "Michelle Jones",
                    "michelle",
                    "password",
                    "manager",
                    "michelle.j@gmail.com"
            );

            UserModel Jane = new UserModel(
                    "Jane Brown",
                    "jane",
                    "password",
                    "user",
                    "jane.b@gmail.com"
            );

            UserModel Tom = new UserModel(
                    "Tom White",
                    "tom",
                    "password",
                    "user",
                    "tom.w@gmail.com"
            );

            repository.saveAll(List.of(Bryan, Michelle, Jane, Tom));
        };
    }
}
