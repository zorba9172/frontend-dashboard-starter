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
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { palette } from '../theme';

const cartItems = [
  { name: 'Bluetooth Speaker', price: 49.0 },
  { name: 'Wireless Headphones', price: 79.0 },
  { name: 'USB Hub', price: 25.0 },
];

const CheckoutPage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = 5.0;
  const total = subtotal + shipping;

  return (
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 3 }}>
        Checkout
      </Typography>

      <Grid container spacing={3}>
        {/* Billing Address Form */}
        <Grid size={{ xs: 12, xl: 8 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>
                Billing Address
              </Typography>

              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="First Name" placeholder="John" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Last Name" placeholder="Doe" />
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
                  <TextField fullWidth label="Email" type="email" placeholder="you@example.com" />
                </Grid>
                <Grid size={12}>
                  <TextField fullWidth label="Address" placeholder="1234 Main St" />
                </Grid>
                <Grid size={12}>
                  <TextField fullWidth label="Address 2" placeholder="Apartment or suite" />
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
                  <TextField fullWidth label="Zip Code" placeholder="12345" />
                </Grid>
              </Grid>

              <Divider sx={{ my: 3 }} />

              <FormControlLabel
                control={<Checkbox sx={{ color: palette.primary.main, '&.Mui-checked': { color: palette.primary.main } }} />}
                label="Ship to a different address"
              />
              <br />
              <FormControlLabel
                control={<Checkbox sx={{ color: palette.primary.main, '&.Mui-checked': { color: palette.primary.main } }} />}
                label="Save this information for next time"
              />

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                Payment Method
              </Typography>

              <RadioGroup value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <FormControlLabel value="credit" control={<Radio sx={{ color: palette.primary.main, '&.Mui-checked': { color: palette.primary.main } }} />} label="Credit Card" />
                <FormControlLabel value="debit" control={<Radio sx={{ color: palette.primary.main, '&.Mui-checked': { color: palette.primary.main } }} />} label="Debit Card" />
                <FormControlLabel value="paypal" control={<Radio sx={{ color: palette.primary.main, '&.Mui-checked': { color: palette.primary.main } }} />} label="PayPal" />
              </RadioGroup>

              {(paymentMethod === 'credit' || paymentMethod === 'debit') && (
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Name on Card" placeholder="Full name as displayed on card" />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Card Number" placeholder="0000 0000 0000 0000" />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Expiration" placeholder="MM/YY" />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="CVV" placeholder="123" />
                  </Grid>
                </Grid>
              )}

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

        {/* Cart Summary Sidebar */}
        <Grid size={{ xs: 12, xl: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                Your Cart
              </Typography>

              {cartItems.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: 1.5,
                    borderBottom: index < cartItems.length - 1 ? `1px solid ${theme.palette.divider}` : 'none',
                  }}
                >
                  <Typography variant="body1">{item.name}</Typography>
                  <Typography variant="body1" fontWeight={600}>
                    ${item.price.toFixed(2)}
                  </Typography>
                </Box>
              ))}

              <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                <TextField fullWidth placeholder="Promo code" size="small" />
                <Button variant="outlined" color="primary" sx={{ whiteSpace: 'nowrap' }}>
                  Apply
                </Button>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2" color="text.secondary">Subtotal</Typography>
                <Typography variant="body2" fontWeight={600}>${subtotal.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2" color="text.secondary">Shipping</Typography>
                <Typography variant="body2" fontWeight={600}>${shipping.toFixed(2)}</Typography>
              </Box>

              <Divider sx={{ my: 1 }} />

              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" fontWeight={700}>Total</Typography>
                <Typography variant="h6" fontWeight={700} sx={{ color: palette.primary.main }}>
                  ${total.toFixed(2)}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckoutPage;
