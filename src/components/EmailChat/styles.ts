import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface IAuthorProps {
  from_guest: boolean;
  seen: boolean;
}

interface IMessageProps {
  from_guest: boolean;
}

export const Container = styled.div`
  background-color: transparent;
  flex: 1;
`;

export const Header = styled.header`
  height: 64px;
  background-color: var(--white);
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.02);

  > div {
    display: flex;
    align-items: center;

    > button {
      margin-right: 12px;
      background: none;
      > svg {
        path {
          color: var(--icons-alt);
        }

        &:hover {
          cursor: pointer;

          path {
            color: ${shade(0.3, '#A7B6C2')};
          }
        }
      }
    }

    > h3 {
      color: var(--text);
      text-transform: uppercase;
      font-size: 16px;
      line-height: 18px;
    }
  }

  > button {
    height: 38px;
    border-radius: 4px;
    padding: 0 25px;

    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    text-transform: uppercase;
    text-align: center;

    color: var(--white);
    background: var(--primary);
    box-shadow: 0px 1px 0px #0794b6;

    &:hover {
      background: ${shade(0.08, '#00A7CF')};
    }
  }
`;

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: calc(100vh - 64px - 10px);

  position: relative;
`;

export const Messages = styled.div`
  padding: 30px 20px 0;

  display: flex;
  flex-direction: column;

  max-height: calc(100vh - 64px - 240px - 8px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Author = styled.div<IAuthorProps>`
  display: flex;
  align-items: center;

  font-size: 15px;

  > p {
    color: var(--gray);
    margin: 0 10px;

    > strong {
      color: var(--gray);
    }
  }

  svg {
    color: ${({ seen }) => (seen ? '#4fc3f7' : 'var(--icons-alt)')};
  }

  ${props =>
    props.from_guest
      ? css`
          flex-direction: row;
          align-self: flex-start;
        `
      : css`
          flex-direction: row-reverse;
          align-self: flex-end;
        `}
`;

export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;

  background-color: var(--quinary);
`;

export const Message = styled.div<IMessageProps>`
  max-width: 100%;

  margin-top: 24px;
  margin-bottom: 30px;
  padding: 20px;

  color: var(--darGray);
  font-size: 15px;
  line-height: 24px;

  border-radius: 8px;
  position: relative;

  ${props =>
    props.from_guest
      ? css`
          border-top-left-radius: 0;
        `
      : css`
          border-top-right-radius: 0;
        `}

  background-color: ${props =>
    props.from_guest ? 'var(--white)' : 'var(--messagesBackground)'};

  &::before {
    content: '';
    width: 0;
    height: 0;
    display: block;

    position: absolute;
    top: -15px;

    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;


    ${props =>
      props.from_guest
        ? css`
            border-left: 15px solid var(--white);
            left: 0;
          `
        : css`
            right: 0;
            border-right: 15px solid var(--messagesBackground);
          `}
  }
`;

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;

  background-color: var(--white);
  height: 240px;
  padding: 20px 20px 16px;
  box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.05);

  > div {
    display: flex;
    align-items: center;

    > button {
      height: 38px;
      border-radius: 4px;
      padding: 0 25px;

      font-weight: bold;
      font-size: 15px;
      line-height: 18px;
      text-transform: uppercase;
      text-align: center;

      color: var(--white);
      background: var(--primary);
      box-shadow: 0px 1px 0px #0794b6;

      margin-right: 20px;

      &:hover {
        background: ${shade(0.08, '#00A7CF')};
      }
    }

    > div {
      > svg {
        &:hover {
          cursor: pointer;

          path {
            color: ${shade(0.3, '#A7B6C2')};
          }
        }
      }
    }
  }
`;

export const TextArea = styled.textarea`
  flex: 1;
  color: var(--text);
  font-size: 15px;
  line-height: 16px;
  resize: none;
`;

export const AttachIcons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  > svg {
    margin-right: 12px;

    path {
      color: var(--icons-alt);
    }
  }
`;

export const FormatIcons = styled.div`
  display: flex;
  align-items: center;

  > svg {
    margin-right: 12px;

    path {
      color: var(--icons-alt);
    }

    &:nth-child(n + 4) {
      margin-right: 16px;
    }
  }

  > svg:last-child {
    margin-right: 20px;
  }
`;
