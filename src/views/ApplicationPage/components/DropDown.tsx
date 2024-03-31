import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { styled, css } from 'styled-components';

import { IcDownGrey, IcUpBlue } from '../../@common/assets/icons';
import { SELECT_PERIOD, SELECT_SERVICE } from '../constants/select';

import { historyState } from '@/recoil/atoms/applicationState';

interface DropDownProps {
  idx: number;
  boxType: string;
}

const DropDown = ({ idx, boxType }: DropDownProps) => {
  const [serviceHistory, setServiceHistory] = useRecoilState(historyState);
  const [currentDropDown, setCurrentDropDown] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleFocus = (e: MouseEvent) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target as Node)) setCurrentDropDown(false);
    };
    document.addEventListener('mouseup', handleFocus);

    return () => {
      document.removeEventListener('mouseup', handleFocus);
    };
  }, [dropDownRef.current]);

  const handleDropdownClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, field: string) => {
    const newValue = event.currentTarget.innerText;
    const newServiceHistoryRecords = serviceHistory.hairServiceRecords.map((item, i) => {
      if (i === idx) {
        return {
          ...item,
          [field]: newValue,
        };
      }
      return item;
    });

    setServiceHistory({ ...serviceHistory, hairServiceRecords: newServiceHistoryRecords });
  };

  return (
    <S.DropDownLayout
      ref={dropDownRef}
      $height={idx}
      onClick={() => {
        currentDropDown ? setCurrentDropDown(false) : setCurrentDropDown(true);
      }}>
      <S.DropDownBox $isClicked={currentDropDown}>
        <input
          type="button"
          value={
            boxType === 'hairService'
              ? serviceHistory.hairServiceRecords[idx].hairService || '시술  선택'
              : serviceHistory.hairServiceRecords[idx].hairServiceTerm || '기간  선택'
          }
        />
        {currentDropDown ? <IcUpBlue /> : <IcDownGrey />}
        {currentDropDown && (
          <S.SelectDetailList>
            {boxType === 'hairService'
              ? Object.keys(SELECT_SERVICE).map((value, key) => (
                  <li key={key}>
                    <button type="button" onClick={(e) => handleDropdownClick(e, boxType)}>
                      {value}
                    </button>
                  </li>
                ))
              : Object.keys(SELECT_PERIOD).map((value, key) => (
                  <li key={key}>
                    <button type="button" onClick={(e) => handleDropdownClick(e, boxType)}>
                      {value}
                    </button>
                  </li>
                ))}
          </S.SelectDetailList>
        )}
      </S.DropDownBox>
    </S.DropDownLayout>
  );
};

const DropDownLayout = styled.div<{ $height: number }>`
  display: flex;
  flex: 1;
  position: relative;
  z-index: ${(props) => 3 - props.$height};
`;

const selectBtn = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 1.1rem 1.2rem;
  border-radius: 8px;

  cursor: pointer;

  & > input {
    padding: 0;
    border: none;

    background-color: ${({ theme }) => theme.colors.moddy_wt};

    color: ${({ theme }) => theme.colors.moddy_gray50};
    text-align: left;

    ${({ theme }) => theme.fonts.Body02};
  }
`;

const DropDownBox = styled.div<{ $isClicked: boolean }>`
  border: 1px solid ${({ $isClicked, theme }) => ($isClicked ? theme.colors.moddy_blue : theme.colors.moddy_gray50)};

  ${selectBtn};
`;

const SelectDetailList = styled.ul`
  position: absolute;
  top: 5rem;
  left: 0;

  width: 100%;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.moddy_wt};
  box-shadow: ${({ theme }) => theme.effects.shadow4};

  & button {
    width: 100%;
    padding: 1.1rem 1.2rem;
    border-radius: 8px;

    color: ${({ theme }) => theme.colors.moddy_bk};
    text-align: left;

    ${({ theme }) => theme.fonts.Body02};
  }
`;

const S = {
  DropDownLayout,
  DropDownBox,
  SelectDetailList,
};

export default DropDown;