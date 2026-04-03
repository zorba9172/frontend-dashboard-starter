import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddIcon from '@mui/icons-material/Add';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

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

// ── Event data ──
interface CalendarEvent {
  title: string;
  color: string;
  dates: number[]; // days of month that have this event dot
  description: string;
}

const events: CalendarEvent[] = [
  {
    title: 'Conference',
    color: palette.primary.main,
    dates: [5, 6],
    description: 'June 2024',
  },
  {
    title: 'Meeting',
    color: palette.success.main,
    dates: [12, 13],
    description: 'June 2024',
  },
  {
    title: 'Work From Home',
    color: palette.warning.main,
    dates: [18, 19, 20, 28, 29, 30],
    description: 'June - July 2024',
  },
  {
    title: 'Birthday Party',
    color: palette.danger.main,
    dates: [24],
    description: 'June 2024',
  },
  {
    title: 'Repeating Event',
    color: palette.info.main,
    dates: [8, 15, 22],
    description: 'Every Monday',
  },
];

// Build a lookup: day -> list of dot colors
function buildDotMap(evts: CalendarEvent[]): Record<number, string[]> {
  const map: Record<number, string[]> = {};
  evts.forEach((evt) => {
    evt.dates.forEach((d) => {
      if (!map[d]) map[d] = [];
      map[d].push(evt.color);
    });
  });
  return map;
}

const CalendarPage: React.FC = () => {
  const theme = useTheme();

  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const todayDate =
    today.getFullYear() === year && today.getMonth() === month ? today.getDate() : -1;

  const dotMap = buildDotMap(events);

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

  return (
    <Box sx={{ py: 2 }}>
      <Grid container spacing={3}>
        {/* Left sidebar */}
        <Grid size={{ xs: 12, xl: 3 }}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Button
                variant="contained"
                fullWidth
                startIcon={<AddIcon />}
                sx={{
                  textTransform: 'none',
                  borderRadius: '1.75rem',
                  fontWeight: 600,
                  py: 1.25,
                  mb: 3,
                }}
              >
                Add New Event
              </Button>

              <Typography
                sx={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  mb: 2,
                }}
              >
                Upcoming Events
              </Typography>

              <List disablePadding>
                {events.map((evt) => (
                  <ListItem key={evt.title} disablePadding sx={{ mb: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 28 }}>
                      <FiberManualRecordIcon sx={{ fontSize: 12, color: evt.color }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={evt.title}
                      secondary={evt.description}
                      slotProps={{
                        primary: {
                          sx: {
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            color: theme.palette.text.primary,
                          },
                        },
                        secondary: {
                          sx: {
                            fontSize: '0.75rem',
                            color: theme.palette.text.secondary,
                          },
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Right calendar */}
        <Grid size={{ xs: 12, xl: 9 }}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              {/* Month/Year Header */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 3,
                }}
              >
                <IconButton
                  onClick={handlePrev}
                  sx={{
                    bgcolor: alpha(palette.primary.main, 0.1),
                    '&:hover': { bgcolor: alpha(palette.primary.main, 0.2) },
                  }}
                >
                  <ChevronLeftIcon sx={{ color: palette.primary.main }} />
                </IconButton>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: '1.25rem',
                    color: theme.palette.text.primary,
                  }}
                >
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
                          fontSize: '0.8125rem',
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
                      {week.map((day, di) => {
                        const isToday = day === todayDate;
                        const dots = day ? dotMap[day] || [] : [];
                        return (
                          <TableCell
                            key={di}
                            sx={{
                              textAlign: 'center',
                              py: 1.5,
                              px: 1,
                              border: `1px solid ${theme.palette.divider}`,
                              fontSize: '0.875rem',
                              fontWeight: isToday ? 700 : 400,
                              color: isToday
                                ? palette.primary.contrastText
                                : day !== null
                                  ? theme.palette.text.primary
                                  : 'transparent',
                              bgcolor: isToday ? palette.primary.main : 'transparent',
                              cursor: day ? 'pointer' : 'default',
                              verticalAlign: 'top',
                              height: 70,
                              '&:hover': day
                                ? {
                                    bgcolor: isToday
                                      ? palette.primary.dark
                                      : theme.palette.action.hover,
                                  }
                                : {},
                            }}
                          >
                            <Box>
                              {day ?? ''}
                              {dots.length > 0 && (
                                <Box
                                  sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: 0.5,
                                    mt: 0.5,
                                  }}
                                >
                                  {dots.slice(0, 3).map((dotColor, idx) => (
                                    <Box
                                      key={idx}
                                      sx={{
                                        width: 6,
                                        height: 6,
                                        borderRadius: '50%',
                                        bgcolor: isToday
                                          ? palette.primary.contrastText
                                          : dotColor,
                                      }}
                                    />
                                  ))}
                                </Box>
                              )}
                            </Box>
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CalendarPage;
