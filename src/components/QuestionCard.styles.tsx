import styled from "styled-components";

export const Wrapper = styled.div``

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}
export const ButtonWrapper = styled.div<ButtonWrapperProps>``