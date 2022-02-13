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
        List<UserModel> res = userService.queryUserInfo(user.getUsername(), user.getPassword());
        if(res.size() == 1) {
            return String.format(
                    "{\"name\": \"%s\", \"username\": \"%s\", \"role\": \"%s\"}",
                    res.get(0).getName(),
                    res.get(0).getUsername(),
                    res.get(0).getRole()
            );
        }
        return "{}";
    }
}
