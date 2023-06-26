// next
// @mui
import { Tooltip, Stack, Typography, Box } from '@mui/material';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// layouts
import LoginLayout from '../../layouts/login';
// routes
//
import AuthPasswordInputForm from './AuthPasswordInputForm';

// ----------------------------------------------------------------------

export default function Login() {
  const { method } = useAuthContext();

  return (
    <LoginLayout>
      <Stack spacing={2} sx={{ mb: 5, position: 'relative', alignItems: 'center' }}>
        <Tooltip title={method} placement="top">
          <Box
            component="img"
            alt={method}
            src={`/assets/icons/auth/ic_${method}.png`}
            sx={{ width: 32, height: 32, position: 'relative', right: 0 }}
          />
        </Tooltip>
        <Typography variant='h3' align="center">
          Sign in
        </Typography>

        <Stack direction="row">
          <Typography variant="body1">Use your Google Account</Typography>
        </Stack>
      </Stack>
      <AuthPasswordInputForm />
    </LoginLayout>
  );
}
