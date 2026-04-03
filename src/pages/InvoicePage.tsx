import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  Chip,
  Divider,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import PrintIcon from '@mui/icons-material/Print';
import { palette } from '../theme';

interface InvoiceItem {
  description: string;
  unitCost: number;
  qty: number;
  total: number;
}

const invoiceItems: InvoiceItem[] = [
  { description: 'Website Redesign', unitCost: 500, qty: 1, total: 500 },
  { description: 'Logo Design', unitCost: 250, qty: 2, total: 500 },
  { description: 'SEO Optimization', unitCost: 150, qty: 3, total: 450 },
  { description: 'Content Writing', unitCost: 100, qty: 5, total: 500 },
];

const InvoicePage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const subtotal = invoiceItems.reduce((sum, item) => sum + item.total, 0);
  const discount = subtotal * 0.1;
  const vat = (subtotal - discount) * 0.21;
  const grandTotal = subtotal - discount + vat;

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
                Invoice #INV-00123
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Date: March 15, 2026
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
              <Typography variant="body1" fontWeight={600}>Acme Corp</Typography>
              <Typography variant="body2" color="text.secondary">123 Business Ave</Typography>
              <Typography variant="body2" color="text.secondary">New York, NY 10001</Typography>
              <Typography variant="body2" color="text.secondary">billing@acmecorp.com</Typography>
              <Typography variant="body2" color="text.secondary">+1 (555) 123-4567</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1, color: palette.primary.main }}>
                To
              </Typography>
              <Typography variant="body1" fontWeight={600}>John Doe</Typography>
              <Typography variant="body2" color="text.secondary">456 Client Street</Typography>
              <Typography variant="body2" color="text.secondary">San Francisco, CA 94102</Typography>
              <Typography variant="body2" color="text.secondary">john.doe@email.com</Typography>
              <Typography variant="body2" color="text.secondary">+1 (555) 987-6543</Typography>
            </Grid>
          </Grid>

          <Divider sx={{ mb: 3 }} />

          {/* Items Table */}
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>Description</TableCell>
                <TableCell align="right" sx={{ fontWeight: 700 }}>Unit Cost</TableCell>
                <TableCell align="right" sx={{ fontWeight: 700 }}>Qty</TableCell>
                <TableCell align="right" sx={{ fontWeight: 700 }}>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoiceItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.description}</TableCell>
                  <TableCell align="right">${item.unitCost.toFixed(2)}</TableCell>
                  <TableCell align="right">{item.qty}</TableCell>
                  <TableCell align="right">${item.total.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Divider sx={{ my: 3 }} />

          {/* Footer Totals */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Box sx={{ width: 300 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2" color="text.secondary">Subtotal</Typography>
                <Typography variant="body2" fontWeight={600}>${subtotal.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2" color="text.secondary">Discount (10%)</Typography>
                <Typography variant="body2" fontWeight={600} sx={{ color: palette.danger.main }}>
                  -${discount.toFixed(2)}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2" color="text.secondary">VAT (21%)</Typography>
                <Typography variant="body2" fontWeight={600}>${vat.toFixed(2)}</Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" fontWeight={700}>Grand Total</Typography>
                <Typography variant="h6" fontWeight={700} sx={{ color: palette.primary.main }}>
                  ${grandTotal.toFixed(2)}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Print Button */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<PrintIcon />}
              onClick={() => window.print()}
            >
              Print Invoice
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default InvoicePage;
