import React from 'react';
import { mount, shallow } from 'enzyme';
import CohortDetails from './CohortDetails';
import CohortData from './CohortData';

describe("Cohort Details Component", () => {
    test("should create the component", () => {
        const wrapper = shallow(<CohortDetails cohort={CohortData[0]} />);
        expect(wrapper.exists()).toBe(true);
    });

    test("should initialize the props", () => {
        const singleCohort = CohortData[0];
        const wrapper = mount(<CohortDetails cohort={singleCohort} />);
        expect(wrapper.props().cohort).toEqual(singleCohort);
    });

    test("should display cohort code in h3", () => {
        const singleCohort = CohortData[0];
        const wrapper = mount(<CohortDetails cohort={singleCohort} />);
        const h3 = wrapper.find('h3');
        expect(h3.text()).toContain(singleCohort.cohortCode);
    });

    test("should always render same html", () => {
        const singleCohort = CohortData[0];
        const wrapper = shallow(<CohortDetails cohort={singleCohort} />);
        expect(wrapper).toMatchSnapshot();
    });
});
