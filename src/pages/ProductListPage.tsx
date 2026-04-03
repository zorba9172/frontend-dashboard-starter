import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  Rating,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Link as MuiLink,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { palette, semantic } from '../theme';

import product2 from '../assets/images/product/2.jpg';
import product3 from '../assets/images/product/3.jpg';
import product4 from '../assets/images/product/4.jpg';
import product5 from '../assets/images/product/5.jpg';
import product6 from '../assets/images/product/6.jpg';
import product7 from '../assets/images/product/7.jpg';

interface Product {
  id: number;
  name: string;
  price: string;
  rating: number;
  reviews: number;
  availability: boolean;
  code: string;
  brand: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1, name: 'BONORUM ET MALORUM', price: '$320.00', rating: 4, reviews: 128,
    availability: true, code: '0405689', brand: 'Lee',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
    image: product2,
  },
  {
    id: 2, name: 'STRIPED DRESS', price: '$325.00', rating: 4.5, reviews: 256,
    availability: true, code: '0405689', brand: 'Lee',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
    image: product3,
  },
  {
    id: 3, name: 'BBOW POLKA-DOT', price: '$480.00', rating: 4, reviews: 89,
    availability: true, code: '0405689', brand: 'Lee',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
    image: product4,
  },
  {
    id: 4, name: 'Z PRODUCT 360', price: '$658.00', rating: 3.5, reviews: 312,
    availability: true, code: '0405689', brand: 'Lee',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
    image: product5,
  },
  {
    id: 5, name: 'CHAIR GREY', price: '$280.00', rating: 5, reviews: 67,
    availability: true, code: '0405689', brand: 'Lee',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
    image: product6,
  },
  {
    id: 6, name: 'FOX SAKE WITHE', price: '$600.00', rating: 4.5, reviews: 445,
    availability: true, code: '0405689', brand: 'Lee',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
    image: product7,
  },
];

const ProductListPage: React.FC = () => {
  const theme = useTheme();
  const [reviewOpen, setReviewOpen] = useState(false);
  const [reviewRating, setReviewRating] = useState<number | null>(0);
  const [reviewComment, setReviewComment] = useState('');

  return (
    <Box sx={{ py: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {products.map((product) => (
          <Card key={product.id}>
            <CardContent>
              <Grid container spacing={3}>
                {/* Product Image */}
                <Grid size={{ xs: 12, md: 5 }}>
                  <Box
                    component="img"
                    src={product.image}
                    alt={product.name}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 1,
                      display: 'block',
                    }}
                  />
                </Grid>

                {/* Product Details */}
                <Grid size={{ xs: 12, md: 7 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {product.name}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
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
                    <Typography variant="body2" color="text.secondary">
                      ({product.reviews} customer reviews)
                    </Typography>
                    <MuiLink
                      component="button"
                      variant="body2"
                      onClick={() => setReviewOpen(true)}
                      sx={{
                        color: palette.primary.main,
                        textDecoration: 'none',
                        cursor: 'pointer',
                        fontWeight: 500,
                      }}
                    >
                      Write a review?
                    </MuiLink>
                  </Box>

                  <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.25rem', mb: 1 }}>
                    {product.price}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                    <CheckCircleIcon sx={{ fontSize: 18, color: theme.palette.success.main }} />
                    <Typography variant="body2" sx={{ color: theme.palette.success.main, fontWeight: 500 }}>
                      In stock
                    </Typography>
                  </Box>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                    Product code: <strong>{product.code}</strong>
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Brand: <strong>{product.brand}</strong>
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Review Modal */}
      <Dialog open={reviewOpen} onClose={() => setReviewOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700 }}>Write a Review</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>
            <Box>
              <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 500 }}>
                Your Rating
              </Typography>
              <Rating
                value={reviewRating}
                onChange={(_, newValue) => setReviewRating(newValue)}
                precision={0.5}
                sx={{
                  '& .MuiRating-iconFilled': { color: semantic.starColor },
                  '& .MuiRating-iconHover': { color: semantic.starColor },
                }}
              />
            </Box>
            <TextField
              multiline
              rows={4}
              fullWidth
              placeholder="Comment"
              value={reviewComment}
              onChange={(e) => setReviewComment(e.target.value)}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setReviewOpen(false);
              setReviewRating(0);
              setReviewComment('');
            }}
          >
            RATE
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProductListPage;
