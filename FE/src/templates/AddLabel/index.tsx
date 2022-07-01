import React, { useRef, useState } from 'react';
// eslint-disable-next-line camelcase
import { useRecoilRefresher_UNSTABLE, useRecoilValue } from 'recoil';
import { Text } from '@/components/common/Text';
import { LabelBadge } from '@/components/Label';
import * as S from './style';
import REFRESH from '@/assets/Icons/refresh-ccw.svg';
import CHECK_OFF_CIRCLE from '@/assets/Icons/checkOffCircle.svg';
import { Button } from '@/components/common/Button';
import { getHexColor } from '@/utils/helpers/color.helper';
import { getLabels } from '@/recoil/selectors/getLabels';

type LabelColorProps = {
  refreshHandler: () => void;
  color: string | null;
};

function LabelBackgroundColor({ refreshHandler, color }: LabelColorProps) {
  return (
    <S.ColorInputWrapper>
      <Text text="배경 색상" fontSize="smaller" color="label" />
      <S.FlexBox>
        <Text text={color ? `${color}` : '#EFF0F6'} />
        <S.Cursor>
          <REFRESH onClick={() => refreshHandler()} />
        </S.Cursor>
      </S.FlexBox>
    </S.ColorInputWrapper>
  );
}

type TextColorProps = {
  handleDarkClick: () => void;
  handleWhiteClick: () => void;
};

function LabelTextColor({ handleDarkClick, handleWhiteClick }: TextColorProps) {
  return (
    <S.ColorInputWrapper>
      <Text text="텍스트 색상" fontSize="smaller" color="label" />
      <S.FlexBox>
        <S.FlexBox onClick={handleDarkClick}>
          <CHECK_OFF_CIRCLE />
          <Text text="어두운 색" />
        </S.FlexBox>
        <S.FlexBox onClick={handleWhiteClick}>
          <CHECK_OFF_CIRCLE />
          <Text text="밝은 색" />
        </S.FlexBox>
      </S.FlexBox>
    </S.ColorInputWrapper>
  );
}

export function AddLabel() {
  const [labelName, setLabelName] = useState<string | null>(null);
  const [labelColor, setLabelColor] = useState<string | null>(null);
  const [textColor, setTextColor] = useState<'offwhite' | 'titleArchieve'>(
    'titleArchieve',
  );

  const nameRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const refresh = useRecoilRefresher_UNSTABLE(getLabels);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabelName(e.target.value);
  };

  const handleRefreshClick = () => {
    setLabelColor(getHexColor());
  };

  const handleDarkClick = () => {
    setTextColor('titleArchieve');
  };

  const handleWhiteClick = () => {
    setTextColor('offwhite');
  };

  const handleFinishClick = () => {
    // eslint-disable-next-line no-useless-return
    if (!labelName) return;

    const label = {
      name: labelName,
      description: descriptionRef.current ? descriptionRef.current.value : '',
      color: labelColor || '#EFF0F6',
      textColor,
    };

    const response = fetch('/add/labels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(label),
    });

    setLabelName('');
    setLabelColor(null);
    setTextColor('titleArchieve');
    refresh();
    if (nameRef.current && descriptionRef.current) {
      nameRef.current.value = '';
      descriptionRef.current.value = '';
    }
  };

  return (
    <S.AddLabel>
      <Text text="새로운 레이블 추가" fontSize="larger" />
      <S.ContentsWrapper>
        <S.LabelInfo>
          <S.LabelDisplay>
            <LabelBadge
              name={labelName ? `${labelName}` : '레이블 이름'}
              backgroundColor={labelColor ? `${labelColor}` : '#EFF0F6'}
              textColor={textColor ? `${textColor}` : 'titleArchieve'}
            />
          </S.LabelDisplay>

          <S.LabelDescription>
            <S.InfoInput
              placeholder="레이블 이름"
              maxLength={10}
              onChange={handleChange}
              ref={nameRef}
            />
            <S.InfoInput placeholder="설명(선택)" ref={descriptionRef} />
            <S.LabelColors>
              <LabelBackgroundColor
                refreshHandler={handleRefreshClick}
                color={labelColor}
              />
              <LabelTextColor
                handleDarkClick={handleDarkClick}
                handleWhiteClick={handleWhiteClick}
              />
            </S.LabelColors>
          </S.LabelDescription>
        </S.LabelInfo>

        <Button
          size="small"
          color="primary"
          fontSize="base"
          onClick={handleFinishClick}
        >
          완료
        </Button>
      </S.ContentsWrapper>
    </S.AddLabel>
  );
}
