import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = ({ cohort }) => {
    const isOngoing = cohort && cohort.status && cohort.status.toLowerCase() === 'ongoing';
    const titleStyle = {
        color: isOngoing ? 'green' : 'blue'
    };

    return (
        <div className={styles.box}>
            <h3 style={titleStyle}>
                {cohort.cohortCode} - {cohort.technology}
            </h3>
            <dl>
                <dt>Start Date</dt>
                <dd>{cohort.startDate}</dd>
                <dt>Current Stage</dt>
                <dd>{cohort.currentStage}</dd>
                <dt>Status</dt>
                <dd>{cohort.status}</dd>
            </dl>
        </div>
    );
};

export const CohortDashboard = () => {
    const sampleCohorts = [
        {
            cohortCode: 'INTADM19N002',
            technology: '.NET Cloud',
            startDate: '01-Aug-2019',
            currentStage: 'Stage 1',
            status: 'Ongoing'
        },
        {
            cohortCode: 'INTADM19N003',
            technology: 'Java FSE',
            startDate: '15-May-2019',
            currentStage: 'Stage 3',
            status: 'Completed'
        },
        {
            cohortCode: 'INTADM19N004',
            technology: 'React UI',
            startDate: '10-Sep-2019',
            currentStage: 'Stage 2',
            status: 'Ongoing'
        }
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h2>Cognizant Academy Cohorts</h2>
            <div>
                {sampleCohorts.map((c) => (
                    <CohortDetails key={c.cohortCode} cohort={c} />
                ))}
            </div>
        </div>
    );
};

export default CohortDetails;
