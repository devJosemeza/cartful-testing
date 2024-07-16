import { Card } from "../../card/card";
import CofferMakerIcon  from '@/../../public/assets/icons/coffee-maker-desktop.svg';
import FrenchPressIcon  from '@/../../public/assets/icons/french-press-desktop.svg';
import PourOverIcon  from '@/../../public/assets/icons/pour-over-desktop.svg';
import AeroPressIcon  from '@/../../public/assets/icons/aeropress-desktop.svg';
import EspressoIcon  from '@/../../public/assets/icons/espresso-desktop.svg';
import PodsIcon  from '@/../../public/assets/icons/pods-desktop.svg';
import MokaPotIcon  from '@/../../public/assets/icons/moka-pot-desktop.svg';
import { useState } from "react";
import { ArchedContainer, Step2tStyles } from "./Step2Styles";

const cards = [
    {
      icon: CofferMakerIcon,
      title: "Coffee Maker",
      color: '#EEB426'
    },
    {
      icon: FrenchPressIcon,
      title: "French Press",
      color: '#9CAF96'
    },
    {
      icon: PourOverIcon,
      title: "Pour Over",
      color: '#D4A1A6'
    },
    {
      icon: AeroPressIcon,
      title: "Aero Press",
      color: '#DA8464'
    },
    {
        icon: EspressoIcon,
        title: "Espresso",
        color: '#A9C9E1'
    },
    {
        icon: PodsIcon,
        title: "Pods",
        color: '#C47D30'
    },
    {
        icon: MokaPotIcon,
        title: "Moka Pot",
        color: '#D2C6C3'
    }
  ];

export const Step2 = ({ handleNext }) => {
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCardIndex(index === selectedCardIndex ? null : index);
  };

    return (

        
        <Step2tStyles>
            <div className="wrapper">
                <h2>How do you brew at home?</h2>

                  <ArchedContainer numItems={cards.length}>
                    {cards.map((card, index) => (
                          <Card className="card small"
                              key={index}
                              icon={card.icon}
                              title={card.title}
                              color={card.color}
                              isSelected={index === selectedCardIndex}
                              isAnySelected={selectedCardIndex !== null}
                              onClick={() => handleCardClick(index)}
                          />
                      ))}
                  </ArchedContainer>
                    
                {selectedCardIndex !== null && (
                    <div className="button-continue">
                        <button onClick={handleNext}>CONTINUE</button>
                    </div>
                )}
            </div>
        </Step2tStyles>
    )
}