import TextField from "@mui/material/TextField";
import "./main.css";
function Register() {
  return (
    <div className="register">
      <div className="register__form">
        <div className="register__text">
          <h3>Register</h3>
          <p>
            who understand the realities of the classroom. Intuitive to use and
            trusted by teachers like you since 2015, Exam.net equips you with
            all the power and function you need to create exams for your
            students, your way.
          </p>
        </div>
        <div className="register__inputs">
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Phone" variant="outlined" />
          <TextField id="outlined-basic" label="Mail" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
        </div>
        <div className="register__who">
          <div>teacher</div>
          <div>student</div>
        </div>
      </div>
    </div>
  );
}
export default Register;
