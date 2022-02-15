package personal.project.LoginApplication.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api")
@CrossOrigin("*")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    @RequestMapping(path = "login")
    public String authenticateUser(@RequestBody UserModel user) {
        String unameORemail = user.getUsername() != null ? user.getUsername() : user.getEmail();
        List<UserModel> res = userService.queryUserInfo(unameORemail, user.getPassword());

        if(res.size() == 1) {
            return String.format(
                    "{\"name\": \"%s\", \"username\": \"%s\", \"role\": \"%s\", \"email\": \"%s\"}",
                    res.get(0).getName(),
                    res.get(0).getUsername(),
                    res.get(0).getRole(),
                    res.get(0).getEmail()
            );
        }
        return "{}";
    }
}
