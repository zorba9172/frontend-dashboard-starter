import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  Divider,
  Badge,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { palette } from '../theme';

const CheckoutPage: React.FC = () => {
  const theme = useTheme();
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');

  return (
    <Box sx={{ py: 2 }}>
      <Grid container spacing={3}>
        {/* Left: Billing Address Form */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>
                Billing Address
              </Typography>

              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="First name" placeholder="First name" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Last name" placeholder="Last name" />
                </Grid>
                <Grid size={12}>
                  <TextField
                    fullWidth
                    label="Username"
                    placeholder="Username"
                    slotProps={{
                      input: {
                        startAdornment: <InputAdornment position="start">@</InputAdornment>,
                      },
                    }}
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    placeholder="you@example.com"
                    helperText="Your email address is optional"
                  />
                </Grid>
                <Grid size={12}>
                  <TextField fullWidth label="Address" placeholder="1234 Main St" />
                </Grid>
                <Grid size={12}>
                  <TextField fullWidth label="Address 2" placeholder="Apartment or suite (optional)" />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <Select
                    fullWidth
                    size="small"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    displayEmpty
                  >
                    <MenuItem value="" disabled>Country</MenuItem>
                    <MenuItem value="us">United States</MenuItem>
                    <MenuItem value="uk">United Kingdom</MenuItem>
                    <MenuItem value="ca">Canada</MenuItem>
                    <MenuItem value="au">Australia</MenuItem>
                  </Select>
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <Select
                    fullWidth
                    size="small"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    displayEmpty
                  >
                    <MenuItem value="" disabled>State</MenuItem>
                    <MenuItem value="ca">California</MenuItem>
                    <MenuItem value="ny">New York</MenuItem>
                    <MenuItem value="tx">Texas</MenuItem>
                    <MenuItem value="fl">Florida</MenuItem>
                  </Select>
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <TextField fullWidth label="Zip" placeholder="Zip" />
                </Grid>
              </Grid>

              <Divider sx={{ my: 3 }} />

              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{ color: palette.primary.main, '&.Mui-checked': { color: palette.primary.main } }}
                  />
                }
                label="Shipping address is the same as my billing address"
              />
              <br />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ color: palette.primary.main, '&.Mui-checked': { color: palette.primary.main } }}
                  />
                }
                label="Save this information for next time"
              />

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                Payment
              </Typography>

              <RadioGroup value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <FormControlLabel
                  value="credit"
                  control={<Radio sx={{ color: palette.primary.main, '&.Mui-checked': { color: palette.primary.main } }} />}
                  label="Credit card"
                />
                <FormControlLabel
                  value="debit"
                  control={<Radio sx={{ color: palette.primary.main, '&.Mui-checked': { color: palette.primary.main } }} />}
                  label="Debit card"
                />
                <FormControlLabel
                  value="paypal"
                  control={<Radio sx={{ color: palette.primary.main, '&.Mui-checked': { color: palette.primary.main } }} />}
                  label="PayPal"
                />
              </RadioGroup>

              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Name on card" placeholder="Full name as displayed on card" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Credit card number" placeholder="0000 0000 0000 0000" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Expiration date" placeholder="MM/YY" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="CVV" placeholder="123" />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                sx={{ mt: 3 }}
              >
                Continue to checkout
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Right: Order Summary Sidebar */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6" fontWeight={700}>
                  Your Cart
                </Typography>
                <Badge badgeContent={3} color="primary" />
              </Box>

              {/* Cart Items */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1.5, borderBottom: `1px solid ${theme.palette.divider}` }}>
                <Box>
                  <Typography variant="body1">Product name</Typography>
                  <Typography variant="body2" color="text.secondary">Brief description</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">$12</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1.5, borderBottom: `1px solid ${theme.palette.divider}` }}>
                <Box>
                  <Typography variant="body1">Second product</Typography>
                  <Typography variant="body2" color="text.secondary">Brief description</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">$8</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1.5, borderBottom: `1px solid ${theme.palette.divider}` }}>
                <Box>
                  <Typography variant="body1">Third item</Typography>
                  <Typography variant="body2" color="text.secondary">Brief description</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">$5</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1.5, borderBottom: `1px solid ${theme.palette.divider}` }}>
                <Typography variant="body1" sx={{ color: theme.palette.success.main }}>
                  Promo code
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.success.main }}>
                  -$5
                </Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6" fontWeight={700}>Total (USD)</Typography>
                <Typography variant="h6" fontWeight={700}>$20</Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField fullWidth placeholder="Promo code" size="small" />
                <Button variant="outlined" color="primary" sx={{ whiteSpace: 'nowrap' }}>
                  Redeem
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckoutPage;
