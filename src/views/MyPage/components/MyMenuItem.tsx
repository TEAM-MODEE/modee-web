import { ReactNode } from 'react';
import styled from 'styled-components';

import { IcRightGrey } from '../../@common/assets/icons';
interface MyMenuItemProps {
  icon: ReactNode;
  text: string;
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
const MyMenuItem = ({ icon, text, setModalOpen }: MyMenuItemProps) => {
  return (
    <S.MyMenuItemLayout
      onClick={() => {
        setModalOpen && setModalOpen(true);
      }}>
      {icon}
      <S.MyMenuItemParagraph>{text}</S.MyMenuItemParagraph>
      <IcRightGrey />
    </S.MyMenuItemLayout>
  );
};

export default MyMenuItem;

const S = {
  MyMenuItemLayout: styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    position: relative;

    & > svg:nth-child(3) {
      position: absolute;
      right: 0;
    }
  `,
  MyMenuItemParagraph: styled.p`
    color: ${({ theme }) => theme.colors.moddy_bk};
    ${({ theme }) => theme.fonts.Body01};
  `,
};
