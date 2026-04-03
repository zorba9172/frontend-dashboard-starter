import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Chip,
  Divider,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { palette } from '../theme';
import qrImage from '../assets/images/qr.png';

interface InvoiceItem {
  num: number;
  item: string;
  description: string;
  unitCost: string;
  qty: number;
  total: string;
}

const invoiceItems: InvoiceItem[] = [
  { num: 1, item: 'Origin License', description: 'Extended License', unitCost: '$999.00', qty: 1, total: '$999.00' },
  { num: 2, item: 'Custom Services', description: 'Customization work', unitCost: '$3,000.00', qty: 1, total: '$3,000.00' },
  { num: 3, item: 'Hosting', description: '1-year hosting', unitCost: '$499.00', qty: 1, total: '$499.00' },
  { num: 4, item: 'Platinum Support', description: 'Support package', unitCost: '$3,999.00', qty: 1, total: '$3,999.00' },
];

const InvoicePage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 2 }}>
      <Card>
        <CardContent>
          {/* Invoice Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4, flexWrap: 'wrap', gap: 2 }}>
            <Box>
              <Typography variant="h4" fontWeight={700}>
                Invoice
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                #INV-0001
              </Typography>
              <Typography variant="body2" color="text.secondary">
                12/06/2024
              </Typography>
            </Box>
            <Chip
              label="Pending"
              sx={{
                bgcolor: alpha(palette.warning.main, 0.15),
                color: palette.warning.dark,
                fontWeight: 700,
                fontSize: '0.85rem',
                px: 1,
              }}
            />
          </Box>

          {/* From / To */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1, color: palette.primary.main }}>
                From
              </Typography>
              <Typography variant="body1" fontWeight={600}>Webz Poland</Typography>
              <Typography variant="body2" color="text.secondary">Jeremias</Typography>
              <Typography variant="body2" color="text.secondary">ul. Filtrowa 68</Typography>
              <Typography variant="body2" color="text.secondary">00-132 Warszawa</Typography>
              <Typography variant="body2" color="text.secondary">Poland</Typography>
              <Typography variant="body2" color="text.secondary">info@webz.com.pl</Typography>
              <Typography variant="body2" color="text.secondary">+48 123 456 789</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1, color: palette.primary.main }}>
                To
              </Typography>
              <Typography variant="body1" fontWeight={600}>Bob Mart</Typography>
              <Typography variant="body2" color="text.secondary">Daniel Marek</Typography>
              <Typography variant="body2" color="text.secondary">ul. Kubickiego 11</Typography>
              <Typography variant="body2" color="text.secondary">02-954 Warszawa</Typography>
              <Typography variant="body2" color="text.secondary">Poland</Typography>
              <Typography variant="body2" color="text.secondary">info@bobmart.com</Typography>
            </Grid>
          </Grid>

          {/* QR Code Section */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4, flexWrap: 'wrap' }}>
            <Box
              component="img"
              src={qrImage}
              alt="QR Code"
              sx={{ width: 120, height: 120, borderRadius: 1 }}
            />
            <Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                <strong>Bitcoin Address:</strong> 1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                <strong>Exchange Rate:</strong> 1 BTC = $56,210.00
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>BTC Amount:</strong> 0.15050000 BTC
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ mb: 3 }} />

          {/* Items Table */}
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  bgcolor: alpha(palette.primary.main, 0.06),
                }}
              >
                <TableCell sx={{ fontWeight: 700 }}>#</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Item</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Description</TableCell>
                <TableCell align="right" sx={{ fontWeight: 700 }}>Unit Cost</TableCell>
                <TableCell align="right" sx={{ fontWeight: 700 }}>Qty</TableCell>
                <TableCell align="right" sx={{ fontWeight: 700 }}>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoiceItems.map((item, index) => (
                <TableRow
                  key={item.num}
                  sx={{
                    bgcolor: index % 2 === 1 ? alpha(palette.primary.main, 0.03) : 'transparent',
                  }}
                >
                  <TableCell>{item.num}</TableCell>
                  <TableCell>{item.item}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell align="right">{item.unitCost}</TableCell>
                  <TableCell align="right">{item.qty}</TableCell>
                  <TableCell align="right">{item.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Divider sx={{ my: 3 }} />

          {/* Summary */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Box sx={{ width: 300 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2" color="text.secondary">Subtotal</Typography>
                <Typography variant="body2" fontWeight={600}>$8,497.00</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2" color="text.secondary">Discount (20%)</Typography>
                <Typography variant="body2" fontWeight={600} sx={{ color: theme.palette.error.main }}>
                  -$1,699.40
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2" color="text.secondary">VAT (10%)</Typography>
                <Typography variant="body2" fontWeight={600}>$679.76</Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" fontWeight={700}>Total</Typography>
                <Typography variant="h6" fontWeight={700} sx={{ color: palette.primary.main }}>
                  $7,477.36
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right', mt: 0.5 }}>
                ≈ 0.15050000 BTC
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default InvoicePage;
