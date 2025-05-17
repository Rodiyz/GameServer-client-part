'use client'

import React, { useEffect, useState } from "react";
import rules from './ruleslist';
import { Categories } from "./categories";
import { Rulespage } from './rulespage';

interface Props {
    className?: string;
}

export const Rulesmain: React.FC<Props> = ({ className }) => {

  const [activeRuleId, setActiveRuleId] = useState<string>(rules[0].id);

  const handleScroll = () => {
      const scrollPosition = window.scrollY;

      rules.forEach((rule) => {
          const element = document.getElementById(rule.id);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveRuleId(rule.id);
              }
          }
      });
  };

  const handleMenuClick = (id:string) => {
      const element = document.getElementById(id);
      if (element) {
          element.scrollIntoView({ behavior:"smooth" });
          setActiveRuleId(id);
      }
  };

  useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
          window.removeEventListener("scroll", handleScroll);
      };
  }, []);

  return (
    
    
    <div className="">
    <Categories rules={rules} activeRuleId={activeRuleId} onMenuClick={handleMenuClick} />
    <Rulespage rules={rules} />
    </div>
    

    
  );
};
    