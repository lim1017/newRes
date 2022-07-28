import React, { memo, useMemo } from 'react';

import makeStyles from '@mui/styles/makeStyles';
import { FormattedMessage, useIntl } from 'react-intl';

import { ProfileCardAnimatedBack } from '../../../../commons/profile_card/profile_card_animated_back/profile_card_animated_back';
import { ProfileCardSectionTitle } from '../../../../commons/profile_card/profile_card_section_title/profile_card_section_title';
import { ProfileCardSectionText } from '../../../../commons/profile_card/profile_card_section_text/profile_card_section_text';
import { ProfileCardSection } from '../../../../commons/profile_card/profile_card_section/profile_card_section';
import { ContractType } from '../../../../commons/fields/contract_types/contract_types';

import { existsAndNotEmpty } from '../../../utils/exists_and_not_empty';

import { translations } from '../../../../../utils/enums_translations/job_search_state_translations';
import { styles } from './basics_back_styles';
import { NoDataButton } from '../../../../commons/no_data_button/no_data_button';
import { ExperienceYears } from './fields/professional_experience';
import { CodeExperienceYears } from './fields/code_professional_experience';
import { OtherExperienceYears } from './fields/other_professional_experience';
import { CodingYears } from './fields/coding_years';
import { StudiesLevel } from './fields/studies_level';
import { useMode } from '../../../../hooks/use_mode';

const useStyles = makeStyles(styles);

const BasicsBackComponent = ({ data, handleAddButtonClick }) => {
    const [mode] = useMode();
    const classes = useStyles();

    const {
        currentCity: { name: currentCityName },
        experienceYears,
        codeExperienceYears,
        otherExperienceYears,
        contractTypes,
        studiesLevel,
        codingYears,
        codingReason,
        searchState,
        visaSponsorship,
        personalDescription
    } = data;

    const descriptionContent = useMemo(() => {
        if (!personalDescription && mode === 'edit') {
            return (
                <NoDataButton
                    handleAddButtonClick={handleAddButtonClick}
                    classes={{
                        container: classes.addButton
                    }}
                >
                    <FormattedMessage id="Basics.noDescription.buttonLabel" defaultMessage="Ajouter une description" />
                </NoDataButton>
            );
        }
        return <span>{personalDescription}</span>;
    }, [personalDescription, mode, handleAddButtonClick, classes]);

    const sections = useMemo(
        () => ({
            personalDescription: {
                title: <FormattedMessage id="Basics.Back.CodingReason.Title" defaultMessage="I am a..." />,
                hide: false,
                value: descriptionContent
            },

            // work: {
            //     title: <FormattedMessage id="Basics.Back.Work.Title" defaultMessage="Work" />,
            //     hide: !experienceYears && !existsAndNotEmpty(contractTypes) && !existsAndNotEmpty(searchState),
            //     value: (
            //         <>
            //             <ExperienceYears experienceYears={experienceYears} codeExperienceYears={codeExperienceYears} />
            //             <CodeExperienceYears
            //                 experienceYears={experienceYears}
            //                 codeExperienceYears={codeExperienceYears}
            //             />
            //             <OtherExperienceYears
            //                 otherExperienceYears={otherExperienceYears}
            //                 codeExperienceYears={codeExperienceYears}
            //             />
            //             <br />
            //             <ContractType contractTypes={contractTypes} />
            //             <br />
            //             <JobSearchState searchState={searchState} />
            //         </>
            //     )
            // },
            // codingYears: {
            //     title: <FormattedMessage id="Basics.Back.CodingYears.title" defaultMessage="Experience" />,
            //     hide: Number.isNaN(Number(codingYears)),
            //     value: <CodingYears codingYears={codingYears} />
            // },
            // studies: {
            //     title: <FormattedMessage id="Basics.Back.StudiesLevel.Title" defaultMessage="Training" />,
            //     hide: !studiesLevel,
            //     value: <StudiesLevel studiesLevel={studiesLevel} />
            // },
            codingReason: {
                title: <FormattedMessage id="Basics.Back.CodingReason.Title" defaultMessage="Why i code" />,
                hide: !codingReason,
                value: <span>{codingReason}</span>
            }
        }),
        [
            currentCityName,
            experienceYears,
            contractTypes,
            studiesLevel,
            codingYears,
            codingReason,
            visaSponsorship,
            personalDescription,
            descriptionContent,
            searchState
        ]
    );

    return (
        <ProfileCardAnimatedBack title={<FormattedMessage id="Basics.Back.Title" defaultMessage="Who?" />}>
            {Object.entries(sections)
                .filter(([, { hide }]) => !hide)
                .map(([id, { title, value }]) => (
                    <ProfileCardSection key={id}>
                        {title && <ProfileCardSectionTitle>{title}</ProfileCardSectionTitle>}
                        <ProfileCardSectionText>{value}</ProfileCardSectionText>
                    </ProfileCardSection>
                ))}
        </ProfileCardAnimatedBack>
    );
};

const JobSearchState = ({ searchState }) => {
    const { formatMessage } = useIntl();
    if (!searchState) {
        return null;
    }
    return <span>{formatMessage(translations[searchState] || translations.unknown)}</span>;
};

export const BasicsBack = memo(BasicsBackComponent);
