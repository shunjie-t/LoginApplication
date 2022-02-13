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
                    "manager"
            );

            UserModel Michelle = new UserModel(
                    "Michelle Jones",
                    "michelle",
                    "password",
                    "manager"
            );

            UserModel Jane = new UserModel(
                    "Jane Brown",
                    "jane",
                    "password",
                    "user"
            );

            UserModel Tom = new UserModel(
                    "Tom White",
                    "tom",
                    "password",
                    "user"
            );

            repository.saveAll(List.of(Bryan, Michelle, Jane, Tom));
        };
    }
}
