import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Rating,
  Link as MuiLink,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { palette, semantic } from '../theme';

import product1 from '../assets/images/product/1.jpg';
import product2 from '../assets/images/product/2.jpg';
import product3 from '../assets/images/product/3.jpg';
import product4 from '../assets/images/product/4.jpg';
import product5 from '../assets/images/product/5.jpg';
import product6 from '../assets/images/product/6.jpg';
import product7 from '../assets/images/product/7.jpg';

const productImages = [product1, product2, product3, product4, product5, product6, product7];

interface Product {
  id: number;
  name: string;
  price: string;
  rating: number;
  image: string;
}

const allProducts: Product[] = [
  { id: 1, name: 'BONORUM ET MALORUM', price: '$761.00', rating: 4, image: productImages[0] },
  { id: 2, name: 'STRIPED DRESS', price: '$159.00', rating: 4.5, image: productImages[1] },
  { id: 3, name: 'BBOW POLKA-DOT', price: '$357.00', rating: 3.5, image: productImages[2] },
  { id: 4, name: 'Z PRODUCT 360', price: '$indudu.00', rating: 4, image: productImages[3] },
  { id: 5, name: 'CHAIR GREY', price: '$400.00', rating: 5, image: productImages[4] },
  { id: 6, name: 'FOX SAKE WITHE', price: '$451.00', rating: 4.5, image: productImages[5] },
  { id: 7, name: 'BACK BAG', price: '$357.00', rating: 4, image: productImages[6] },
  { id: 8, name: 'FLARE DRESS', price: '$640.00', rating: 4.5, image: productImages[0] },
];

const ProductGridPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 2 }}>
      <Grid container spacing={3}>
        {allProducts.map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
            <Card>
              <Box
                component="img"
                src={product.image}
                alt={product.name}
                sx={{
                  width: '100%',
                  height: 200,
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <CardContent>
                <MuiLink
                  href="#"
                  underline="none"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    display: 'block',
                    mb: 0.5,
                    '&:hover': { color: palette.primary.main },
                  }}
                >
                  {product.name}
                </MuiLink>
                <Rating
                  value={product.rating}
                  readOnly
                  size="small"
                  precision={0.5}
                  sx={{
                    '& .MuiRating-iconFilled': { color: semantic.starColor },
                    '& .MuiRating-iconHover': { color: semantic.starColor },
                  }}
                />
                <Typography variant="body1" sx={{ fontWeight: 600, mt: 0.5 }}>
                  {product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductGridPage;
