import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { palette } from '../theme';

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

const CalendarPage: React.FC = () => {
  const theme = useTheme();

  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const todayDate = today.getFullYear() === year && today.getMonth() === month ? today.getDate() : -1;

  // Build weeks
  const weeks: (number | null)[][] = [];
  let currentDay = 1;
  for (let w = 0; w < 6; w++) {
    const week: (number | null)[] = [];
    for (let d = 0; d < 7; d++) {
      if (w === 0 && d < firstDay) {
        week.push(null);
      } else if (currentDay > daysInMonth) {
        week.push(null);
      } else {
        week.push(currentDay);
        currentDay++;
      }
    }
    weeks.push(week);
    if (currentDay > daysInMonth) break;
  }

  const handlePrev = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNext = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const cellSx = {
    textAlign: 'center' as const,
    py: 1.5,
    px: 1,
    border: `1px solid ${theme.palette.divider}`,
    fontSize: '0.875rem',
    color: theme.palette.text.primary,
    cursor: 'default',
  };

  return (
    <Box sx={{ py: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: 600, color: theme.palette.text.primary, mb: 3 }}>
        Calendar
      </Typography>

      <Card
        sx={{
          borderRadius: '0.625rem',
          bgcolor: theme.palette.background.paper,
        }}
      >
        <CardContent sx={{ p: 3 }}>
          {/* Month/Year Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <IconButton
              onClick={handlePrev}
              sx={{
                bgcolor: alpha(palette.primary.main, 0.1),
                '&:hover': { bgcolor: alpha(palette.primary.main, 0.2) },
              }}
            >
              <ChevronLeftIcon sx={{ color: palette.primary.main }} />
            </IconButton>
            <Typography sx={{ fontWeight: 600, fontSize: '1.125rem', color: theme.palette.text.primary }}>
              {MONTH_NAMES[month]} {year}
            </Typography>
            <IconButton
              onClick={handleNext}
              sx={{
                bgcolor: alpha(palette.primary.main, 0.1),
                '&:hover': { bgcolor: alpha(palette.primary.main, 0.2) },
              }}
            >
              <ChevronRightIcon sx={{ color: palette.primary.main }} />
            </IconButton>
          </Box>

          {/* Calendar Grid */}
          <Table sx={{ tableLayout: 'fixed' }}>
            <TableHead>
              <TableRow>
                {DAYS_OF_WEEK.map((day) => (
                  <TableCell
                    key={day}
                    sx={{
                      textAlign: 'center',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      color: palette.primary.main,
                      border: `1px solid ${theme.palette.divider}`,
                      bgcolor: alpha(palette.primary.main, 0.05),
                      py: 1.5,
                    }}
                  >
                    {day}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {weeks.map((week, wi) => (
                <TableRow key={wi}>
                  {week.map((day, di) => (
                    <TableCell
                      key={di}
                      sx={{
                        ...cellSx,
                        ...(day === todayDate
                          ? {
                              bgcolor: palette.primary.main,
                              color: palette.primary.contrastText,
                              fontWeight: 700,
                              borderRadius: 0,
                            }
                          : {}),
                        ...(day === null ? { color: 'transparent' } : {}),
                        '&:hover': day
                          ? {
                              bgcolor: day === todayDate ? palette.primary.dark : theme.palette.action.hover,
                            }
                          : {},
                      }}
                    >
                      {day ?? ''}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CalendarPage;
