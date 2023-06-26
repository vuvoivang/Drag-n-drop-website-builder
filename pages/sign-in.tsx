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
import { useForm } from 'react-hook-form';
import { FormTextField } from 'components/form-text-field';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function Copyright(props: any) {
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

export default function SignIn() {
  const navigate = useAppNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const { control, handleSubmit, watch, setError } = useForm({ mode: "onChange" });

  const onSubmitSignInForm = data => {
    const body = {
      username: data['username'],
      password: data['password'],
    } as any;
    userService.signIn(body).then(resp => {
      if (resp.token) {
        localStorage.setItem('buildify-token', resp.token);

        toastMessage.success("Sign in successfully, build your website now", {
          onClose: () => {
            navigate('/dashboard');
          }
        });
      } else toastMessage.error('Sign in failed, please try again later');
    }).catch((err) => {
      console.log(err);
      toastMessage.error('Sign in failed, please try again later');
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 8,
          }}
        >
          <Avatar sx={{ width: 100, height: 100, m: 1, bgcolor: 'white' }}>
            <Image src={Logo} alt="Logo" />
          </Avatar>
          <Typography style={{ fontSize: 25, color: "#1652f5" }} component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmitSignInForm)} sx={{ mt: 1 }}>
            <FormTextField
              control={control}
              rules={{ required: "Username is required", minLength: { value: 6, message: 'Username must be at least 6 characters long.' } }}

              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="off"
              autoFocus
            />
            <FormTextField
              control={control}
              rules={{ required: "Password is required", minLength: { value: 8, message: 'Password must be at least 8 characters long.' } }}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="off"

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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, py: 1 }}
              style={{ backgroundColor: "#1652f5" }}            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>

              </Grid>
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
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