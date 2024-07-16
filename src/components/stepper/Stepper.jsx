import React, { useState } from 'react';

import { Step1 } from '../stepperContent/step1/Step1';
import { Step2 } from '../stepperContent/step2/Step2';
import { Step3 } from '../stepperContent/step3/Step3';
import { Navigation, Step, StepContent, StepperContainer, StepperHeader } from './StepperStyles';

import LeftArrowIcon  from '@/../../public/assets/icons/left-arrow.svg';

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };


  const steps = [
    { label: '1', component: <Step1 handleNext={handleNext}/> },
    { label: '2', component: <Step2 handleNext={handleNext}/> },
    { label: '3', component: <Step3 /> },
  ];

  return (
    <StepperContainer>
      <StepperHeader>
        {steps.map((step, index) => (
          <Step
            key={index}
            isActive={index === currentStep}
            isCompleted={index < currentStep}
          >
            {step.label}
          </Step>
        ))}
      </StepperHeader>
      <StepContent>{steps[currentStep].component}</StepContent>
      <Navigation>
        { currentStep > 0 && currentStep < 3 - 1 && (
            <button onClick={handleBack} disabled={currentStep === 0}>
                <img src={LeftArrowIcon} alt='Go back'/>
                Back
            </button>
        )}
        { currentStep < 3 - 1 && (
            <button className='btn-why'>
                Why it matters   +
            </button>
        )}
        
      </Navigation>
    </StepperContainer>
  );
};

export default Stepper;
