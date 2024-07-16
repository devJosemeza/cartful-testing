import { Card } from "../../card/card";
import EnthusiastIcon from '@/../../public/assets/icons/enthusiast.svg';
import PrettyIcon from '@/../../public/assets/icons/pretty-much-a-barista.svg';
import RefiningIcon from '@/../../public/assets/icons/refining-my-palate.svg';
import NotSureIcon from '@/../../public/assets/icons/im-not-sure.svg';
import { Step1Styles } from "./Step1Styles";
import { useState } from "react";
import { AnimatePresence } from 'framer-motion';
import Transition from "../../transitions/Transition";


const cards = [
  {
    icon: EnthusiastIcon,
    title: "I'm an enthusiast",
    subtitle: "I know a bit about brewing and roast levels",
    color: '#DA8464'
  },
  {
    icon: RefiningIcon,
    title: "I'm refining my palate",
    subtitle: "I can recognize different coffee types/flavors",
    color: '#EEB426'
  },
  {
    icon: PrettyIcon,
    title: "I'm pretty much a barista",
    subtitle: "I work in the industry... or probably should",
    color: '#9CAF96'
  },
  {
    icon: NotSureIcon,
    title: "I'm not sure",
    subtitle: "I know that I just like coffee",
    color: '#D4A1A6'
  },
];

export const Step1 = ({ handleNext }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [showTransition, setShowTransition] = useState(false);

  const handleCardClick = (index) => {
    setSelectedCardIndex(index === selectedCardIndex ? null : index);
  };

  const handleContinue = () => {
    if (selectedCardIndex === 2) { // Index de "I’m pretty much a barista"
      setShowTransition(true);
    } else {
      handleNext();
    }
  };

  const handleTransitionComplete = () => {
    setShowTransition(false);
    handleNext();
  };

  return (
    <AnimatePresence>
      {showTransition ? (
        <Transition key="transition" onComplete={handleTransitionComplete} />
      ) : (
        <Step1Styles key="step1">
          <div className="wrapper">
            <h2>Where are you on your coffee journey?</h2>
            <div className="container-card">
              {cards.map((card, index) => (
                <Card
                  className="card medium"
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  subtitle={card.subtitle}
                  color={card.color}
                  isSelected={index === selectedCardIndex}
                  isAnySelected={selectedCardIndex !== null}
                  onClick={() => handleCardClick(index)}
                />
              ))}
            </div>
            {selectedCardIndex !== null && (
              <div className="button-continue">
                <button onClick={handleContinue}>
                  CONTINUE
                </button>
              </div>
            )}
          </div>
        </Step1Styles>
      )}
    </AnimatePresence>
  );
};

export default Step1;
