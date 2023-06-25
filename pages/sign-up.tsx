import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Logo from '../public/images/logo.png';
import Image from 'next/image';
import userService from 'services/user';
import toastMessage from 'display/utils/toast';
import useAppNavigate from 'hooks/useAppNavigate';
import { useForm } from "react-hook-form";
import { FormTextField } from 'components/form-text-field';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://thesis-fe-ten.vercel.app/">
        Buildify
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const navigate = useAppNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleMouseDownConfirmPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const { control, handleSubmit, watch, setError } = useForm({ mode: "onChange" });
  const onSubmitSignUpForm = data => {
    const body = {
      username: data['username'],
      password: data['password'],
      fullName: data['fullName'],
      email: data['email'],
    } as any;
    userService.signUp(body).then(resp => {
      if (!resp?.msg) {
        toastMessage.success("Sign up successfully, sign in now", {
          onClose: () => {
            navigate('/sign-in');
          }
        });
      } else toastMessage.error('Sign up failed, please try again later');
    }).catch((err) => {
      console.log(err);
      const ERROR_CODE_USERNAME_EXIST = 3;
      if (err?.code === ERROR_CODE_USERNAME_EXIST) {
        setError('username', { type: 'server validate', message: 'Username already exists, please choose another one' }, { shouldFocus: true });
      }
    });
  };
  const watchPassword = watch('password');
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <Avatar sx={{ width: 100, height: 100, m: 1, bgcolor: 'white' }}>
            <Image src={Logo} alt="Logo" />
          </Avatar>
          <Typography style={{ fontSize: 25, color: "#1652f5" }} component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmitSignUpForm)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>

                <FormTextField
                  name="fullName"
                  control={control}

                  rules={{ required: "Full name is required" }}
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus


                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormTextField
                  control={control}
                  rules={{ required: "Email address is required" }}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"


                />
              </Grid>
              <Grid item xs={12}>
                <FormTextField
                  control={control}
                  rules={{ required: "Username is required", minLength: { value: 6, message: 'Username must be at least 6 characters long.' } }}
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"


                />
              </Grid>

              <Grid item xs={12}>
                <FormTextField
                  control={control}
                  rules={{ required: "Password is required", minLength: { value: 8, message: 'Password must be at least 8 characters long.' } }}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}

                  id="password"
                  autoComplete="new-password"
                  InputProps={{
                    // className: "input-material",
                    endAdornment:
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size='small'
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                  }}

                />
              </Grid>
              <Grid item xs={12}>
                <FormTextField
                  control={control}
                  rules={{
                    required: "Confirm password is required",
                    minLength: {
                      value: 8, message: 'Confirm password must be at least 8 characters long.',
                    },
                    validate: (value) => value === watchPassword || "Confirm password must be identical to the password"
                  }
                  }
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  InputProps={{
                    // className: "input-material",
                    endAdornment:
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownConfirmPassword}
                          edge="end"
                          size='small'
                        >
                          {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                  }}

                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, py: 1 }}
              style={{ backgroundColor: "#1652f5" }}

            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/sign-in" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5, fontSize: 16 }} />
      </Container>
    </ThemeProvider>
  );
}