import React from 'react';
import { Box, Grid } from '@mui/material';
import {
  HeroBannerCard,
  ProjectStatisticsCard,
  CompletionRateCard,
  RecentEmailsCard,
  TotalClientsCard,
  ProgressTargetCard,
  StatsSparklineCard,
  ProfileProjectCard,
  EmailCategoriesCard,
  ImportantProjectsCard,
  MessagesCard,
} from '../components/Dashboard';

const DashboardHome: React.FC = () => {
  return (
    <Box sx={{ py: 2 }}>
      <Grid container spacing={3}>
        {/* ═══ LEFT COLUMN ═══ */}
        <Grid size={{ xs: 12, xl: 6 }}>
          <Grid container spacing={3}>
            {/* Hero Banner */}
            <Grid size={12}>
              <HeroBannerCard />
            </Grid>

            {/* Project Statistics */}
            <Grid size={12}>
              <ProjectStatisticsCard />
            </Grid>

            {/* Completion Rate */}
            <Grid size={12}>
              <CompletionRateCard />
            </Grid>

            {/* Recent Emails */}
            <Grid size={12}>
              <RecentEmailsCard />
            </Grid>
          </Grid>
        </Grid>

        {/* ═══ RIGHT COLUMN ═══ */}
        <Grid size={{ xs: 12, xl: 6 }}>
          <Grid container spacing={3}>
            {/* Stats Row - Top */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <TotalClientsCard />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <ProgressTargetCard />
            </Grid>

            {/* Stats Row - Sparklines */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <StatsSparklineCard
                value="562"
                label="Total Clients"
                change="-2%"
                changeColor="#FC2E53"
                data={[100, 300, 100, 400, 200, 400]}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <StatsSparklineCard
                value="892"
                label="New Projects"
                change="-2%"
                changeColor="#09BD3C"
                data={[100, 300, 200, 400, 100, 400]}
                sparkWidth={80}
              />
            </Grid>

            {/* Profile + Radial */}
            <Grid size={12}>
              <ProfileProjectCard />
            </Grid>

            {/* Email Categories + Important Projects */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <EmailCategoriesCard />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <ImportantProjectsCard />
            </Grid>

            {/* Messages */}
            <Grid size={12}>
              <MessagesCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardHome;
