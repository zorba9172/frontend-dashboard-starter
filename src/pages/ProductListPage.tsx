import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  Rating,
  Chip,
  Divider,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { palette } from '../theme';

interface Product {
  id: number;
  name: string;
  price: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  code: string;
  brand: string;
  description: string;
  gradient: string;
}

const products: Product[] = [
  {
    id: 1, name: 'Bluetooth Speaker', price: '$49.00', rating: 4, reviews: 128,
    inStock: true, code: 'BS-1001', brand: 'SoundWave',
    description: 'Portable wireless speaker with rich bass and 12-hour battery life.',
    gradient: 'linear-gradient(135deg, #886CC0 0%, #FFA7D7 100%)',
  },
  {
    id: 2, name: 'Wireless Headphones', price: '$79.00', rating: 4.5, reviews: 256,
    inStock: true, code: 'WH-2002', brand: 'AudioPro',
    description: 'Over-ear noise-cancelling headphones with premium sound quality.',
    gradient: 'linear-gradient(135deg, #6c4bae 0%, #D653C1 100%)',
  },
  {
    id: 3, name: 'Smart Watch', price: '$199.00', rating: 4, reviews: 89,
    inStock: false, code: 'SW-3003', brand: 'TechFit',
    description: 'Feature-packed smartwatch with health monitoring and GPS tracking.',
    gradient: 'linear-gradient(135deg, #09BD3C 0%, #FFCF6D 100%)',
  },
  {
    id: 4, name: 'Laptop Stand', price: '$35.00', rating: 4, reviews: 312,
    inStock: true, code: 'LS-4004', brand: 'DeskMate',
    description: 'Adjustable aluminum laptop stand for ergonomic working posture.',
    gradient: 'linear-gradient(135deg, #FC2E53 0%, #FFA7D7 100%)',
  },
  {
    id: 5, name: 'USB Hub', price: '$25.00', rating: 3.5, reviews: 67,
    inStock: true, code: 'UH-5005', brand: 'ConnectPro',
    description: 'Compact 7-port USB 3.0 hub with fast data transfer speeds.',
    gradient: 'linear-gradient(135deg, #886CC0 0%, #17a2b8 100%)',
  },
  {
    id: 6, name: 'Mechanical Keyboard', price: '$129.00', rating: 4.5, reviews: 445,
    inStock: false, code: 'MK-6006', brand: 'KeyCraft',
    description: 'RGB mechanical keyboard with Cherry MX switches and full NKRO.',
    gradient: 'linear-gradient(135deg, #D653C1 0%, #FFCF6D 100%)',
  },
];

const ProductListPage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 3 }}>
        Products
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {products.map((product) => (
          <Card key={product.id}>
            <CardContent>
              <Grid container spacing={3}>
                {/* Product Image */}
                <Grid size={{ xs: 12, sm: 'auto' }}>
                  <Box
                    sx={{
                      width: 180,
                      height: 180,
                      background: product.gradient,
                      borderRadius: 2,
                      flexShrink: 0,
                    }}
                  />
                </Grid>

                {/* Product Details */}
                <Grid size={{ xs: 12, sm: 8 }}>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    {product.name}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Rating value={product.rating} readOnly size="small" precision={0.5} />
                    <Typography variant="body2" color="text.secondary">
                      ({product.reviews} reviews)
                    </Typography>
                  </Box>

                  <Typography variant="h5" fontWeight={700} sx={{ color: palette.primary.main, mb: 1 }}>
                    {product.price}
                  </Typography>

                  <Chip
                    label={product.inStock ? 'In Stock' : 'Out of Stock'}
                    size="small"
                    sx={{
                      bgcolor: product.inStock
                        ? alpha(palette.success.main, 0.15)
                        : alpha(palette.danger.main, 0.15),
                      color: product.inStock ? palette.success.main : palette.danger.main,
                      fontWeight: 600,
                      mb: 1,
                    }}
                  />

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {product.description}
                  </Typography>

                  <Divider sx={{ my: 1 }} />

                  <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', alignItems: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                      Code: <strong>{product.code}</strong>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Brand: <strong>{product.brand}</strong>
                    </Typography>
                    <Button variant="text" size="small" sx={{ color: palette.primary.main, ml: 'auto' }}>
                      Write a Review
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ProductListPage;
