import React from 'react';
import { observer } from 'mobx-react';

import { StyledSuggestionBox } from './style';
import { Suggestion } from './Suggestion';
import { SuggestionIcon } from './SuggestionIcon';

import dot from '../../store'

export const SuggestionBox = observer(() => (

   <StyledSuggestionBox ref={dot.suggestionsRef} visible={dot.suggestionBoxActivate} width={dot.suggestionBoxWidth} left={dot.suggestionBoxLeft}>
    <SuggestionIcon icon={"search"}/>
    <Suggestion suggestion={"What are you searching for?"} />

    <SuggestionIcon icon={"search"}/>
    <Suggestion suggestion={"What are you searching for?"} />

    <SuggestionIcon icon={"search"}/>
    <Suggestion suggestion={"What are you searching for?"} />

    <SuggestionIcon icon={"search"}/>
    <Suggestion suggestion={"What are you searching for?"} />

    <SuggestionIcon icon={"search"}/>
    <Suggestion suggestion={"What are you searching for?"} />

    <SuggestionIcon icon={"search"}/>
    <Suggestion suggestion={"What are you searching for?"} />

    <SuggestionIcon icon={"search"}/>
    <Suggestion suggestion={"What are you searching for?"} />

    <SuggestionIcon icon={"search"}/>
    <Suggestion suggestion={"What are you searching for?"} />
  </StyledSuggestionBox>
))