import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
  Button,
  Rating,
  IconButton,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';
import { palette } from '../theme';

interface Product {
  id: number;
  name: string;
  price: string;
  rating: number;
  gradient: string;
}

const products: Product[] = [
  { id: 1, name: 'Bluetooth Speaker', price: '$49.00', rating: 4, gradient: 'linear-gradient(135deg, #886CC0 0%, #FFA7D7 100%)' },
  { id: 2, name: 'Wireless Headphones', price: '$49.00', rating: 4, gradient: 'linear-gradient(135deg, #6c4bae 0%, #D653C1 100%)' },
  { id: 3, name: 'Smart Watch', price: '$49.00', rating: 4, gradient: 'linear-gradient(135deg, #09BD3C 0%, #FFCF6D 100%)' },
  { id: 4, name: 'Laptop Stand', price: '$49.00', rating: 4, gradient: 'linear-gradient(135deg, #FC2E53 0%, #FFA7D7 100%)' },
  { id: 5, name: 'USB Hub', price: '$49.00', rating: 4, gradient: 'linear-gradient(135deg, #886CC0 0%, #17a2b8 100%)' },
  { id: 6, name: 'Mechanical Keyboard', price: '$49.00', rating: 4, gradient: 'linear-gradient(135deg, #D653C1 0%, #FFCF6D 100%)' },
  { id: 7, name: 'Monitor Light', price: '$49.00', rating: 4, gradient: 'linear-gradient(135deg, #4d06a5 0%, #886CC0 100%)' },
  { id: 8, name: 'Webcam HD', price: '$49.00', rating: 4, gradient: 'linear-gradient(135deg, #09BD3C 0%, #886CC0 100%)' },
];

const ProductGridPage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box sx={{ py: 2 }}>
      {/* Top bar */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" fontWeight={700}>
          Products
        </Typography>
        <Box>
          <IconButton sx={{ color: palette.primary.main }}>
            <ViewModuleIcon />
          </IconButton>
          <IconButton sx={{ color: theme.palette.text.secondary }}>
            <ViewListIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Product Grid */}
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}>
            <Card>
              {/* Gradient placeholder image */}
              <Box
                sx={{
                  height: 200,
                  background: product.gradient,
                  borderRadius: '10px 10px 0 0',
                }}
              />
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                  {product.name}
                </Typography>
                <Rating value={product.rating} readOnly size="small" />
                <Typography variant="h6" fontWeight={700} sx={{ mt: 1, color: palette.primary.main }}>
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button variant="outlined" color="primary" fullWidth>
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductGridPage;
